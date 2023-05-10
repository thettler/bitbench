export  type  Categories = 'sveltekit' | 'php' | 'svelte';

export interface Post {
    slug: string,
    title: string,
    description: string,
    date: Date,
    categories: Categories[],
    published: boolean
}
