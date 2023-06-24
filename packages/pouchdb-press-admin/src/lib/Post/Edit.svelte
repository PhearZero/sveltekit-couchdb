    <script>
    import Editor from '$lib/Editor.svelte'
    import Title from "$lib/Post/Title.svelte";
    import Metadata from "$lib/Post/Metadata.svelte";
    import Tags from "$lib/Post/Tags.svelte";
    import {Posts} from 'pouchdb-press'
    import PouchDB from "pouchdb";
    import { onMount } from "svelte";
    import { PUBLIC_POUCH_PRESS_DATABASE, PUBLIC_POUCH_PRESS_DATABASE_PREFIX } from "$env/static/public";
    import Image from "$lib/Post/Image.svelte";
    import ImageSelect from "$lib/Post/ImageSelect.svelte";
    import Manage from "$lib/Post/Attachments/Manage.svelte";
    export let post

    const PouchHTTP = PouchDB.defaults(
      {prefix: PUBLIC_POUCH_PRESS_DATABASE_PREFIX, adapter: 'http'},
    );
    const db = new PouchHTTP(PUBLIC_POUCH_PRESS_DATABASE);

    let posts, tags,
      titleEdit = true, metaDataEdit=true, tagEdit = true
    $: (titleEdit = typeof post.title === 'undefined' ? true : titleEdit)
    $: (metaDataEdit = typeof post.data.metadata.created === 'undefined' ? true : metaDataEdit)
    $: (tagEdit = typeof post.data.tags === 'undefined' ? true : tagEdit)

    onMount(async ()=>{
        console.log('Post Loaded')
        posts = await new Posts(db)
        console.log(posts)
    })
    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        const formData = new FormData(form);
        const allEntries = [...formData.entries()]
          .reduce((all, entry) => {
              all[entry[0]] = entry[1]
              return all
          }, {})
        console.log(allEntries, post)
        console.log(
          await allEntries.filename.text())
        console.log(post, formData)
        posts.update({
            ...post.data,
            _id: post.slug || post._id,
            metadata: {
                ...post.data.metadata,
                created: new Date(post.data.metadata.created).getTime(),
                updated: new Date(post.data.metadata.updated).getTime()
            },
        }, false)
        e.preventDefault()
    }
    const handleEditTags = (e) => {
        e.preventDefault()
        console.log('edit tags operation')
        tagEdit = !tagEdit
    }
    const handleEditTitle = (e) => {
        e.preventDefault()
        console.log('edit title operation')
        titleEdit = !titleEdit
    }

    const handleEditMetadata = (e) =>{
        e.preventDefault()
        metaDataEdit = !metaDataEdit
    }
    const handleAddTag = (e) => {
        e.preventDefault()
        console.log('adding tag operation')
    }
    $: console.log(post)
</script>

<style>
    :global(.tinymce-wrapper>.tox-tinymce) {
        width: 100%;
    }
    .edit-button{
        float: right;
        top: -60px;
        position: relative;
    }
    .edit-block {
        border-color: var(--mark-background-color);
        border-width: 1px;
        border-style: dashed;
    }
</style>
<form on:submit={handleSubmit} enctype="multipart/form-data">
    <!-- Grid -->
    <div class="grid edit-block">
        <Title bind:post={post} bind:edit={titleEdit}/>

        {#if typeof post.title === 'string' && post.title !== ''}
        <a class="edit-button" href={`/tags`} role="button" on:click={handleEditTitle}><span class="material-icons">
            {titleEdit ? "visibility" : "edit"}
            </span></a>
        {/if}
    </div>

        <div class="edit-block">
            <Manage bind:post={post} db={db} height={200} width={300}/>
            <a class="edit-button" href={`/tags`} role="button" on:click={handleEditTitle}><span class="material-icons">
            {titleEdit ? "visibility" : "edit"}
            </span></a>
        </div>
        <div class="edit-block">
        <Tags tags={post.data.tags} onAddTag={handleAddTag} bind:edit={tagEdit}/>
            <a class="edit-button" href={`/tags`} role="button" on:click={handleEditTags}><span class="material-icons">
            {tagEdit ? "visibility" : "edit"}
            </span></a>
        </div>
        <div class="edit-block">
            <label for="content">
                Content
            </label>
            <div id="content">
                <Editor bind:value={post.data.content}/>
            </div>
        </div>
        <div class="grid edit-block">
            <Metadata bind:post={post} bind:edit={metaDataEdit}/>

                <a class="edit-button" href={`/tags`} role="button" on:click={handleEditMetadata}><span class="material-icons">
            {metaDataEdit ? "visibility" : "edit"}
            </span></a>

        </div>


    <!-- Button -->
    <button type="submit">Save</button>
    <button type="submit">Delete</button>

</form>
