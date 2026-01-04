<!-- @leny/kourikoulom - /src/lib/components/commons/link.svelte -->

<script>
    import { tooltip } from "$lib/core/tooltip.js";

    /** @type {string} */
    export let url;

    /** @type {string} */
    let tooltipText = "";
    export { tooltipText as tooltip };
</script>

<a
    href={url}
    rel="external noopener noreferrer"
    target="_blank"
    class="link"
    use:tooltip={tooltipText}
>
    <slot />
</a>

<style>
    .link {
        color: var(--altColor);
        text-decoration: none;
        transition: color 0.25s ease;
    }

    .link:hover {
        color: var(--altHoverColor);
    }
</style>
