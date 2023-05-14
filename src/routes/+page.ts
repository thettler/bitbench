import type { PageLoad } from './$types';

export const prerender = false;

export const load = (async ({ fetch }) => {
	const response = await fetch('api/posts');
	let posts = await response.json();
	posts = posts.slice(0, 5);
	return { posts };
}) satisfies PageLoad;
