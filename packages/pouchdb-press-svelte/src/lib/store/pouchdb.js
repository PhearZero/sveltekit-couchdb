import PouchDB from "pouchdb";

let dbName = 'posts'

export const db = new PouchDB.defaults({ prefix: "./.data/" })(dbName)
