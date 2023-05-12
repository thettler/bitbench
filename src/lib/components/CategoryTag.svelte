<script lang="ts">
    import {Hash} from "lucide-svelte";
    import {categories} from "$lib/config";
    import type {Category} from "$lib/types.js";

    export let key = '';
    export let onlyLogo = false;

    let category: Category = {
        label: key,
    };

    $:{
        if (key.toLowerCase() in categories) {
            category = categories[key.toLowerCase()]
        }
    }
</script>

{#if onlyLogo}
    {#if category.logo}
        <div title={category.label}
             style:color={category?.brandColor}
             class="flex h-full items-center leading-none rounded-md mr-3">
            <svelte:component class="h-[1rem]" this={category.logo}/>
        </div>
    {/if}
{:else}
    <div title={category.label}
         style:background-color={category?.brandColor}
         style:color={category?.textColor}
         class={
     (category?.brandColor? "border-transparent" : 'dark:border-zinc-600 border-zinc-300')
     + " flex h-full items-center leading-none mt-2 mr-2 gap-x-1.5 rounded-md border px-2 py-1.5 text-zinc-800 dark:text-zinc-100"}>

        {#if category.logo}
            <svelte:component class="h-[1rem]" this={category.logo}/>
        {:else}
            <Hash class="h-[1rem]"/>
        {/if}

        {#if !category.onlyLogo}{category.label}{/if}
        <span class="sr-only">{category.label}</span>
    </div>
{/if}
