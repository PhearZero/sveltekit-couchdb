<script>
 export let post
 export let edit = false
export let label = edit

 console.log('PostTitle', {post, edit, label, type: typeof post.title})
 // TODO: SEO
</script>
<svelte:head>
    <title>{post.title || "Post"}</title>
    <meta name="description" content={post.subtitle || "Blog Post"}/>
    <link rel="canonical" href={`http://localhost/posts/${post.slug || ''}`}>
</svelte:head>

{#if edit}
    <article>
    <label for="title">Heading</label>
    <input bind:value={post.title} type="text" id="title" name="title" placeholder="New Post" required>
    <label for="subtitle">Subtitle</label>
    <input bind:value={post.subtitle} type="text" id="subtitle" name="subtitle" placeholder="Details about the post, also a description">
        <label for="slug">Slug</label>
        <input disabled={typeof post._rev !== 'undefined'} required bind:value={post._id} type="text" id="slug" name="slug" placeholder={typeof post.title !== 'undefined' ? post.title.toLowerCase().replaceAll(' ', '-'): 'new-post'}>
    </article>
{:else }
    <hgroup>
        <h1>{typeof post.title !== 'undefined' ? post.title : ''}</h1>
        <h2>{typeof post.subtitle !== 'undefined' ? post.subtitle : ''}</h2>
    </hgroup>
{/if}
