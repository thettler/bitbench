import type {PageLoad} from "./$types";
export const prerender = true;
export const load = (async ({url}) => ({url: url.pathname})) satisfies PageLoad
