import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import dotenv from "dotenv";
dotenv.config({path: `.env.${process.env.NODE_ENV}`})
export default defineConfig({
	plugins: [sveltekit()],
	server:{
		port: 3001,
		strictPort:false,
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
