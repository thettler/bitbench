<script lang="ts">
    import {navigation} from "$lib/config";

    const year = new Date().getFullYear();
</script>
<footer class="mt-32">

    <div class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        {#each navigation as item}
                            <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href={item.href}>
                                {item.label}
                            </a>
                        {/each}

                    </div>
                    <p class="text-sm text-zinc-400 dark:text-zinc-500">
                        ©{year} Tobias Hettler. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
