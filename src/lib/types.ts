
export  type  Categories = 'sveltekit' | 'php' | 'svelte';

export interface Category {
    label: string,
    brandColor?: string
    textColor?: string,
    logo?: string
    onlyLogo?: boolean
}

export interface Post {
    slug: string,
    title: string,
    description: string,
    date: Date,
    categories: Category[],
    published: boolean
}

export interface ToolCategory {
    name: string,
    id: string,
    tools: Tool[]
}

export interface Tool {
    name: string,
    description: string,
}

export interface Project {
    link: string,
    href: string,
    name: string,
    description: string,
    src: string,
    srcSet: string,
}

