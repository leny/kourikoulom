<!-- @leny/kourikoulom - /src/lib/components/icon.svelte -->

<script>
    import { icon as faIcon } from "@fortawesome/fontawesome-svg-core";

    /**
     * Icon can be:
     * - a string: "books" (uses default prefix)
     * - an array: ["fad", "books"]
     * - a string with underscore: "fab_github-alt"
     * @type {string | [string, string]}
     */
    export let icon;

    /**
     * @type {string}
     */
    let className = "";
    export { className as class };

    $: resolvedIcon = (() => {
        if (Array.isArray(icon)) {
            return { prefix: icon[0], iconName: icon[1] };
        }
        if (typeof icon === "string" && icon.includes("_")) {
            const [prefix, iconName] = icon.split("_");
            return { prefix, iconName };
        }
        return { prefix: "fas", iconName: icon };
    })();

    $: iconDef = faIcon(resolvedIcon);
    $: svgHtml = iconDef?.html?.[0] ?? "";
</script>

<span class="icon {className}">
    {@html svgHtml}
</span>

<style>
    .icon {
        display: inline-block;
        line-height: 1;
    }

    .icon :global(svg) {
        display: block;
        height: 1em;
        width: 1em;
        fill: currentColor;
    }
</style>
