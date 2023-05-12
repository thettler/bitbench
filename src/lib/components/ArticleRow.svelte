<script lang="ts">
    import type {Post} from "$lib/types";
    import {formatDate} from "$lib/utils";
    import {ChevronRight} from "lucide-svelte";
    import CategoryTag from "$lib/components/CategoryTag.svelte";

    export let post: Post;
</script>


<article class="md:grid md:grid-cols-4 md:items-baseline">
    <div>
        <time class="mt-1 hidden md:block relative z-10 mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
              datetime={formatDate(post.date)}>{formatDate(post.date)}
        </time>
        <div class="flex flex-wrap mb-2 md:mb-0">
            {#each (post.categories ?? []) as category}
                <CategoryTag class="mb-2" onlyLogo key={category}/>
            {/each}
        </div>
    </div>
    <div class="md:col-span-3 group relative flex flex-col items-start">
        <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
            <a href={'/articles/'+ post.slug }>
                <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                <span class="relative z-10">{post.title}</span>
            </a>
        </h2>
        <time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
              datetime={formatDate(post.date)}>
            <span class="absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true">
                <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
            </span>
            {formatDate(post.date)}
        </time>
        <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{post.description}</p>
        <div aria-hidden="true"
             class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Read article
            <ChevronRight aria-hidden="true" class="ml-1 h-3 w-3 stroke-current"/>
        </div>
    </div>
</article>
