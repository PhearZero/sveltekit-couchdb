<script>
    import Editor from "@tinymce/tinymce-svelte";
    console.log($$props)
    export let value
    let apiKey="jmaqi0svm2q6iz1xi52eu5xgtua5zsvh0wj3gzcihwqy0afl"
    let conf = {
        skin: (typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide' : 'oxide'),
        content_css: '/pico.css',
        style_formats: [
            { title: 'Headers', items: [
                    { title: 'test', block: 'h1' },
                    { title: 'h2', block: 'h2' },
                    { title: 'h3', block: 'h3' },
                    { title: 'h4', block: 'h4' },
                    { title: 'h5', block: 'h5' },
                    { title: 'h6', block: 'h6' }
                ] },

            { title: 'Blocks', items: [
                    { title: 'p', block: 'p' },
                    { title: 'div', block: 'div' },
                    { title: 'pre', block: 'pre' }
                ] },

            { title: 'Containers', items: [
                    { title: 'section', block: 'section', wrapper: true, merge_siblings: false },
                    { title: 'article', block: 'article', wrapper: true, merge_siblings: false },
                    { title: 'header', block: 'header', wrapper: true, merge_siblings: false },
                    { title: 'blockquote', block: 'blockquote', wrapper: true },
                    { title: 'hgroup', block: 'hgroup', wrapper: true },
                    { title: 'aside', block: 'aside', wrapper: true },
                    { title: 'figure', block: 'figure', wrapper: true }
                ] }

        ],
        "height": 500,
        "plugins": [
            "a11ychecker","advlist","advcode","advtable","autolink","checklist","export",
            "lists","link","image","charmap","preview","anchor","searchreplace","visualblocks",
            "powerpaste","fullscreen","formatpainter","insertdatetime","media","table","help","wordcount"
        ],
        "toolbar": "undo redo | a11ycheck casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | " +
            "bullist numlist checklist outdent indent | removeformat | code table help"
    }
</script>
<Editor class="editor" {apiKey} {conf} bind:value={value} name="wow" required/>
