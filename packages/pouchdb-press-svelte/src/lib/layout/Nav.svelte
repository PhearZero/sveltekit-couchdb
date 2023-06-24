<script>
  import AmpSidebarButton from "$lib/layout/Nav/Button/AmpSidebar.svelte";
  import BackToTopButton from "$lib/layout/Nav/Button/BackToTop.svelte";
  export let title = "PouchPress"
  export let Button = AmpSidebarButton
  export let CallToAction = BackToTopButton
</script>
<nav>
  <ul>
    <li>
      <svelte:component this={Button}/>
    </li>
  </ul>
  <ul>
    <li>
      <h1 id="title">{title}</h1>
    </li>
  </ul>
  <ul>
    <li>
      <svelte:component this={CallToAction}/>
    </li>
  </ul>
</nav>
