import { error } from '@sveltejs/kit';
import {posts} from '$lib/posts.js'
import PouchDB from 'pouchdb'
const PouchLocal = PouchDB.defaults({prefix: "http://localhost:3000/"})
const db = new PouchLocal('posts')

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    try {
        return { post: await posts.get(params.slug) }
    } catch(e){
        console.log(e)
        throw error(e.status || 500, e.reason);
    }

}

