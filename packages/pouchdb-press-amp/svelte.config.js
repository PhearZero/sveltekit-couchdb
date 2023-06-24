import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        inlineStyleThreshold: Infinity,
        // since <link rel="stylesheet"> isn't
        // allowed, inline all styles
        // inlineStyleThreshold: typeof PUBLIC_POUCH_PRESS_AMP !== 'undefined' ? Infinity ,
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            // pages: 'build',
            // assets: 'build',
          fallback: 'app.html',
          hydrate: false,
          router: false,
        }),
    }
};
console.log(config)
export default config;
