export interface Category {
    label: string;
    brandColor?: string;
    textColor?: string;
    logo?: ConstructorOfATypedSvelteComponent;
    onlyLogo?: boolean;
}

export interface NavigationItemType {
    label: string,
    href: string
    onlyFooter?: boolean
}

export interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    categories: string[];
    published: boolean;
}

export interface ToolCategory {
    name: string;
    id: string;
    tools: Tool[];
}

export interface Tool {
    name: string;
    description: string;
}

export interface Project {
    link: string;
    href: string;
    name: string;
    description: string;
    src: string;
    srcSet: string;
}
