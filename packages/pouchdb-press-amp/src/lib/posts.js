import { PUBLIC_POUCH_PRESS_DATABASE, PUBLIC_POUCH_PRESS_DATABASE_PREFIX } from '$env/static/public'
import {Posts} from "pouchdb-press";
import PouchDB from "pouchdb";
const PouchLocal = PouchDB.defaults({prefix: PUBLIC_POUCH_PRESS_DATABASE_PREFIX})
const db = new PouchLocal(PUBLIC_POUCH_PRESS_DATABASE)
export const posts = new Posts(db)
