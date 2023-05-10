<script lang="ts">
    import "../app.css"
    import Header from './header.svelte';
    import Footer from './footer.svelte';
</script>

<div class="px-4 sm:px-8 lg:px-12">

    <Header></Header>

    <div class="px-6 py-24 sm:py-32 lg:px-0">
        <slot/>
    </div>

    <Footer/>
</div>
