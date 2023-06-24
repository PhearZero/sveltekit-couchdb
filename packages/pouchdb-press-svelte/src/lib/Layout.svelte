<script>
  import { themeSwitcher } from '$lib/theme-switcher';
  import { onMount } from 'svelte';
  import Nav from "$lib/layout/Nav.svelte";
  import AmpSidebarButton from "$lib/layout/Nav/Button/AmpSidebar.svelte";
  import BackToTopButton from "$lib/layout/Nav/Button/BackToTop.svelte";
  import Footer from "$lib/layout/Footer.svelte";

  export let Navigation = Nav
  export let NavButton = AmpSidebarButton
  export let NavCallToAction = BackToTopButton
  export let title
  export let main = true
  onMount(()=>{
    themeSwitcher.init();

  })

</script>
<svelte:component this={Navigation} title={title} Button={NavButton} CallToAction={NavCallToAction}/>
{#if main}
<main>
  <slot />
</main>
  {:else }
  <slot/>
{/if}
<Footer/>
