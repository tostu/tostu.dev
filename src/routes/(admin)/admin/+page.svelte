<script>
    import { browser } from '$app/environment';
    import CMS from '@staticcms/core';
    import '@staticcms/core/dist/main.css';

    if (browser) {
        CMS.init();
    }

    // Now the registry is available via the CMS object.
</script>