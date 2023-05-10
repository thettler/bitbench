<script>
    import {navigation} from "$lib/config.ts";
    import {ChevronDown, X} from "lucide-svelte";

    let open = false;

</script>

<div class="pointer-events-auto md:hidden">
    <button on:click={()=> open = !open}
            class="group h-full flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
            type="button"
            aria-expanded="false"
    >
        Menu
        <ChevronDown
                class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"/>
    </button>
</div>

{#if (open)}
    <div on:click={()=> open = false}
         class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"
         aria-hidden="true"/>
    <div class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
         tabindex="-1"
         data-headlessui-state="open">
        <div class="flex flex-row-reverse items-center justify-between">
            <button on:click={()=> open = false}
                    aria-label="Close menu"
                    class="-m-1 p-1"
                    type="button"
                    tabindex="0">
                <X class="h-6 w-6 text-zinc-500 dark:text-zinc-400"/>
            </button>
            <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
        </div>
        <nav class="mt-6">
            <ul class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {#each navigation as item}
                    <li><a class="block py-2" on:click={()=> open = false} href={item.href}>{item.label}</a></li>
                {/each}
            </ul>
        </nav>
    </div>
{/if}
