import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { imagetools } from 'vite-imagetools';
import svelteSVG from 'vite-plugin-svelte-svg';

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools(),
		svelteSVG({
			svgoConfig: {}, // See https://github.com/svg/svgo#configuration
			requireSuffix: true // Set false to accept '.svg' without the '?component'
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
