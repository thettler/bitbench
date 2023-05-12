<script lang="ts">
    import "../app.css"
    import Header from './header.svelte';
    import Footer from './footer.svelte';
    import Transition from "$lib/components/Transition.svelte";
    import type PageData from './$type';
    import {title} from '$lib/config';

    export let data: PageData
</script>
<svelte:head>
    <title>
        {title}
    </title>
</svelte:head>
<div class="px-4 sm:px-8 lg:px-12 dark:text-zinc-300 text-zinc-800 overflow-hidden">

    <Header></Header>

    <div class="px-6 py-24 sm:py-32 lg:px-0 ">
        <Transition url={data.url}>
            <slot/>
        </Transition>
    </div>

    <Footer/>
</div>
