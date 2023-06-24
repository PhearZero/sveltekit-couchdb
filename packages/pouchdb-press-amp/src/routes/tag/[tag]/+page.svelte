<script>
    export let data;
</script>
<svelte:head>
    <title>Awesome Svelte Website</title>
    <meta name="description"
          content="A simple layout for Google Amp, with inlined CSS, Fixed nav, Sidebar and Social Share.  Built with Pico CSS.">
    <link rel="shortcut icon" href="https://picocss.com/favicon.ico">
    <link rel="canonical" href="https://picocss.com/examples/google-amp/">
</svelte:head>
<hgroup id="title">
    <h1>Tag: {data.tag}</h1>
    <h2>{data.subtitle}</h2>
</hgroup>

