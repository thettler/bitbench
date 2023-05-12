<script lang="ts">
    import {galerie} from "$lib/config";

    let galerieHeight = 0
</script>

<div class="mt-16 sm:mt-20 flex flex-col">
    <div class="w-full absolute left-0">
        <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            {#each galerie as image, i}
                <div
                        class="relative odd:-rotate-2 even:rotate-2 image aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
                    <img alt={image.alt}
                         loading="lazy"
                         decoding="async"
                         data-nimg="1"
                         class="absolute inset-0 h-full w-full object-cover" sizes="(min-width: 640px) 18rem, 11rem"
                         srcset={image.srcset}
                         src={image.src}
                         style="color: transparent;">
                </div>
            {/each}
        </div>
    </div>
    <div class="w-full invisible left-0">
        <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            {#each galerie as image, i}
                <div
                        class="relative image aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
                    <img alt={image.alt}
                         loading="lazy"
                         decoding="async"
                         data-nimg="1"
                         class="absolute inset-0 h-full w-full object-cover" sizes="(min-width: 640px) 18rem, 11rem"
                         srcset={image.srcset}
                         src={image.src}
                         style="color: transparent;">
                </div>
            {/each}
        </div>
    </div>
</div>
