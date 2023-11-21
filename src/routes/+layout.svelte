<script>
    import "../app.pcss"
    import '@fontsource/press-start-2p';
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<div class="min-h-screen flex flex-col justify-between">
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
</div>

<style>


</style>
