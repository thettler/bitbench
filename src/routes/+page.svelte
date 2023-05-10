<script lang="ts">
    import Galerie from "$lib/components/Galerie.svelte";
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import Box from "$lib/components/Box.svelte";
    import {work} from "$lib/config.js";
    import type {PageData, ActionData} from './$types';
    import {enhance} from '$app/forms';

    export let form: ActionData;
    export let data: PageData;
</script>

<div class="mx-auto max-w-2xl lg:max-w-5xl">
    <div class="max-w-2xl"><h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Software designer, founder, and amateur astronaut.</h1>
        <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">I’m Spencer, a software designer and entrepreneur
            based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower
            regular people to explore space on their own terms.</p>
        <div class="mt-6 flex gap-6">
            <a class="group -m-1 p-1" aria-label="Follow on Twitter"
               href="https://twitter.com">
                <svg viewBox="0 0 24 24" aria-hidden="true"
                     class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                    <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                </svg>
            </a>
            <a class="group -m-1 p-1" aria-label="Follow on Instagram" href="https://instagram.com">
                <svg viewBox="0 0 24 24" aria-hidden="true"
                     class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                    <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                    <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                </svg>
            </a>
            <a class="group -m-1 p-1" aria-label="Follow on GitHub" href="https://github.com">
                <svg viewBox="0 0 24 24" aria-hidden="true"
                     class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                </svg>
            </a>
            <a class="group -m-1 p-1" aria-label="Follow on LinkedIn" href="https://linkedin.com">
                <svg viewBox="0 0 24 24" aria-hidden="true"
                     class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

<Galerie/>

<div class="mx-auto max-w-7xl mt-24 md:mt-28">
    <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div class="flex flex-col gap-16">
            {#each data.posts as post}
                <ArticleCard post={post}/>
            {/each}
        </div>

        <div class="space-y-10 lg:pl-16 xl:pl-24">
            <Box>
                <form method="post" use:enhance>
                    <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"
                             stroke-linejoin="round" aria-hidden="true" class="h-6 w-6 flex-none">
                            <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                                  class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                            <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                                  class="stroke-zinc-400 dark:stroke-zinc-500"></path>
                        </svg>
                        <span class="ml-3">Stay up to date</span></h2>
                    <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Get notified when I publish
                        something new, and unsubscribe at any time.</p>
                    <div class="mt-6 flex">
                        <input
                                name="email"
                                placeholder="Email address"
                                aria-label="Email address"
                                class="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm">
                        <button class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                                type="submit">Join
                        </button>
                    </div>
                    {#if form?.success}
                        <p class="text-sm bg-green-400/[0.30] dark:bg-green-700/[0.15] dark:text-zinc-100 border-2 border-green-300 dark:border-green-800 rounded p-2 mt-3">
                            Thank you for subscribing! ❤️
                        </p>
                    {/if}
                    {#if form?.errors}
                        {#each form.errors?.email as error}
                            <p class="text-red-600 mt-2">{error}</p>
                        {/each}
                    {/if}
                </form>

            </Box>

            <Box>
                <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"
                         stroke-linejoin="round" aria-hidden="true" class="h-6 w-6 flex-none">
                        <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                              class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                        <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                              class="stroke-zinc-400 dark:stroke-zinc-500"></path>
                    </svg>
                    <span class="ml-3">Work</span></h2>
                <ol class="mt-6 space-y-4">
                    {#each work as job}
                        <li class="flex gap-4">
                            <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <img alt={job.name}
                                     loading="lazy"
                                     width="32"
                                     height="32"
                                     decoding="async"
                                     data-nimg="1"
                                     class="h-7 w-7 rounded-full bg-white"
                                     src={job.src}
                                     style="color: transparent;">
                            </div>
                            <dl class="flex flex-auto flex-wrap gap-x-2">
                                <dt class="sr-only">Company</dt>
                                <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    {job.name}
                                </dd>
                                <dt class="sr-only">Role</dt>
                                <dd class="text-xs text-zinc-500 dark:text-zinc-400">{job.position}</dd>
                                <dt class="sr-only">Date</dt>
                                <dd class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                    aria-label="2019 until Present">
                                    <time datetime={job.from}>{job.from}</time>
                                    <span aria-hidden="true">—</span>
                                    <time datetime={job.until}>{job.until}</time>
                                </dd>
                            </dl>
                        </li>
                    {/each}
                </ol>
                <a class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                   href="/#">Download CV
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                         class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
                        <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </a></Box>
        </div>
    </div>
</div>