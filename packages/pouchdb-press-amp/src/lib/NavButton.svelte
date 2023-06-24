
<script>
  import {page} from '$app/stores'
  let isHome, href, text
  $: isHome = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/')) === '/admin'
  $: href = isHome ? "/create" : "/admin"
  $: text = isHome ? "Add Post" : "Home"

  console.log({isHome, href, text, path: $page.url.pathname.substr($page.url.pathname.lastIndexOf('/'))})
</script>
<a {href} role="button">{text}</a>
