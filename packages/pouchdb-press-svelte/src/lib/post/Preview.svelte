<script>
    import Image from '$lib/post/Image.svelte'
    // console.log($$props)
    export let post
    export let path = '/blog'
    export let amp = false
    // console.log($$props)
    const {title, subtitle, _id, metadata, media} = post.data
    let img
    $: img = media?.find(obj=>typeof obj.featured === 'boolean' ? obj.featured : false)
    $: console.log({img})
</script>
<a class="unset" href={`${path}/${_id}`}>
    <article>
        <header>
            <hgroup>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </hgroup>
            {#if typeof img?.src !== 'undefined'}
            <Image
              {amp}
                    src={img.src}
                    srcset={img.srcset}
                    width="2000"
                    height="1000"
                    layout="responsive"
                    alt={img.alt}
            />
            {/if}
        </header>
        <footer>
            Published: <small>{new Date(metadata.created).toLocaleString()}</small>
        </footer>
    </article>
</a>
