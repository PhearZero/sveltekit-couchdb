<script>
  import PageTitle from "$lib/seo/PageTitle.svelte";
  export let post
  const {title, subtitle, content} = post?.data;
  let img
  $: img = Array.isArray(post?.data?.media) ? post.data.media.find((obj)=>obj.featured) : undefined
  $: console.log({img, title, subtitle})
</script>
<PageTitle {title} {subtitle}/>
<figure>
  {#if typeof img !== 'undefined'}
  <amp-img
    src={img.src}
    srcset={img.srcset}
    width={img.width || "2000"}
    height={img.height || "1000"}
    layout={img.layout || "responsive"}
    alt={img.alt}
  >
  </amp-img>
    {#if typeof img.attrib !== 'undefined' && typeof img.attrib.href !== 'undefined'}
  <figcaption>Image from <a href={img.attrib.href} target="_blank">{img.attrib.name}</a>
  </figcaption>
      {/if}
  {/if}
</figure>
<p>
  <amp-social-share type="twitter" width="2rem" height="1.5rem" aria-label="Share on Titter"></amp-social-share>
  <amp-social-share type="facebook" width="2rem" height="1.5rem" aria-label="Share on Facebook"></amp-social-share>
  <amp-social-share type="pinterest" width="2rem" height="1.5rem" aria-label="Share on Pinterest">
  </amp-social-share>
</p>
{@html content}
