<script>
    import PostEdit from '$lib/Post/Edit.svelte'
    import { Post } from "pouchdb-press";
    export let data

    if(!(data.post instanceof Post)){
      throw TypeError( 'Must have a valid post!')
    }
</script>
<PostEdit bind:post={data.post}/>
