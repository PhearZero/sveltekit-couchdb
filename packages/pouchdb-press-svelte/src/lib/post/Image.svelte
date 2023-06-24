<script>
  export let amp = false
  export let alt
  export let src
</script>

{#if amp}
  <amp-img {alt} {src} {...$$restProps}></amp-img>
  {:else }
  <img {alt} {src} {...$$restProps}/>
{/if}
