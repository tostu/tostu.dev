<script>
    import "../../app.pcss"
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<div class="min-h-[100svh] max-h-[100svh] flex flex-col justify-between">
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
</div>

<style>


</style>
