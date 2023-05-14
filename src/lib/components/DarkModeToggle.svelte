<script lang="ts">
	import { Sun, Moon } from 'lucide-svelte';
	import { browser } from '$app/environment';

	export let enabled = false;

	(() => {
		if (!browser) {
			return;
		}

		setDarkMode(
			localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		);
	})();

	function setDarkMode(active = true) {
		enabled = active;

		localStorage.setItem('theme', enabled ? 'dark' : 'light');

		if (enabled) {
			document.documentElement.classList.add('dark');
			return;
		}

		document.documentElement.classList.remove('dark');
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
	<button
		type="button"
		aria-label="Toggle dark mode"
		on:click={toggleDarkmode}
		class="overflow-hidden group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
	>
		<Sun
			aria-hidden={!enabled}
			class="h-6 w-6 fill-zinc-100 dark:hidden group-hover:animate-spin stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-500 dark:fill-teal-50 dark:stroke-zinc-700 dark:group-hover:fill-teal-50 dark:group-hover:stroke-teal-600"
		/>
		<Moon
			aria-checked={enabled}
			class="hidden h-6 w-6 fill-zinc-700 group-hover:animate-pulse stroke-zinc-500 transition dark:block dark:group-hover:stroke-teal-500 dark:fill-teal-400/10 dark:stroke-zinc-400"
		/>
	</button>
</div>

<style>
</style>
