import type {PageLoad} from './$types';

export const load = (async ({fetch}) => {
    const response = await fetch('api/posts?take=5');
    const posts = await response.json();

    return {posts};
}) satisfies  PageLoad
