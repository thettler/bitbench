<script lang="ts">
    import MeIamgeAvif from '$lib/assets/images/me/Tobi_5.jpg?w=500;900;1200&format=avif&as=srcset'
    import MeImageWebp from '$lib/assets/images/me/Tobi_5.jpg?w=500;900;1200&format=webp&as=srcset'
    import MeImageFallback from '$lib/assets/images/me/Tobi_5.jpg?w=700'
</script>

<div class="relative isolate overflow-hidden  lg:overflow-visible">
    <div class="absolute inset-0 -z-10 overflow-hidden">
            <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                 aria-hidden="true">
                <defs>
                    <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                             width="200"
                             height="200"
                             x="50%"
                             y="-1"
                             class="stroke-gray-200 dark:stroke-primary-3"
                             patternUnits="userSpaceOnUse">
                        <path d="M100 200V.5M.5 .5H200" fill="none"/>
                    </pattern>
                </defs>
                <svg x="50%" y="-1" class="overflow-visible fill-gray-50 dark:fill-zinc-800">
                    <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                          stroke-width="0"/>
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"/>
            </svg>
    </div>
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 text-zinc-800 dark:text-zinc-200">
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 ">
            <div class="lg:pr-4">
                <div class="lg:max-w-lg">
                    <h1 class="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                         I’m Tobias Hettler. I live in Munich, where I design the future.
                    </h1>
                    <p class="mt-6 text-xl leading-8">
                        Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui,
                        diam eget aliquam. Quisque id at vitae feugiat egestas.
                    </p>
                </div>
            </div>
        </div>
        <div class="-ml-12 -mt-12 py-12 pl-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden space-y-9">
            <div class="w-5/6 overflow-hidden rounded-xl rotate-3" >
                <picture class="object-cover bg-gray-900 shadow-xl ring-1 ring-gray-400/10">
                    <source srcset={MeIamgeAvif} type="image/avif"/>
                    <source srcset={MeImageWebp} type="image/webp"/>
                    <img loading="lazy"
                         src={MeImageFallback}
                         alt="Tobias Hettler">
                </picture>
            </div>

            <div class="">
                <ul role="list">
                    <li class="flex"><a
                            class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href="/about#">
                        <svg viewBox="0 0 24 24" aria-hidden="true"
                             class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                            <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                        </svg>
                        <span class="ml-4">Follow me Twitter</span></a></li>
                    <li class="mt-4 flex"><a
                            class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href="/about#">
                        <svg viewBox="0 0 24 24" aria-hidden="true"
                             class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                            <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                            <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                        </svg>
                        <span class="ml-4">Follow me Instagram</span></a></li>
                    <li class="mt-4 flex"><a
                            class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href="/about#">
                        <svg viewBox="0 0 24 24" aria-hidden="true"
                             class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                        </svg>
                        <span class="ml-4">Follow me GitHub</span></a></li>
                    <li class="mt-4 flex"><a
                            class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href="/about#">
                        <svg viewBox="0 0 24 24" aria-hidden="true"
                             class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                        </svg>
                        <span class="ml-4">Follow me LinkedIn</span></a></li>
                    <li class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex"><a
                            class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                            href="mailto:toibas.hettler@bitbench.dev">
                        <svg viewBox="0 0 24 24" aria-hidden="true"
                             class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                            <path fill-rule="evenodd"
                                  d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
                        </svg>
                        <span class="ml-4">toibas.hettler@bitbench.dev</span></a></li>
                </ul>
            </div>
        </div>
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
            <div class="lg:pr-4">
                <div class="max-w-xl text-base leading-7 lg:max-w-lg">
                    <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed
                        amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
                        varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                        enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                    <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                        blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                        varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
                        vel integer orci.</p>
                    <h2 class="mt-16 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">No server? No
                        problem.</h2>
                    <p class="mt-6">Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis
                        arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh.
                        Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
                        Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.</p>
                </div>
            </div>
        </div>
    </div>
</div>
