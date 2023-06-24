import { error } from '@sveltejs/kit';
import PouchDB from 'pouchdb'
const PouchLocal = PouchDB.defaults({prefix: "http://localhost:3000/"})
const db = new PouchLocal('posts')



/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    // console.log('running load')
    try {
        return {
            info: await db.info(),
            posts: await db.query('filter/posts', {include_docs: true, reduce: false})
        }
    } catch(e){
        throw error(500, e.reason);
    }

}

export const prerender = true
export const csr = false
