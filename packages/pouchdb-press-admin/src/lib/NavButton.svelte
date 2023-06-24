
<script>
  import {page} from '$app/stores'
  let isHome, href, text
  $: isHome = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/')) === '/'
  $: href = isHome ? "/create" : "/"
  $: text = isHome ? "Add Post" : "Home"
</script>
<a {href} role="button">{text}</a>
