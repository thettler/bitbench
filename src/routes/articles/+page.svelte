<script lang="ts">
	import ArticleRow from '$lib/components/ArticleRow.svelte';
	import type { PageData } from './$types';
	import TitleSection from '$lib/components/TitleSection.svelte';
	import { title } from '$lib/config.js';

	export let data: PageData;
</script>

<svelte:head>
	<title>{title} - Projects</title>
</svelte:head>

<TitleSection>
	Writing on Web development, tips and tricks and more.
	<svelte:fragment slot="subtitle">
		All of my long-form thoughts on programming, application architecture, tips and guides that i
		wished exist.
	</svelte:fragment>
</TitleSection>

<div class="mt-16 sm:mt-20">
	<div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
		<div class="flex max-w-3xl flex-col space-y-16">
			{#each data.posts as post}
				<ArticleRow {post} />
			{/each}
		</div>
	</div>
</div>
