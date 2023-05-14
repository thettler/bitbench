<script lang="ts">
	import type { PageData } from './$types';
	import { ArrowLeft } from 'lucide-svelte';
	import { formatDate } from '$lib/utils.js';
	import CategoryTag from '$lib/components/CategoryTag.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<div class="xl:relative">
	<div class="mx-auto max-w-3xl">
		<article>
			<header class="flex flex-col">
				<div class="flex">
					<a
						href="/articles"
						type="button"
						aria-label="Go back to articles"
						class="group flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
					>
						<ArrowLeft
							aria-hidden="true"
							class="h-6 w-6 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
						/>
					</a>
					<time
						datetime="2022-09-05"
						class="flex items-center text-base text-zinc-400 dark:text-zinc-500 ml-3"
					>
						<span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
						<span class="ml-3">{formatDate(data.meta.date)}</span>
					</time>
				</div>
				<div class="mt-4 flex flex-wrap text-base font-semibold">
					{#each data.meta?.categories ?? [] as category}
						<CategoryTag key={category} />
					{/each}
				</div>
				<h1
					class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
				>
					{data.meta.title}
				</h1>
			</header>
			<div
				class="mt-8 prose prose-pre:mt-0 prose-img:rounded-xl prose-img:rotate-2 prose-blockquote:border-teal-500 md:prose-lg prose-zinc dark:prose-invert"
			>
				<svelte:component this={data.content} />
			</div>
		</article>
	</div>
</div>
