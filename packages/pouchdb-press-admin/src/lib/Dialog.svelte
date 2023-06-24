<script>
    export let open = false
    export let Component

    export let onClose = ()=>{
        open = !open
    }
</script>

<dialog {open}>
    <Component {onClose} {...$$props}/>
</dialog>
