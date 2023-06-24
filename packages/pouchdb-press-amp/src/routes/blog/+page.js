import { error } from '@sveltejs/kit';
import { posts } from "$lib/posts.js";

/** @type {import('./$types').PageLoad} */
export async function load() {
    try {
        return{rows: (await posts.rows()).map(r=>{
            return r.map(props=>{
                return {
                    ...props,
                    amp: true
                }
            })
        })}
    } catch(e){
        console.log(e)
        throw error(e.status || 500, e.reason);
    }

}

