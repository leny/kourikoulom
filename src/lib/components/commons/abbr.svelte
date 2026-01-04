<!-- @leny/kourikoulom - /src/lib/components/commons/abbr.svelte -->

<script>
    import { tooltip } from "$lib/core/tooltip.js";

    /** @type {string} */
    export let text;

    /** @type {string} */
    export let description;
</script>

<abbr class="abbr" use:tooltip={description}>
    {text}
</abbr>

<style>
    .abbr {
        position: relative;
        cursor: help;
        text-decoration: underline dotted var(--altColor) !important;
    }
</style>
