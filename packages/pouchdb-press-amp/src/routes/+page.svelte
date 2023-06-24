<script>
    import { PageTitle } from "pouchdb-press-svelte/seo";
    export let data;
</script>
<style>
    section{
        color: blue;
    }
</style>
<PageTitle
  title="Amazing Blog"
  subtitle="A simple layout for Google Amp, with inlined CSS, Fixed nav, Sidebar and Social Share."
/>
<section>
    <p>
        Currently connected to the <strong>{data.info.db_name}</strong> database. It contains <strong>{data.posts.total_rows}</strong> Posts, <strong>{data.info.doc_count}</strong>
        Documents and <strong>{data.info.update_seq-data.info.doc_count}</strong> Changes.
    </p>
    {#each data.posts.rows as post}
        <div>{post.doc.title}</div>
    {/each}
</section>
