<script>
    import TitleSection from "$lib/components/TitleSection.svelte";
    import {title, tools} from "$lib/config";
</script>
<svelte:head>
    <title>{title} - Uses</title>
</svelte:head>
<TitleSection>
    Languages I use, tools I love, and other things I recommend.
    <svelte:fragment slot="subtitle">
        I get asked a lot about the things I use to build software, make my life a bit easier, or buy to fool myself into thinking
        I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.
    </svelte:fragment>
</TitleSection>


<div class="mt-16 sm:mt-20">
    <div class="space-y-20">
        {#each tools as category}
            <section aria-labelledby={category.id}
                     class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                    <h2 id={category.id}
                        class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                        {category.name}
                    </h2>
                    <div class="md:col-span-3">
                        <ul class="space-y-16">
                            {#each category.tools as tool}
                                <li class="group relative flex flex-col items-start">
                                    <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                        {tool.name}
                                    </h3>
                                    <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                        {tool.description}
                                    </p>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </section>
        {/each}
    </div>
</div>
