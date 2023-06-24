import { writable } from 'svelte/store';
// srcset="img/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg 2000w,
// img/brooke-lark-pGM4sjt_BdQ-unsplash-1000x500.jpg 1000w,
// img/brooke-lark-pGM4sjt_BdQ-unsplash-500x250.jpg 500w"
// width="2000"
export const posts = writable([
    {
        timestamp: Date.now(),
        stub:"/blog/amazing-website",
        heading:"Amazing Website",
        subtitle:"Some details about the site",
        src:"img/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg",
        srcset: "img/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg 2000w," +
            "img/brooke-lark-pGM4sjt_BdQ-unsplash-1000x500.jpg 1000w," +
            "img/brooke-lark-pGM4sjt_BdQ-unsplash-500x250.jpg 500w",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget urna sit amet mauris dictum convallis nec sed eros. Mauris cursus arcu id risus elementum, nec vehicula libero finibus. Integer iaculis consectetur tincidunt. Suspendisse aliquet erat urna, et fermentum metus varius ut. Vivamus malesuada egestas rhoncus. Nam condimentum arcu neque, vitae egestas metus vehicula vel. Donec in laoreet nibh, nec aliquet neque. Phasellus vehicula volutpat felis, in pellentesque nisl ullamcorper varius. Nullam vehicula, turpis vel porta tincidunt, ante dolor finibus odio, a scelerisque augue erat nec leo. Duis eu lobortis metus, nec euismod felis. Proin pharetra rhoncus sem. Integer leo metus, egestas non sollicitudin vitae, maximus sed lorem. Nunc in egestas est. Donec at pellentesque nibh. Sed eget laoreet justo. Sed ut cursus ex.\n" +
            "\n" +
            "Suspendisse potenti. Mauris ipsum nisl, lobortis vitae convallis at, tincidunt et turpis. Nulla tempus ac tortor vel laoreet. Sed luctus congue iaculis. Nulla facilisi. Etiam ullamcorper ultricies varius. Donec ac turpis ac orci cursus porttitor vel quis nisi. Aenean mollis, massa eget eleifend convallis, urna ex gravida dolor, sed semper nisi nunc vel turpis. Etiam rhoncus molestie ultricies. Proin id velit ac turpis condimentum suscipit.\n" +
            "\n" +
            "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla enim mauris, pellentesque lacinia justo a, rutrum pretium augue. Proin feugiat, tellus vitae ornare molestie, ligula justo viverra ipsum, quis pretium sem arcu a enim. Curabitur malesuada neque sit amet leo iaculis scelerisque. Quisque eleifend enim hendrerit lacus dignissim maximus. Praesent sollicitudin mauris eu arcu gravida mattis. Sed eleifend imperdiet nulla, in tincidunt nunc cursus at. Nulla molestie dui a consectetur pretium. Donec et vulputate mi. Suspendisse vitae tellus finibus, tincidunt ex eget, egestas mi. Duis vestibulum blandit lectus suscipit ullamcorper.\n" +
            "\n" +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dui et odio porta lobortis ac sed nibh. Ut ut augue purus. Etiam mattis tempus lacus eu consectetur. Curabitur convallis interdum turpis ac tristique. Duis ut ullamcorper augue. Proin eget rutrum ante. Fusce sed molestie ligula. Nulla ornare quis dolor et tincidunt. Curabitur varius, libero vel vehicula ultrices, dui dui dignissim ante, nec aliquet arcu nunc id tortor.\n" +
            "\n" +
            "Vestibulum porttitor, lacus ut tempus feugiat, tortor nisi varius lectus, in varius erat lacus et nulla. Vestibulum sollicitudin metus molestie elit lacinia, a varius arcu pharetra. Nulla bibendum, lectus et convallis maximus, diam justo rhoncus augue, et elementum lectus nisi in est. Curabitur id tellus semper, mollis turpis posuere, venenatis ipsum. Suspendisse vitae tortor lectus. Donec dapibus elit nec sapien interdum finibus. Nunc a metus purus. Donec ut aliquet mi. Nam luctus eu augue non facilisis."
    },
    {
        stub:"/blog/2134",
        heading:"Wow",
        subtitle:"Man",
        src:"img/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg",
    },
    {
        stub:"/blog/2134",
        heading:"Wow",
        subtitle:"Man",
        src:"img/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg",
    },
    {
        stub:"/blog/2134",
        heading:"Wow",
        subtitle:"Man",
        src:"img/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg",
    },{
        stub:"/blog/2134",
        heading:"Wow",
        subtitle:"Man",
        src:"img/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg",
    },
    {
        stub:"/blog/2134",
        heading:"Wow",
        subtitle:"Man",
        src:"img/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg",
    },
    {
        stub:"/blog/2134",
        heading:"Wow",
        subtitle:"Man",
        src:"img/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg",
    },
    {
        stub:"/blog/2134",
        heading:"Wow",
        subtitle:"Man",
        src:"img/brooke-lark-pGM4sjt_BdQ-unsplash-2000x1000.jpg",
    },
]);
