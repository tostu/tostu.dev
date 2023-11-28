<script>
    import { browser } from '$app/environment';
    import CMS from '@staticcms/core';
    import '@staticcms/core/dist/main.css';
    import config from "./config/config.ts";

    if (browser) {
        CMS.init({config});
    }

    // Now the registry is available via the CMS object.
</script>
