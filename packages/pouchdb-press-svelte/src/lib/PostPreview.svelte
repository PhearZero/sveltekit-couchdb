<script>
    export let post
    export let path = '/blog'
    const {title, subtitle, _id, metadata, media} = post
    let img
    $: img = media?.find(obj=>obj.main)
    $: console.log(img)
</script>
<style>
    @media (min-width: 992px){
        article>header {
            padding: var(--spacing)
        }
    }
    article>header{
        padding: 0;
        margin-bottom: 0;
    }
    article>header>hgroup {
        border-radius: var(--border-radius);
        background-color: var(--modal-overlay-background-color);
        margin: 0;
        padding: var(--spacing);
    }
    article {
        cursor: pointer;
        margin-top: 0;
        margin-bottom: var(--spacing);
    }
    article>footer {
        margin-top: 0;
        text-align: right;
    }
    .unset {
        all: unset;
    }
</style>
<a class="unset" href={`${path}/${_id}`}>
    <article>
        <header>
            <hgroup>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </hgroup>
            {#if typeof img.src !== 'undefined'}
            <img
                    src={img.src}
                    srcset={img.srcset}
                    width="200"
                    height="100"
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
