import adapter from '@sveltejs/adapter-auto';
import {vitePreprocess} from '@sveltejs/kit/vite';
import {escapeSvelte, mdsvex} from "mdsvex";
import shiki from "shiki";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeSlug from "rehype-slug";
/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md'],
    layout: {
        _: './src/mdsvex.svelte'
    },
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [
        remarkUnwrapImages,
    ],
    highlight: {
        highlighter: async (code, lang = 'text', metastring) => {
            const highliter = await shiki.getHighlighter({
                theme: 'poimandres',
            });

            const html = escapeSvelte(highliter.codeToHtml(code, {lang}));
            let metaHtml = ''

            if (metastring) {
                metaHtml = `<span class="code-meta"> ${metastring}</span>` ;
            }

            return `<div class="code-block">${metaHtml}{@html \`${html}\`}</div>`
        }
    }
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
