import { error } from '@sveltejs/kit';

export const prerender = false
const data = [
    {
        tag: 'JavaScript',
        subtitle: 'Posts about JavaScript'
    },
    {
        tag: 'PHP',
        subtitle: 'Posts about JavaScript'
    }
]
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const res = data.filter(e=> e.tag.toLowerCase() === params.tag)
    if(res.length === 0) throw error(404, 'Not found');
    return res[0];
}
