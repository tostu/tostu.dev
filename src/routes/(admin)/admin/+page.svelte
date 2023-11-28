<script>
    import { browser } from '$app/environment';
    import CMS from '@staticcms/core';
    // import '@staticcms/core/dist/main.css';
    import config from "./config/config.ts";

    if (browser) {
        window.CMS.init({config});
    }

    // Now the registry is available via the CMS object.
</script>

<svelte:head>
    meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://unpkg.com/@staticcms/app@^3.0.0/dist/main.css" />
    <script src="https://unpkg.com/@staticcms/app@^3.0.0/dist/static-cms-app.js"></script>
</svelte:head>
