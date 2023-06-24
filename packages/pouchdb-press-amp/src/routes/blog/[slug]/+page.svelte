<script>
    import { PostPage } from "pouchdb-press-svelte/post";
    export let data;
</script>
<svelte:head>
  <title>So Much Wow</title>
  {#if data?.post?.data?.content?.includes('amp-gist')}
  <script async custom-element="amp-gist" src="https://cdn.ampproject.org/v0/amp-gist-0.1.js"></script>
  {/if}
</svelte:head>
<PostPage post={data.post}/>
