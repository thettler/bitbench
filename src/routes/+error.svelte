<script>
	import { page } from '$app/stores';
</script>

<main class="mx-auto w-full max-w-7xl px-6 lg:px-8 flex flex-col items-center">
	<div class="text-4xl font-bold text-teal-500">
		<span class="inline-block left-arm shrug-animation">¯\_</span>
		<span class="inline-block shrug-animation face">(ツ)</span>
		<span class="inline-block right-arm shrug-animation">_/¯</span>
	</div>
	<div class="mt-12 max-w-2xl text-center sm:mt-16">
		<p class="text-base font-semibold leading-8 text-teal-500">{$page.status}</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
			{$page.error?.message}
		</h1>
		<p
			class="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8"
		>
			Oops, something went wrong.
		</p>
	</div>
	<div class="flow-root max-w-lg sm:mt-20">
		<div class="mt-10 flex justify-center">
			<a href="/" class="text-sm font-semibold leading-6 text-teal-500">
				<span aria-hidden="true">&larr;</span>
				Back to home
			</a>
		</div>
	</div>
</main>

<style>
	@keyframes LeftArm {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(-10deg);
		}
	}

	@keyframes RightArm {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(10deg);
		}
	}

	@keyframes Face {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-8px);
		}
	}

	.shrug-animation {
		animation-timing-function: ease;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}

	.face {
		animation-name: Face;
	}
	.left-arm {
		transform-origin: bottom right;
		animation-name: LeftArm;
	}

	.right-arm {
		transform-origin: bottom left;
		animation-name: RightArm;
	}
</style>
