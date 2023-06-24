import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit({
		build: {
			lib: {
				entry: "lib/index.js"
			}
		}
	})],
	test: {
		include: ['lib/**/*.{test,spec}.{js,ts}']
	}
});
