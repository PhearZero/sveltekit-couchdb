<script>
  export let rows = []
  export let Component
</script>

{#each rows as row}
  <div class="flex-grid">
    {#each row as props}
      <div class="col">
        <svelte:component this={Component} {...props}/>
      </div>
    {/each}
  </div>
{/each}
