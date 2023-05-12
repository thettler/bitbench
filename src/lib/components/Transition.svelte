<script lang="ts">
    import {fade, fly} from "svelte/transition";
    import {beforeNavigate} from "$app/navigation";
    import type {BeforeNavigate} from "@sveltejs/kit";

    export let url = '';
    let from = ''

    beforeNavigate((e: BeforeNavigate) => {
        from = e.from?.route.id ?? ''
    })

    function flyScale(node, params) {
        if (from === '/articles' && url.startsWith('/articles/')) {
            return fly(node, params)
        }

        if (from === '/articles/[slug]' && url === '/articles') {
            return fly(node, {
                ...params,
                x: params.x * -1
            })
        }

        return fade(node, params);
    }
</script>

{#key url}
    <div class="h-full"
         in:flyScale={{delay: 150, duration: 150, x: 200,}}
         out:flyScale={{duration: 150, x: -200}}
    >
        <slot/>
    </div>
{/key}

