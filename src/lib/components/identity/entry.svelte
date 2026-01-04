<!-- @leny/kourikoulom - /src/lib/components/identity/entry.svelte -->

<script>
    import Icon from "../icon.svelte";
    import Link from "../commons/link.svelte";

    /** @type {string} */
    export let label;
    /** @type {string} */
    export let value;
    /** @type {string | undefined} */
    export let prefix = undefined;
    /** @type {string | undefined} */
    export let link = undefined;
    /** @type {string | undefined} */
    export let tooltip = undefined;
    /** @type {string | undefined} */
    export let icon = undefined;
    /** @type {boolean} */
    export let kbd = false;

    $: iconParts = icon?.includes("_") ? icon.split("_") : icon;
</script>

<dt class="term">
    {#if icon}
        <Icon icon={iconParts} class="icon" />
    {/if}
    {label}
</dt>
<dd class="value" data-prefix={prefix || null}>
    {#if link}
        <Link url={link} {tooltip}>
            {#if kbd}
                <kbd>{value}</kbd>
            {:else}
                {value}
            {/if}
        </Link>
    {:else if kbd}
        <kbd>{value}</kbd>
    {:else}
        {value}
    {/if}
</dd>

<style>
    .term {
        display: inline;
        font-size: 0;
    }

    .term :global(.icon) {
        display: inline;
        width: 1.6rem !important;
        height: 1.6rem !important;
        margin-right: 1.2rem;
        vertical-align: -0.3rem;
        color: var(--altColor);
    }

    .value {
        display: inline;
        margin: 0;
    }

    .value[data-prefix]::before {
        content: attr(data-prefix) " ";
    }

    .value::after {
        content: "";
        display: block;
        width: 100%;
        height: 0.1rem;
        margin: 0 0 1.1rem;
    }
</style>
