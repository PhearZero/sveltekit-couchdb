import {Store} from '../common/Store.js';
import {Post} from '../models/Post.js';
import chunk from 'lodash.chunk'
const emit = (key, value) => console.log([key, value]);
const DEFAULT_OPTIONS = {include_docs:true, attachments:true}
const DEFAULT_QUERY_OPTIONS = {...DEFAULT_OPTIONS, reduce: false}
/**
 *
 */
export class Posts extends Store {
  /**
     *
     * @param {PouchDB} db
     */
  constructor(db) {
    super(db, Post);
  }

  /**
     * Initialize the Views
     * @return {Promise<void>}
     */
  async init() {
    this.db.get('_design/filter').catch((e) => {
      if (e.name === 'not_found') {
        this.db.put({
          '_id': '_design/filter',
          'views': {
            'tags': {
              'reduce': '_count',
              'map': function(doc) {
                if (Array.isArray(doc.tags)) {
                  doc.tags.forEach((tag) => {
                    emit(tag, doc._id);
                  });
                }
              }.toString(),
            },
            'posts': {
              'reduce': '_count',
              'map': function(doc) {
                if (Array.isArray(doc.tags)) {
                  emit(doc._id);
                }
              }.toString(),
            },
          },
        });
      }
    });
  }
  async all(options=DEFAULT_QUERY_OPTIONS){
    const res = await this.db.query('filter/posts', options)
    return {
      ...res,
      rows: await Promise.all(res.rows.map(async r=> await new this._Model(this, r.doc)))
    }
  }
  async rows(length = 3, path="/blog", options=DEFAULT_QUERY_OPTIONS){
    const res = await this.all(options)
    return chunk(res.rows.map(r=>{return {post: r, path}}), length)
  }

  async tags({include_docs=true, reduce=true} = {}){
    return await this.db.query('filter/posts', options)
  }
  /**
   *
   * @return {Promise<void>}
   */
  async seed() {

  }
}
