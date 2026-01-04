<!-- @leny/kourikoulom - /src/lib/components/projects/entry.svelte -->

<script>
    import Link from "../commons/link.svelte";

    /** @type {string} */
    export let name;
    /** @type {string} */
    export let url;
    /** @type {string} */
    export let tooltip;
    /** @type {string} */
    export let description;
</script>

<dt class="title">
    <Link {url} {tooltip}>{name}</Link>
</dt>
<dd class="description">{description}</dd>

<style>
    .title {
        margin: 0 auto 0.66rem;
        font-weight: bold;
        font-size: 1.8rem;
    }

    .description {
        margin: 0 auto 1.6rem;
    }
</style>
