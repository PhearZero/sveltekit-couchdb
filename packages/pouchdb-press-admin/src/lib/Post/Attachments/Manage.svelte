<script>
  export let post
  export let db
  let attachments, filenames, media
  $: filenames = Object.keys(post?.data?._attachments || {})
  $: media = post?.data?.media || []
  // async function getAttachments(_db, _post){
  //   const filenames = Object.keys(_post?.data?._attachments || {})
  //
  //   async function _getAttachments(names){
  //     const _attach = await Promise.all(names.map(name=>({blob: _db.getAttachment(_post.data?._id, name), name})))
  //     _attach.forEach(a=>{
  //       const iMedia = media.indexOf((obj)=>a.name === obj.attachmentId)
  //       if(media !== -1){
  //         media[iMedia] = {
  //           ...media[iMedia]
  //         }
  //       }
  //       console.log({iMedia, name: a.name, media})
  //     })
  //     return await Promise.all(names.map(name=>_db.getAttachment(_post.data?._id, name)))
  //   }
  //
  //   return await _getAttachments(filenames)
  // }
  // $: attachments = getAttachments(db, post)

  const handleMainChange = async (e) =>{
    console.log(e, e.target.value)
    media[media.findIndex(obj=>obj.featured)].featured = false
    media[media.findIndex(obj=>obj.attachmentId === e.target.id)].featured = true
  }
  const handleDeleteAttachment = async (e, attch)=>{
    e.preventDefault()
    console.log('hello world')
    delete post.data._attachments[attch.attachmentId]
    media.splice(media.findIndex(obj=>obj.attachmentId === attch.attachmentId), 1)
    media = media
    console.log(media.length)
  }
  const handleUpload = async (e) =>{
    e.preventDefault()

    const file = e.target.files[0]
    post = await post.update({
      media,
      _attachments: {
        [file.name]: {
          content_type: file.type,
          data: file
        }
      }
    })

  }
</script>
<fieldset class="flex-grid">
  <legend>Attachments</legend>
    {#each media as attch,i}
      <div class="col">
        {attch.type} {i}
        {#if attch.type.match('image')}
        <label for={attch.attachmentId}>
          <input on:change={handleMainChange} type="radio" id={attch.attachmentId} name="featured" checked={attch.featured}>
          {attch.attachmentId}
        </label>
        <img src={attch.src} {...$$restProps}/>
          <button on:click={(e)=>handleDeleteAttachment(e, attch)}>Delete</button>
        {/if}
      </div>
    {/each}
  <input on:change={handleUpload} type="file" id="img" name="filename">
</fieldset>
