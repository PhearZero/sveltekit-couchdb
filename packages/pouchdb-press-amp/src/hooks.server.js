// https://amp.dev/documentation/guides-and-tutorials/learn/spec/amp-boilerplate/
const boilerplate = `
	<link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js" />
	<script async src="https://cdn.ampproject.org/v0.js"></script>
	<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
`;

/** @param {string} html */
export function transform(html) {
    return html
      .replace(/<style([^]+?)<\/style>/, (match, $1) => `<style amp-custom${$1}</style>`)
      // .replace(/<script[^]+?<\/script>/g, '')
      .replace(/<link[^>]+>/g, (match) => {
          if (/rel=('|")?stylesheet\1/.test(match)) {
              if (/ disabled /.test(match)) return '';
              throw new Error(
                'An AMP document cannot contain <link rel="stylesheet"> — ensure that inlineStyleThreshold is set to Infinity, and remove links from your page template and <svelte:head> elements'
              );
          }

          return match;
      })
      .replace(/<meta[^>]+>/g, (match) => {
          if (match.includes('http-equiv')) return '';
          return match;
      })
      .replace('</head>', boilerplate + '</head>');
}


const ads = `
<amp-auto-ads type="adsense"
        data-ad-client="ca-pub-1827697030280315">
</amp-auto-ads>
`
const sidebar = `
<amp-sidebar id="sidebar-left" layout="nodisplay" side="left">
    <aside>
        <nav>
            <button on="tap:sidebar-left.close" aria-label="Open menu">
                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24" height="16px" fill="none" stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18">
                    </line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <ul>
                <li>
                    <h3>Theme</h3>
                </li>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    </aside>
</amp-sidebar>
`
//<script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>
const addons = `
    <!-- AMP components -->
    
    <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>
    <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
    <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
    
`
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    return resolve(event, {
        transformPageChunk: ({ html, done }) => {
            // console.log(event)
            if (done) {
                return transform(html)
                    .replace('@charset "UTF-8";', '')
                    .replace('</head>', addons + '</head>')
                    .replace('<html lang="en">', '<html lang="en" ⚡>' )
                    .replace('<div class="sidebar"></div>', sidebar)
                    .replace('<div class="ads"></div>', ads)
            }
        }
    });
}
