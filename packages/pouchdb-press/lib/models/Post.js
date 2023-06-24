import {Model} from '../common/index.js';
import {PostSchema} from '../schemas/index.js';

/**
 * Post
 */
export class Post extends Model {
  /**
   *
   * @param {Store} store
   * @param {object} [data]
   */
  constructor(store, data={}) {
    super(store, PostSchema, data);
  }
  // static schema = PostSchema;
  /**
   * Revision Hash
   * @return {*}
   */
  get rev() {
    return this.data._rev;
  }

  /**
   * Set Post Title
   * @param {string} title
   */
  set title(title) {
    this._data.title = title;
  }

  /**
   * Get Post Title
   * @return {*}
   */
  get title() {
    return this.data.title;
  }

  /**
   * Set Post Subtitle
   * @param {string} subtitle
   */
  set subtitle(subtitle) {
    this._data.subtitle = subtitle;
  }

  get subtitle(){
    return this.data.subtitle
  }
}
