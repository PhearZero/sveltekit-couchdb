
<script>
  import {PUBLIC_POUCH_PRESS_URL} from "$env/static/public";
  import {page} from '$app/stores'
  let isHome, isEdit, href, text
  $: isHome = $page.route.id === '/'
  $: isEdit = $page.route.id === '/edit/[slug]'
  $: href = isHome ? `${PUBLIC_POUCH_PRESS_URL}` : isEdit ? `${PUBLIC_POUCH_PRESS_URL}${$page.url.pathname.replace('edit', 'blog')}` : ''
  $: console.log($page)
</script>

<a {href} role="button" target="_blank">View Blog</a>
