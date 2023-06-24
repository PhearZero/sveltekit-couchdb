import { error } from '@sveltejs/kit';
import {posts} from '$lib/posts.js'
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const post = await posts.get(params.slug)
    if(typeof post === 'undefined') throw error(404, 'Not found');
    post.data.tags = post.data.tags.map(t=>{
        return {
            name: t,
            color:  `#${ Math.floor(Math.random()*16777215).toString(16)}`
        }
    })
    return {post};
}

// export function entries(){
//     return [
//         {
//             slug: 'javascript',
//         },
//         {
//             slug: 'php',
//         }
//     ]
// }
