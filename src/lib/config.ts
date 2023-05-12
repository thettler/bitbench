import {dev} from "$app/environment";

import Image1 from '$lib/assets/images/me/Tobi_1.jpg?w=500'
import Image1SrcSet from '$lib/assets/images/me/Tobi_1.jpg?w=300;400;500;900;1200&format=webp&as=srcset'
import Image2 from '$lib/assets/images/me/Tobi_2.jpg?w=500'
import Image2SrcSet from '$lib/assets/images/me/Tobi_2.jpg?w=300;400;500;900;1200&format=webp&as=srcset'

import Image3 from '$lib/assets/images/stock/pexels-daria-obymaha-1684151.jpg?w=500'
import Image3SrcSet
    from '$lib/assets/images/stock/pexels-daria-obymaha-1684151.jpg?w=300;400;500;900;1200&format=webp&as=srcset'

import Image4 from '$lib/assets/images/stock/pexels-negative-space-160107.jpg?w=500'
import Image4SrcSet
    from '$lib/assets/images/stock/pexels-negative-space-160107.jpg?w=300;400;500;900;1200&format=webp&as=srcset'

import Image5 from '$lib/assets/images/stock/workplace-plants.jpg?w=500'
import Image5SrcSet from '$lib/assets/images/stock/workplace-plants.jpg?w=300;400;500;900;1200&format=webp&as=srcset'

import Github from '$lib/assets/images/projects/github-mark.png?w=50&h=50'
import GithubSrcSet from '$lib/assets/images/projects/github-mark.png?w=30;50;70&format=webp&as=srcset'

import FormatD from '$lib/assets/images/companies/FormatD.jpg?w=32&h=32&format=webp'
import KPFamily from '$lib/assets/images/companies/KPFamily.jpg?w=32&h=32&format=webp'
import LinksDerIsar from '$lib/assets/images/companies/LinksDerIsar.jpg?w=32&h=32&format=webp'
import Check24 from '$lib/assets/images/companies/Check24.png?w=32&h=32&format=webp'
import Arrabiata from '$lib/assets/images/companies/Arrabiata.jpg?w=32&h=32&format=webp'
import RaMicro from '$lib/assets/images/companies/RaMicro.svg?w=32&h=32&format=webp'
import Ico from '$lib/assets/images/companies/ICO.png?w=32&h=32&format=webp'

import PHP from '$lib/assets/images/categories/php.svg?component'
import Laravel from '$lib/assets/images/categories/laravel.svg?component'
import Vue from '$lib/assets/images/categories/vue.svg?component'
import Ts from '$lib/assets/images/categories/ts.svg?component'
import Svelte from '$lib/assets/images/categories/svelte.svg?component'
import Js from '$lib/assets/images/categories/js.svg?component'

import type {Category, Project, ToolCategory} from "$lib/types";


export const title = "Bitbench"
export const description = "Bitbench is the Blog of Tobias Hettler"
export const url: string = dev ? 'http://localhost:5173/' : 'https://bitbench.dev/'
export const navigation = [
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Articles',
        href: '/articles',
    },
    {
        label: 'Projects',
        href: '/projects',
    },
    {
        label: 'Uses',
        href: '/uses',
    },
    {
        label: 'RSS',
        href: '/rss.xml',
        onlyFooter: true
    }
];
export const galerie = [
    {
        src: Image3,
        alt: "ich",
        srcset: Image3SrcSet,
    },
    {
        src: Image1,
        alt: "ich",
        srcset: Image1SrcSet,
    },
    {
        src: Image5,
        alt: "ich",
        srcset: Image5SrcSet,
    },
    {
        src: Image2,
        alt: "ich",
        srcset: Image2SrcSet,
    },


    {
        src: Image4,
        alt: "ich",
        srcset: Image4SrcSet,
    },
];
export const work = [
    {
        name: 'ICO-Cert',
        position: 'Freelancer',
        src: Ico,
        from: 'Jun 2022',
        until: 'present'
    },
    {
        name: 'RA-MICRO',
        position: 'Freelancer',
        src: RaMicro,
        from: 'Feb 2022',
        until: 'Aug 2022'
    },
    {
        name: 'FormatD GmbH',
        position: 'Full Stack Developer',
        src: FormatD,
        from: 'Aug 2021',
        until: 'Jan 2022'
    },
    {
        name: 'KP Family International GmbH',
        position: 'Full Stack Developer',
        src: KPFamily,
        from: 'Mar 2021',
        until: 'Jul 2021'
    },
    {
        name: 'Links Der Isar GmbH',
        position: 'Full Stack Developer',
        src: LinksDerIsar,
        from: 'Sep 2018',
        until: 'Feb 2021'
    },
    {
        name: 'Check24 Vergleichsportal',
        position: 'Junior PHP-Developer',
        src: Check24,
        from: 'Nov 2016',
        until: 'Sep 2018'
    },
    {
        name: 'Arrabiata Solutions GmbH',
        position: 'Trainee',
        src: Arrabiata,
        from: 'Jul 2016',
        until: 'Oct 2018'
    },
    {
        name: 'Arrabiata Solutions GmbH',
        position: 'Apprentice application development',
        src: Arrabiata,
        from: 'Sep 2013',
        until: 'Jun 2016'
    }
]
export const projects: Project[] = [
    {
        src: Github,
        href: 'https://github.com/thettler/laravel-console-toolkit',
        link: 'github.com/thettler/laravel-console-toolkit',
        name: 'Laravel Console Toolkit',
        description: 'Adds argument casting, validation, autoAsk and more to Laravel Commands. Also, it lets you define your command signature with properties and attributes for better ide support and static analysis.',
        srcSet: GithubSrcSet,
    }
]
export const tools: ToolCategory[] = [
    {
        id: 'languages-frameworks',
        name: 'Languages & Frameworks',
        tools: [
            {
                name: 'PHP',
                description: 'I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use.'
            },
            {
                name: 'JavaScript/TypeScript',
                description: 'Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.'
            },
        ]
    },
    {
        id: 'tools',
        name: 'Tools',
        tools: [
            {
                name: 'PHPStorm',
                description: 'I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use.'
            },
            {
                name: 'Github',
                description: 'Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.'
            },
        ]
    }
]
export const socials = [
    {
        icon: '          <svg viewBox="0 0 24 24" aria-hidden="true"\n' +
            '                     class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">\n' +
            '                    <path fill-rule="evenodd" clip-rule="evenodd"\n' +
            '                          d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>\n' +
            '                </svg>',
        name: 'GitHub',
        href: 'https://github.com/thettler',
    },


    {
        icon: '      <svg viewBox="0 0 24 24" aria-hidden="true"\n' +
            '                     class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">\n' +
            '                    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>\n' +
            '                </svg>',
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/tobias-hettler-56a184230/',
    },
    {
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"\n' +
            'class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">\n' +
            '<path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>\n' +
            '</svg>',
        name: 'Twitter',
        href: 'https://twitter.com/bitbench',
    },
    {
        icon: '       <svg viewBox="0 0 74 79" xmlns="http://www.w3.org/2000/svg"\n' +
            '                     class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">\n' +
            '                    <path d="M73.7014 17.4323C72.5616 9.05152 65.1774 2.4469 56.424 1.1671C54.9472 0.950843 49.3518 0.163818 36.3901 0.163818H36.2933C23.3281 0.163818 20.5465 0.950843 19.0697 1.1671C10.56 2.41145 2.78877 8.34604 0.903306 16.826C-0.00357854 21.0022 -0.100361 25.6322 0.068112 29.8793C0.308275 35.9699 0.354874 42.0498 0.91406 48.1156C1.30064 52.1448 1.97502 56.1419 2.93215 60.0769C4.72441 67.3445 11.9795 73.3925 19.0876 75.86C26.6979 78.4332 34.8821 78.8603 42.724 77.0937C43.5866 76.8952 44.4398 76.6647 45.2833 76.4024C47.1867 75.8033 49.4199 75.1332 51.0616 73.9562C51.0841 73.9397 51.1026 73.9184 51.1156 73.8938C51.1286 73.8693 51.1359 73.8421 51.1368 73.8144V67.9366C51.1364 67.9107 51.1302 67.8852 51.1186 67.862C51.1069 67.8388 51.0902 67.8184 51.0695 67.8025C51.0489 67.7865 51.0249 67.7753 50.9994 67.7696C50.9738 67.764 50.9473 67.7641 50.9218 67.7699C45.8976 68.9569 40.7491 69.5519 35.5836 69.5425C26.694 69.5425 24.3031 65.3699 23.6184 63.6327C23.0681 62.1314 22.7186 60.5654 22.5789 58.9744C22.5775 58.9477 22.5825 58.921 22.5934 58.8965C22.6043 58.8721 22.621 58.8505 22.6419 58.8336C22.6629 58.8167 22.6876 58.8049 22.714 58.7992C22.7404 58.7934 22.7678 58.794 22.794 58.8007C27.7345 59.9796 32.799 60.5746 37.8813 60.5733C39.1036 60.5733 40.3223 60.5733 41.5447 60.5414C46.6562 60.3996 52.0437 60.1408 57.0728 59.1694C57.1983 59.1446 57.3237 59.1233 57.4313 59.0914C65.3638 57.5847 72.9128 52.8555 73.6799 40.8799C73.7086 40.4084 73.7803 35.9415 73.7803 35.4523C73.7839 33.7896 74.3216 23.6576 73.7014 17.4323ZM61.4925 47.3144H53.1514V27.107C53.1514 22.8528 51.3591 20.6832 47.7136 20.6832C43.7061 20.6832 41.6988 23.2499 41.6988 28.3194V39.3803H33.4078V28.3194C33.4078 23.2499 31.3969 20.6832 27.3894 20.6832C23.7654 20.6832 21.9552 22.8528 21.9516 27.107V47.3144H13.6176V26.4937C13.6176 22.2395 14.7157 18.8598 16.9118 16.3545C19.1772 13.8552 22.1488 12.5719 25.8373 12.5719C30.1064 12.5719 33.3325 14.1955 35.4832 17.4394L37.5587 20.8853L39.6377 17.4394C41.7884 14.1955 45.0145 12.5719 49.2765 12.5719C52.9614 12.5719 55.9329 13.8552 58.2055 16.3545C60.4017 18.8574 61.4997 22.2371 61.4997 26.4937L61.4925 47.3144Z" fill="inherit"/>\n' +
            '                </svg>',
        name: 'Mastodon',
        href: 'https://phpc.social/@bitbench',
    },
    {
        icon: '            <svg viewBox="0 0 24 24" aria-hidden="true"\n' +
            '                     class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">\n' +
            '                    <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>\n' +
            '                    <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>\n' +
            '                </svg>',
        name: 'Instagram',
        href: 'https://instagram.com/bitbench.dev',
    },
]
export const categories: Record<string, Category> = {
    php: {
        label: 'PHP',
        brandColor: '#777BB3',
        textColor: 'white',
        onlyLogo: true,
        logo: PHP
    },
    laravel: {
        label: 'Laravel',
        brandColor: '#FF2C1F',
        textColor: 'white',
        logo: Laravel
    },
    vue: {
        label: 'Vue.js',
        logo: Vue
    },
    svelte: {
        label: 'Svelte',
        logo: Svelte
    },
    sveltekit: {
        label: 'Sveltekit',
        logo: Svelte
    },
    js: {
        label: 'JavaScript',
        logo: Js
    },
    ts: {
        label: 'TypeScript',
        logo: Ts
    }
}
