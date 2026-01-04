<!-- @leny/kourikoulom - /src/lib/components/icon.svelte -->

<script>
    import {icon as faIcon} from "@fortawesome/fontawesome-svg-core";

    /**
     * @type {import('@fortawesome/fontawesome-svg-core').IconName}
     */
    export let icon;

    /**
     * @type {import('@fortawesome/fontawesome-svg-core').IconPrefix}
     */
    export let prefix = "fad";

    /**
     * @type {string | undefined}
     */
    export let size = undefined;

    /**
     * @type {string}
     */
    let className = "";
    export {className as class};

    $: iconDef = faIcon({prefix, iconName: icon});
    $: svgHtml = iconDef?.html?.[0] ?? "";
</script>

<span
    class="icon {className}"
    class:icon--sm={size === "sm"}
    class:icon--lg={size === "lg"}
    class:icon--xl={size === "xl"}
>
    {@html svgHtml}
</span>

<style>
    .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .icon :global(svg) {
        height: 1em;
        width: auto;
        vertical-align: -0.125em;
    }

    .icon--sm :global(svg) {
        height: 0.875em;
    }

    .icon--lg :global(svg) {
        height: 1.33em;
    }

    .icon--xl :global(svg) {
        height: 2em;
    }
</style>
