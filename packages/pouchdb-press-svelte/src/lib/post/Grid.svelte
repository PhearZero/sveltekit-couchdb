<script>
  import FlexGrid from "$lib/layout/FlexGrid.svelte"
  import Preview from "$lib/post/Preview.svelte";
  export let rows = []
</script>
<FlexGrid bind:rows={rows} Component={Preview}/>
