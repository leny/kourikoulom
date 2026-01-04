<!-- @leny/kourikoulom - /src/lib/components/skills/fields-list.svelte -->

<script>
    import DescriptionParser from "../commons/description-parser.svelte";

    /** @type {string} */
    export let title;
    /** @type {boolean} */
    export let hideTitle = false;
    /** @type {Array<string | {text: string, focus?: boolean, details?: string[], abbr?: string}>} */
    export let fields;
</script>

<dt class="title" class:hide-title={hideTitle}>{title}</dt>
<dd class="value">
    {#each fields as entry, index (entry.text || entry)}
        <DescriptionParser {entry} last={index === fields.length - 1} />
    {/each}
</dd>

<style>
    .title {
        margin: 0 auto 0.66rem;
        font-weight: bold;
        font-size: 1.8rem;
    }

    .hide-title {
        display: none;
    }

    .value {
        margin: 0 auto 1.6rem;
        color: var(--fadeColor);
    }
</style>
