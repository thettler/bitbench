<script>
	import TitleSection from '$lib/components/TitleSection.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects, title } from '$lib/config';
</script>

<svelte:head>
	<title>{title} - Projects</title>
</svelte:head>
<TitleSection>
	Things I’ve made because it was fun or i neede't it.
	<svelte:fragment slot="subtitle">
		I’ve worked on tons of little projects over the years but these are the ones that I’m most proud
		of. Many of them are open-source, so if you see something that piques your interest, check out
		the code and contribute if you have ideas for how it can be improved.
	</svelte:fragment>
</TitleSection>

<div class="mt-16 sm:mt-20">
	<ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</ul>
</div>
