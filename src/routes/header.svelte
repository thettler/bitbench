<script lang="ts">
    import DarkModeToggle from "$lib/components/DarkModeToggle.svelte";
    import CenterImage from "$lib/assets/images/me/Tobi_1.jpg?w=100&h=100&format=webp";
    import {navigation} from "$lib/config";
    import {page} from '$app/stores';
    import {fade} from "svelte/transition";
    import MobileNavigation from "$lib/components/MobileNavigation.svelte";

</script>
<header>
    <div class="flex relative gap-4 pt-6">
        <div class="flex-1">
            <div class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                <a href="/" class="pointer-events-auto">
                    <span class="sr-only">Tobias Hettler</span>
                    <img class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                         src={CenterImage}
                         alt="Tobias Hettler">
                </a>
            </div>
        </div>
        <div class="flex flex-1 justify-end md:justify-center">
            <MobileNavigation/>

            <nav class="pointer-events-auto hidden md:block">
                <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                    {#each navigation as item (item.href)}
                        {#if (!item.onlyFooter)}
                            <li>
                                <a class="relative block px-3 py-2 transition"
                                   class:text-teal-500={$page.url.pathname.includes(item.href)}
                                   class:dark:text-teal-400={$page.url.pathname.includes(item.href)}
                                   href={item.href}>
                                    {item.label}
                                    {#if ($page.url.pathname.includes(item.href))}
                                        <span transition:fade={{duration:300}}
                                              class="absolute pulse inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"/>
                                    {/if}
                                </a>
                            </li>
                        {/if}
                    {/each}
                </ul>
            </nav>

        </div>
        <div class="flex justify-end md:flex-1">
            <DarkModeToggle/>
        </div>
    </div>
</header>

<style>

    @keyframes Pulse {
        from {
            transform: scaleY(1);
        }
        to {
            transform: scaleY(3);
        }
    }

    .pulse {
        animation-timing-function: ease-in-out;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-name: Pulse;
    }
</style>
