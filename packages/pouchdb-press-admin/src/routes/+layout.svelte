<script>
    import {Layout} from "pouchdb-press-svelte";
    import '$lib/theme/default.scss'
    import NavButton from "$lib/NavButton.svelte";
    import CallToAction from "$lib/CallToAction.svelte";
</script>
<svelte:head>
    <link rel="shortcut icon" href="https://picocss.com/favicon.ico">
    <link rel="canonical" href="http://localhost/">
</svelte:head>
<Layout title="Admin" NavButton={NavButton} NavCallToAction={CallToAction}>
    <slot/>
</Layout>
