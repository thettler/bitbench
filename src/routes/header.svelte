<script lang="ts">
    import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
    import CenterImage from '$lib/assets/images/me/Tobi_1.jpg?w=100&h=100&format=webp&imagetool';
    import {navigation} from '$lib/config';

    import MobileNavigation from '$lib/components/MobileNavigation.svelte';
    import NavigationItem from "$lib/components/NavigationItem.svelte";

</script>

<header>
    <div class="flex relative gap-4 pt-6">
        <div class="flex-1">
            <div
                    class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
            >
                <a href="/" class="pointer-events-auto">
                    <span class="sr-only">Tobias Hettler</span>
                    <img
                            class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                            src={CenterImage}
                            alt="Tobias Hettler"
                    />
                </a>
            </div>
        </div>
        <div class="flex flex-1 justify-end md:justify-center">
            <MobileNavigation/>

            <nav class="pointer-events-auto hidden md:block">
                <ul
                        class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
                >
                    {#each navigation as item (item.href)}
                      <NavigationItem {item} />
                    {/each}
                </ul>
            </nav>
        </div>
        <div class="flex justify-end md:flex-1">
            <DarkModeToggle/>
        </div>
    </div>
</header>

