import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Post } from '$lib/types';

export const GET = (async () => {
	// const offset = Number(url.searchParams.get('offset') ?? '0');
	// const take = url.searchParams.get('take') == null ? null : Number(url.searchParams.get('take'));

	const posts = await getPosts();
	// offset,
	// take,
	return json(posts);
}) satisfies RequestHandler;

async function getPosts(offset = 0, take: null | number = null) {
	const paths: Record<string, Record<string, any>> = import.meta.glob(
		'/src/contents/*/+article.md',
		{ eager: true }
	);
	take = take ?? Object.keys(paths).length;

	return Object.entries(paths)
		.slice(offset, offset + take)
		.map(
			([path, file]) =>
				({
					...file.metadata,
					slug: path.split('/').at(-2),
					categories: file.metadata?.categories ?? [],
					date: file.metadata.date
				} satisfies Post)
		)
		.filter((post: Post) => post.published)
		.sort((a: Post, b: Post) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}
