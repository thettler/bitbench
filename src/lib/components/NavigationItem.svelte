<script lang="ts">
    import type {NavigationItemType} from "$lib/types";
    import {page} from "$app/stores";
    import {fade} from 'svelte/transition';
    import type {Page} from "@sveltejs/kit";

    export let item: NavigationItemType
    let active = false;

    $:{
        isActive($page);
    }

    function isActive(page: Page) {
        if (page.url.pathname === item.href) {
            active = true;
            return;
        }

        if (page.url.pathname !== '/' && item.href === '/') {
            active = false;
            return;
        }

        active = page.url.pathname.includes(item.href);
    }
</script>
{#if !item.onlyFooter}
    <li>
        <a
                class="relative block px-3 py-2 transition"
                class:text-teal-500={active}
                class:dark:text-teal-400={active}
                href={item.href}
        >
            {item.label}
            {#if active}
                <span
                        transition:fade={{ duration: 300 }}
                        class="absolute pulse inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
                />
            {/if}
        </a>
    </li>
{/if}

<style>
    @keyframes Pulse {
        from {
            transform: scaleY(1);
        }
        to {
            transform: scaleY(3.5);
        }
    }

    .pulse {
        animation-timing-function: ease-in-out;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-name: Pulse;
    }
</style>
