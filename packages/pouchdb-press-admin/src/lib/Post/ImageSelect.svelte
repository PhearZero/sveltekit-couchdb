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
<fieldset>
  <legend>Attachments</legend>
<!--  <label for="small">-->
<!--    <input type="radio" id="small" name="size" value="small" checked>-->
<!--    Small-->
<!--  </label>-->
<!--  <label for="medium">-->
<!--    <input type="radio" id="medium" name="size" value="medium">-->
<!--    Medium-->
<!--  </label>-->
<!--  <label for="large">-->
<!--    <input type="radio" id="large" name="size" value="large">-->
<!--    Large-->
<!--  </label>-->
<!--  <label for="extralarge">-->
<!--    <input type="radio" id="extralarge" name="size" value="extralarge" disabled>-->
<!--    Extra Large-->
<!--  </label>-->

{#await attachments}
  <p>Loading</p>
{:then _attachments}
  {#each _attachments as attch,i}
    <div>
      <label for={filenames[i]}>
        <input type="radio" id={filenames[i]} name="img" value={URL.createObjectURL(attch)}>
        {filenames[i]}
      </label>
      <img src={URL.createObjectURL(attch)} {...$$restProps}/>
    </div>
  {/each}

{/await}
<input bind:value={post.img._src} type="file" id="img" name="filename" required>
</fieldset>
