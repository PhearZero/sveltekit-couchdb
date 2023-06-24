<script>
    import { toDatetimeLocal } from "$lib/toDateTimeLocal.js";
    import { Post } from "pouchdb-press";
    export let post
    export let edit = false

    if(!(post instanceof Post)){
        throw new TypeError('Must have a valid post!')
    }
    function getDateTimeLocal(_metadata){
        return {
            ..._metadata,
            created: toDatetimeLocal(new Date(_metadata.created)),
            updated: toDatetimeLocal(new Date(_metadata.updated)),
        }
    }
    function getDates(_metadata){
        return {
            ..._metadata,
            created: new Date(_metadata.created),
            updated: new Date(_metadata.updated),
        }
    }
    let metadata
    $: metadata = typeof post.data.metadata.created === 'number' ? edit ? getDateTimeLocal(post.data.metadata) : getDates(post.data.metadata) : post.data.metadata
</script>

{#if edit}
<label for="created">Created Date</label>
<input disabled type="datetime-local" id="created" name="created" bind:value={metadata.created} required>
<label for="updated">Updated Date</label>
<input disabled type="datetime-local" id="updated" name="created" bind:value={metadata.updated} required>
{:else}
    <footer>
        Post Created On: {metadata.created} {typeof metadata.updated === 'undefined' ? '' : `- Updated On: ${metadata.updated}`}
    </footer>
{/if}
