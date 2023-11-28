<script>
    import config from "./config/config.ts";
    const initializeCMS = () => {
        window.CMS.init({config});
    }
</script>

<svelte:head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://unpkg.com/@staticcms/app@^3.0.0/dist/main.css" />
    <script src="https://unpkg.com/@staticcms/app@^3.0.0/dist/static-cms-app.js" on:load={initializeCMS}></script>
</svelte:head>
