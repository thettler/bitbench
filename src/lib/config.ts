import { dev } from '$app/environment';

import Image1 from '$lib/assets/images/me/Tobi_1.jpg?w=500&imagetool';
import Image1SrcSet from '$lib/assets/images/me/Tobi_1.jpg?w=300;400;500;900;1200&format=webp&as=srcset&imagetool';
import Image2 from '$lib/assets/images/me/Tobi_2.jpg?w=500&imagetool';
import Image2SrcSet from '$lib/assets/images/me/Tobi_2.jpg?w=300;400;500;900;1200&format=webp&as=srcset&imagetool';

import Image3 from '$lib/assets/images/stock/pexels-daria-obymaha-1684151.jpg?w=500&imagetool';
import Image3SrcSet from '$lib/assets/images/stock/pexels-daria-obymaha-1684151.jpg?w=300;400;500;900;1200&format=webp&as=srcset&imagetool';

import Image4 from '$lib/assets/images/stock/pexels-negative-space-160107.jpg?w=500&imagetool';
import Image4SrcSet from '$lib/assets/images/stock/pexels-negative-space-160107.jpg?w=300;400;500;900;1200&format=webp&as=srcset&imagetool';

import Image5 from '$lib/assets/images/stock/workplace-plants.jpg?w=500&imagetool';
import Image5SrcSet from '$lib/assets/images/stock/workplace-plants.jpg?w=300;400;500;900;1200&format=webp&as=srcset&imagetool';

import Github from '$lib/assets/images/projects/github-mark.png?w=50&h=50&imagetool';
import GithubSrcSet from '$lib/assets/images/projects/github-mark.png?w=30;50;70&format=webp&as=srcset&imagetool';

import FormatD from '$lib/assets/images/companies/FormatD.jpg?w=32&h=32&format=webp&imagetool';
import KPFamily from '$lib/assets/images/companies/KPFamily.jpg?w=32&h=32&format=webp&imagetool';
import LinksDerIsar from '$lib/assets/images/companies/LinksDerIsar.jpg?w=32&h=32&format=webp&imagetool';
import Check24 from '$lib/assets/images/companies/Check24.png?w=32&h=32&format=webp&imagetool';
import Arrabiata from '$lib/assets/images/companies/Arrabiata.jpg?w=32&h=32&format=webp&imagetool';
import RaMicro from '$lib/assets/images/companies/RaMicro.svg?w=32&h=32&format=webp&imagetool';
import Ico from '$lib/assets/images/companies/ICO.png?w=32&h=32&format=webp&imagetool';

import PHP from '$lib/assets/images/categories/php.svg?component';
import Laravel from '$lib/assets/images/categories/laravel.svg?component';
import Vue from '$lib/assets/images/categories/vue.svg?component';
import Ts from '$lib/assets/images/categories/ts.svg?component';
import Svelte from '$lib/assets/images/categories/svelte.svg?component';
import Js from '$lib/assets/images/categories/js.svg?component';

import Malt from '$lib/assets/images/social/malt.svg?component';
import GitHub from '$lib/assets/images/social/github.svg?component';
import Instagram from '$lib/assets/images/social/instagram.svg?component';
import LinkedIn from '$lib/assets/images/social/linked_in.svg?component';
import Mastodon from '$lib/assets/images/social/mastodon.svg?component';
import Twitter from '$lib/assets/images/social/twitter.svg?component';

import type { Category, Project, ToolCategory } from '$lib/types';

export const title = 'Bitbench';
export const description = 'Bitbench is the Blog of Tobias Hettler';
export const url: string = dev ? 'http://localhost:5173' : 'https://bitbench.dev';
export const navigation = [
	{
		label: 'Home',
		href: '/'
	},
	{
		label: 'About',
		href: '/about'
	},
	{
		label: 'Articles',
		href: '/articles'
	},
	{
		label: 'Projects',
		href: '/projects'
	},
	{
		label: 'Uses',
		href: '/uses'
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
		alt: 'ich',
		srcset: Image3SrcSet
	},
	{
		src: Image1,
		alt: 'ich',
		srcset: Image1SrcSet
	},
	{
		src: Image5,
		alt: 'ich',
		srcset: Image5SrcSet
	},
	{
		src: Image2,
		alt: 'ich',
		srcset: Image2SrcSet
	},

	{
		src: Image4,
		alt: 'ich',
		srcset: Image4SrcSet
	}
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
];
export const projects: Project[] = [
	{
		src: Github,
		href: 'https://github.com/thettler/laravel-console-toolkit',
		link: 'github.com/thettler/laravel-console-toolkit',
		name: 'Laravel Console Toolkit',
		description:
			'Adds argument casting, validation, autoAsk and more to Laravel Commands. Also, it lets you define your command signature with properties and attributes for better ide support and static analysis.',
		srcSet: GithubSrcSet
	}
];
export const tools: ToolCategory[] = [
	{
		id: 'languages-frameworks',
		name: 'Languages & Frameworks',
		tools: [
			{
				name: 'PHP',
				description:
					'My one big love, i started programming with PHP and i am still in love with it. Every version PHP gets better and better together ' +
					'with the community and the ecosystem PHP is hands down the best way to write websites, apis and more.'
			},
			{
				name: 'Laravel',
				description:
					'This Framework just gives you so much. I use Laravel since version 5.0 and ' +
					'i am always baffled how quickly it lets you create your next big thing with extensive scaffolding and tools out of the box.'
			},
			{
				name: 'JavaScript/TypeScript',
				description:
					'There it is my love/hate relation. You can create amazing stuff with JS and TS but sometimes it can get ' +
					'really frustrating. Regardless one of the versatile languages you can think of.'
			},
			{
				name: 'Vue',
				description:
					'Still one of my go to JS Frameworks to get the job done. It is just simple and lets you create pretty much everything you can think of.'
			},
			{
				name: 'Svelte/SvelteKit',
				description:
					'Svelte is my new darling, i still like Vue but after building this blog with SvelteKit, ' +
					'vue has a new contender as my go to JS Framework.'
			},
			{
				name: 'tailwindcss',
				description:
					'How did we ever write css without tailwind...? ' +
					'Adam really created a amazing framework to quickly build your styles without any compromise.'
			}
		]
	},
	{
		id: 'packages',
		name: 'Life saving packages',
		tools: [
			{
				name: 'inertia.js',
				description:
					'What a life saver if you do not want to deal with all of the SPA, Client Authentication and ' +
					'routing stuff and still want a cool fast SPA or SSR rendered Frontend. Huge recommendation!'
			},
			{
				name: 'PHPStan',
				description:
					'There was a time where i did not like types in languages, this time is long over and i love the confident und ' +
					'security that type languages give me. PHPStan is the perfect package to get the benefits of static typed languages into PHP.'
			},
			{
				name: 'Pest',
				description:
					'I am lazy.I do not want to test my application manual everytime i change something. Gladly because of Pest i do not need to. ' +
					'Pest is the perfect tool to quickly write unit tests in php based und PHPUnit.'
			}
		]
	},
	{
		id: 'tools',
		name: 'Development tools',
		tools: [
			{
				name: 'PHPStorm',
				description:
					"The IDE to conquer them all! PHPStorm is simply amazing, with all it's build in features and tools it " +
					'replaced a lot of other standalone apps i had on my PC. Refactoring is a blast with this thing, ' +
					'just use the refactor actions and PHPStorm does all the busy work for you.'
			},
			{
				name: 'Forge',
				description:
					"I am not much of a server guy. That's why i love Forge so much. " +
					"It takes all of the complicated managing stuff out of the deployment and let's me ship my apps fast and reliably."
			}
		]
	},
	{
		id: 'design',
		name: 'Design',
		tools: [
			{
				name: 'Figma',
				description:
					'Most of the time i design directly in the browser, but if i need a real design ool Figma is my way to go. ' +
					'It is simple, a joy to use and gets pretty much every job done i have to do with it.'
			}
		]
	},
	{
		id: 'setup',
		name: 'My Setup',
		tools: [
			{
				name: '14" MacBook Pro, M1 Pro 32GB RAM (2021)',
				description:
					'I was using an Intel-based 14” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, ' +
					'even under the incredibly heavy loads I put it through it stays quiet.'
			},
			{
				name: 'Samsung LF32TU87 32" 4k Display',
				description:
					'A great big monitor with a lot of pixels and a integrated usb-hub that can charge my Mac ' +
					'and delivers the image with one single USB-C Cable.'
			},
			{
				name: 'Logitech MX Master Keys & MX Master 3',
				description:
					'Just good mouse and keyboard. The mouse is very ergonomic and has a nice ' +
					'vertical scroll wheel which comes handy if you scroll through code. ' +
					'The keyboard is nice and heavy and has a super type feeling.'
			}
		]
	},
	{
		id: 'productivity',
		name: 'Productivity',
		tools: [
			{
				name: 'Obsidian',
				description:
					'Ordering notes in directories never really worked for me so Obsidian is the perfekt tool ' +
					'to link all of my thoughts together without the need to create a huge pile of nested directories. And all of your ' +
					'files are locally on your machine. No cloud needed.'
			},
			{
				name: 'Arc Browser',
				description:
					'The newest tool i adopted. I quite like Arc, it lets me organise my tabs in workspaces and helps me to focus on the given project ' +
					'and takes a way the distractions of a cluttered tab bar.'
			}
		]
	}
];
export const socials = [
	{
		icon: GitHub,
		name: 'GitHub',
		href: 'https://github.com/thettler'
	},

	{
		icon: LinkedIn,
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/tobias-hettler-56a184230/'
	},
	{
		icon: Twitter,
		name: 'Twitter',
		href: 'https://twitter.com/bitbench'
	},
	{
		icon: Mastodon,
		name: 'Mastodon',
		href: 'https://phpc.social/@bitbench'
	},
	{
		icon: Malt,
		name: 'Malt',
		href: 'https://www.malt.de/profile/tobiashettler'
	},
	{
		icon: Instagram,
		name: 'Instagram',
		href: 'https://instagram.com/bitbench.dev'
	}
];
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
};
