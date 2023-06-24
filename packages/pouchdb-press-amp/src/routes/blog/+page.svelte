<script>
    import {PageTitle} from "pouchdb-press-svelte/seo";
    import PostGrid from "pouchdb-press-svelte/post/Grid.svelte";
    export let data
</script>
<svelte:head>
  <script
    async
    custom-element="amp-story"
    src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
  ></script>
</svelte:head>
<!--<PageTitle title="Blog" subtitle="Posts about something cool!"/>-->
<!--<PostGrid bind:rows={data.rows}/>-->
<amp-story
  standalone
  title="Hello Story"
  publisher="The AMP Team"
  publisher-logo-src="/favicon.png"
  poster-portrait-src="http://localhost:3000/posts/amazing-website/DNS.png"
>
  <amp-story-page id="my-first-page">
    <amp-story-grid-layer template="fill">
      <amp-img
        src="http://localhost:3000/posts/amazing-website/DNS.png"
        width="900"
        height="1600"
        alt=""
      >
      </amp-img>
    </amp-story-grid-layer>
    <amp-story-grid-layer template="vertical">
      <h1>Hello, amp-story!</h1>
    </amp-story-grid-layer>
  </amp-story-page>
  <amp-story-page id="my-second-page">
    <amp-story-grid-layer template="fill">
      <amp-img
        src="https://example.ampproject.org/helloworld/bg2.gif"
        width="900"
        height="1600"
        alt=""
      >
      </amp-img>
    </amp-story-grid-layer>
    <amp-story-grid-layer template="vertical">
      <h1>The End</h1>
    </amp-story-grid-layer>
  </amp-story-page>
</amp-story>
