import { error } from '@sveltejs/kit';
import {posts} from "$lib/posts.js";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  try {
    return {
      info: await posts.db.info(),
      posts:  await posts.rows(3, "/edit",{include_docs: true, reduce: false})
    }
  } catch(e){
    throw error(500, e.reason);
  }

}

