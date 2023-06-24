<script>
  export let tags
  export let edit = false
  export let onAddTag

  const handleAddTag = ()=>{

  }
</script>
{#if edit}
  <label for="tags">
    Tags
    <div id="tags" class="edit-block">
      {#each tags as tag}
        <a href={`/tags/${tag.name}`} style={`background-color: ${tag.color}; border-color: ${tag.color}`}
           role="button">{tag.name}</a>
      {/each}
      <a href={`/tags`} role="button" on:click={onAddTag}>+</a>
    </div>
  </label>
  {:else }
  <label for="tags">
    Tags
    <div id="tags" class="edit-block">
      {#each tags as tag}
        <a href={`/tags/${tag.name}`} style={`background-color: ${tag.color}; border-color: ${tag.color}`}
           role="button">{tag.name}</a>
      {/each}
      <a href={`/tags`} role="button" on:click={onAddTag}>+</a>
    </div>
  </label>
{/if}
