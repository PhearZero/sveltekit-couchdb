<script>
  import Heading from "$lib/layout/Heading.svelte"
  import { page } from "$app/stores";
  export let title
  export let subtitle
  export let description
</script>
<svelte:head>
  <title>{title}</title>
  <meta name="description"
        content={typeof description === 'string' ? description : subtitle}>
  <link rel="canonical" href={$page.url.href}>
</svelte:head>
<Heading {title} {subtitle}/>
