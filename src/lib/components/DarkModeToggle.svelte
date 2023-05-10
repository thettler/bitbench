<script lang="ts">
    import {Sun, Moon} from "lucide-svelte";
    import {browser} from "$app/environment";

    export let enabled = false;

    (() => {
        if (!browser) {
            return;
        }

        setDarkMode(
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
    })()


    function setDarkMode(active = true) {
        enabled = active;

        localStorage.setItem('theme', enabled ? 'dark' : 'light');

        if (enabled) {
            document.documentElement.classList.add('dark')
            return
        }

        document.documentElement.classList.remove('dark')
    }

    function toggleDarkmode() {
        setDarkMode(!enabled);
    }
</script>

<svelte:head>
    <script>
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
    </script>
</svelte:head>
<div class="pointer-events-auto">
    <button type="button"
            aria-label="Toggle dark mode"
            on:click={toggleDarkmode}
            class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
        <Sun aria-hidden={!enabled}
             class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"/>
        <Moon aria-checked={enabled}
              class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"/>

    </button>
</div>
