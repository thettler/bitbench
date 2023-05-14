import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	try {
		const post = await import(`./../../../contents/${params.slug}/+article.md`);
		return { content: post.default, meta: post.metadata };
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}) satisfies PageLoad;
