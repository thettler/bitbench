import adapter from '@sveltejs/adapter-auto';
import {vitePreprocess} from '@sveltejs/kit/vite';
import {mdsvex} from "mdsvex";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.md', '.svelte'],
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

    kit: {

        adapter: adapter()
    }
};

export default config;
