import PouchDB from 'pouchdb';
import {Model} from './Model.js';

/**
 * @typedef {import('pouchdb').default} PouchDB
 */

/**
 * StoreError
 */
export class StoreError extends Error {
  /**
   * Store Error Constructor
   * @param {string} props
   */
  constructor(props) {
    super(props);
  }
}

/**
 * @abstract
 */
export class Store {
  /**
   *
   * @param {PouchDB<Model>} db
   * @param {Model.constructor} ModelClass
   * @abstract
   */
  constructor(db, ModelClass) {
    if (this.constructor === Store) {
      throw new StoreError(' Object of Abstract Class cannot be created');
    }
    if (!(db instanceof PouchDB)) {
      throw new TypeError('Invalid pouchdb instance!');
    }
    if (!(ModelClass.prototype instanceof Model)) {
      throw new TypeError('Invalid Model');
    }

    /**
     * Database Instance
     * @type {PouchDB<Model>}
     * @private
     */
    this._db = db;
    this.db = db;
    /**
     * Model Constructor
     * @type {Model.constructor}
     * @private
     */
    this._Model = ModelClass;
  }

  /**
   * Get Document
   *
   * Uses pouchdb.get() pattern but catches not_found errors.
   * @param {string} id Document ID
   * @param {object} [options] Database Options
   * @return {Promise<undefined|Model>}
   */
  async get(id, options = {}) {
    const data = await this.db.get(id, options).catch((e) => {
      if (e.name !== 'not_found') {
        throw new StoreError(e);
      }
    });
    if (typeof data !== 'undefined') {
      return await new this._Model(this, data);
    }
  }

  /**
   * Add a Model
   * @param {Object} data
   * @return {Promise<Model>}
   */
  async add(data) {
    const entity = await new this._Model(this, data);
    if (typeof entity._data._rev !== 'undefined') {
      throw new Error(
          `${this._Model.name} "${entity._data._id}" already exists \n` +
        `See store.update({ "_id": "${entity._data._id}" })`,
      );
    }
    await entity.save(this);
    return entity;
  }

  /**
   * Update
   *
   * @param {Object} data Model Shape
   * @param {boolean }[merge] Merges with existing data by default
   * @return {Promise<Model>}
   */
  async update(data, merge = true) {
    const entity = await this.get(data._id);
    if (typeof entity === 'undefined') {
      throw new Error(
          `${this._Model.name} "${data._id}" does not exist, use add()`,
      );
    }
    return entity.update(data, merge);
  }

  /**
   * Initialize the Views
   * @abstract
   * @return {Promise<void>}
   */
  async init() {
  }

  /**
   * Seed the Database
   * @abstract
   * @return {Promise<void>}
   */
  async seed() {
  }
}
