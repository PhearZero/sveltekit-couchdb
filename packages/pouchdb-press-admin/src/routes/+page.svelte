<script>
  import { Heading, PostPreview, PostGrid } from "pouchdb-press-svelte";
  export let data

  console.log(data)

  console.log(data.posts)
</script>
<Heading title="Pouch-Press Admin" subtitle="Edit or create new Posts"/>
<PostGrid rows={data.posts}/>
