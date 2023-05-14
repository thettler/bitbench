<script lang="ts">
	import MeIamgeAvif from '$lib/assets/images/me/Tobi_5.jpg?w=500;900;1200&format=avif&as=srcset&imagetool';
	import MeImageWebp from '$lib/assets/images/me/Tobi_5.jpg?w=500;900;1200&format=webp&as=srcset&imagetool';
	import MeImageFallback from '$lib/assets/images/me/Tobi_5.jpg?w=700&imagetool';
	import { socials } from '$lib/config';
</script>

<div class="relative isolate overflow-hidden lg:overflow-visible">
	<div class="absolute inset-0 -z-10 overflow-hidden">
		<svg
			class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id="e813992c-7d03-4cc4-a2bd-151760b470a0"
					width="200"
					height="200"
					x="50%"
					y="-1"
					class="stroke-gray-200 dark:stroke-primary-3"
					patternUnits="userSpaceOnUse"
				>
					<path d="M100 200V.5M.5 .5H200" fill="none" />
				</pattern>
			</defs>
			<svg x="50%" y="-1" class="overflow-visible fill-gray-50 dark:fill-zinc-800">
				<path
					d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
					stroke-width="0"
				/>
			</svg>
			<rect
				width="100%"
				height="100%"
				stroke-width="0"
				fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
			/>
		</svg>
	</div>
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 text-zinc-800 dark:text-zinc-200"
	>
		<div
			class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8"
		>
			<div class="lg:pr-4">
				<div class="lg:max-w-lg">
					<h1
						class="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl"
					>
						I’m Tobi a Freelancer from Munich, where I code and listen to music.
					</h1>
					<p class="mt-6 text-xl leading-8">
						I have worked in various companies and learned a lot from them, but there was always the
						whish to become independent and start something on my own. So in 2022, I gathered my
						courage and became a freelancer.
					</p>
				</div>
			</div>
		</div>
		<div
			class="-ml-12 -mt-12 py-12 pl-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden space-y-9"
		>
			<div class="w-5/6 overflow-hidden rounded-xl rotate-3">
				<picture class="object-cover bg-gray-900 shadow-xl ring-1 ring-gray-400/10">
					<source srcset={MeIamgeAvif} type="image/avif" />
					<source srcset={MeImageWebp} type="image/webp" />
					<img loading="lazy" src={MeImageFallback} alt="Tobias Hettler" />
				</picture>
			</div>

			<div class="">
				<ul>
					{#each socials as social}
						<li class="mt-4 flex">
							<a
								class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
								target="_blank"
								href={social.href}
							>
								<svelte:component
									this={social.icon}
									class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
								/>
								<span class="ml-4">{'Follow on ' + social.name}</span>
							</a>
						</li>
					{/each}

					<li class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
						<a
							class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
							href="mailto:toibas.hettler@bitbench.dev"
						>
							<svg
								viewBox="0 0 24 24"
								aria-hidden="true"
								class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
							>
								<path
									fill-rule="evenodd"
									d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
								/>
							</svg>
							<span class="ml-4">toibas.hettler@bitbench.dev</span></a
						>
					</li>
				</ul>
			</div>
		</div>
		<div
			class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8"
		>
			<div class="lg:pr-4">
				<div class="max-w-xl text-base leading-7 lg:max-w-lg">
					<p>
						When I started my programming career <span class="font-bold">10 years ago</span> with my
						apprenticeship, I mainly worked in the frontend, but soon had my fingers in the backend as
						well. From that time on, I started many small fun projects in my spare time and learned a
						lot so that today I feel very comfortable in the frontend as well as in the backend.
					</p>
					<p class="mt-8">
						My normal tech stack for new projects is pretty much always
						<span class="font-bold">Laravel</span> in the backend,
						<span class="font-bold">Vue</span> or <span class="font-bold">Svelte</span>
						with <span class="font-bold">Typescript</span> in the frontend and
						<span class="font-bold">TailwindCss</span>
						for the styles. This stack allows me to quickly build high quality applications and since
						I'm a big fan of tools like <span class="font-bold">static analysis</span>
						or
						<span class="font-bold">Unit/E2E tests</span>, the projects remain maintainable even
						when they grow. However, I also like to experiment with new tech and always find new
						exciting things to integrate into my stack.
					</p>
					<h2 class="mt-16 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
						Need a Webdeveloper? Here I am!
					</h2>
					<p class="mt-6">
						From new start-ups, medium-sized companies to large corporations, all my clients benefit
						from the fast and also cost-effective development with Laravel and Vue. For your new web
						app or website, I accompany you through the entire development process from the first
						concept to the final product on your server. Just send me an email or contact me on one
						of my other platforms and we will arrange a first meeting.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
