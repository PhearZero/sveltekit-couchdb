const addons = `
    <!-- AMP components -->
    <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>
    <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
    <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
`
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    let buffer = '';
    return resolve(event, {
        transformPageChunk: ({ html, done }) => {
            buffer += html;
            if (done) {
                const res =  html
                    .replace('</head>', addons + '</head>');
                return res
            }
        }
    });
}
