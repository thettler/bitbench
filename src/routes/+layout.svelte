<script lang="ts">
    import '../app.css';
    import Header from './header.svelte';
    import Footer from './footer.svelte';
    import Transition from '$lib/components/Transition.svelte';
    import type {PageData} from './$types';
    import {title, url} from '$lib/config';
    import {page} from "$app/stores";
    import ogImage from "$lib/assets/images/me/Tobi_1.jpg?w=1080&h=1080&imagetool";

    export let data: PageData;
</script>

<svelte:head>
    <title>
        {title}
    </title>
    <meta property="og:title" content={title}/>
    <meta name="description"
          content="I’m Tobi, a freelance Web Developer based in Munich.This is my blog, where i share my thoughts on modern Web Development.">
    <meta property="og:type" content="website"/>
    <meta property="og:url" content={$page.url.href}/>
    <meta property="og:image" content={url + ogImage}/>
</svelte:head>

<div class="px-4 sm:px-8 lg:px-12 dark:text-zinc-300 text-zinc-800 overflow-hidden">
    <Header/>

    <div class="px-6 py-24 sm:py-32 lg:px-0">
        <Transition url={data.url}>
            <slot/>
        </Transition>
    </div>

    <Footer/>
</div>
