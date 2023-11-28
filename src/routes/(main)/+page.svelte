<script>
    import avatar from "$lib/assets/images/tostu_avatar.webp"
    import Personals from "$lib/components/Personals.svelte";
    import '@fontsource/press-start-2p/latin.css';

</script>

<svelte:head>
    <title>tostu</title>
</svelte:head>

<div class="container mx-auto">
    <div class="">
        <div class="mx-auto max-w-2xl text-center flex flex-col items-center justify-center space-y-10">
            <div class="space-y-3">
                <img class="inline-block h-40 w-40 rounded-full" src={avatar} alt="avatar">
                <h1 class="text-7xl font-bold tracking-tight text-gray-900">tostu</h1>
                <h3 class="text-3xl">Full Stack Developer</h3>
            </div>

            <Personals></Personals>
        </div>

    </div>
</div>


<style>
    h1,h3{
        color: rgba(255, 255, 245, .86);
    }

    h1 {
        font-family: 'Press Start 2P', sans-serif;
    }
</style>
