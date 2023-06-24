
<script>
  import {PUBLIC_POUCH_PRESS_URL} from "$env/static/public";
  import {page} from '$app/stores'
  let isHome, isEdit, href, text
  $: isHome = $page.route.id === '/admin'
  $: isEdit = $page.route.id === '/edit/[slug]'
  $: href = isHome ? `${PUBLIC_POUCH_PRESS_URL}` : isEdit ? `${$page.url.pathname.replace('edit', 'blog')}` : ''
  // $: console.log($page)
</script>

<a {href} role="button">View Blog</a>
