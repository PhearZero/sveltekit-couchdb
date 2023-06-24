<script>
    import PostEdit from "$lib/Post/Edit.svelte";

    Date.prototype.toDatetimeLocal =
        function toDatetimeLocal() {
            var
                date = this,
                ten = function (i) {
                    return (i < 10 ? '0' : '') + i;
                },
                YYYY = date.getFullYear(),
                MM = ten(date.getMonth() + 1),
                DD = ten(date.getDate()),
                HH = ten(date.getHours()),
                II = ten(date.getMinutes())
                // SS = ten(date.getSeconds())
            ;
            return YYYY + '-' + MM + '-' + DD + 'T' +
                HH + ':' + II;
        };
    const now = new Date().toDatetimeLocal()

    // Date.prototype.fromDatetimeLocal = (function (BST) {
    //     // BST should not be present as UTC time
    //     return new Date(BST).toISOString().slice(0, 16) === BST ?
    //         // if it is, it needs to be removed
    //         function () {
    //             return new Date(
    //                 this.getTime() +
    //                 (this.getTimezoneOffset() * 60000)
    //             ).toISOString();
    //         } :
    //         // otherwise can just be equivalent of toISOString
    //         Date.prototype.toISOString;
    // }('2006-06-06T06:06'));
    let data = {
        post: {
            slug: undefined,
            title: undefined,
            subtitle: undefined,
            tags: [],
            content: '<p>🎉</p>',
            metadata: {
                created: now,
                updated: now,
                deleted: false
            }
        },
        tags: []
    }
</script>
<PostEdit bind:data={data}/>
