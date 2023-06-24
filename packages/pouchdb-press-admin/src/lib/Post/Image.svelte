<script>
  export let post
  export let db


  let attachments, filenames
  $: filenames = Object.keys(post?._attachments || {})
  function toObjectURL(attachments){
    return attachments.map(URL.createObjectURL)
  }
  async function getAttachments(_db, _post){
    const filenames = Object.keys(_post?._attachments || {})

    async function getAttachments(names){
      return await Promise.all(names.map(name=>_db.getAttachment(_post._id, name)))
    }

    return await getAttachments(filenames)
  }
  $: attachments = getAttachments(db, post)
  $: console.log({attachments })
  $: console.log({attachments })
  // $: attachments =
</script>
{#await attachments}
  <p>Loading</p>
  {:then _attachments}
  {#each _attachments as attch,i}
    <div>
      {filenames[i]}
    <img src={URL.createObjectURL(attch)} {...$$restProps}/>
    </div>
  {/each}

{/await}
<input bind:value={post.img._src} type="file" id="img" name="filename" required>
