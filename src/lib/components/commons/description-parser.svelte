<!-- @leny/kourikoulom - /src/lib/components/commons/description-parser.svelte -->

<script>
    import Abbr from "./abbr.svelte";
    import Link from "./link.svelte";

    /**
     * @typedef {Object} EntryObject
     * @property {string} text
     * @property {boolean} [focus]
     * @property {string} [abbr]
     * @property {string} [url]
     * @property {string[]} [details]
     */

    /** @type {string | EntryObject} */
    export let entry;

    /** @type {boolean} */
    export let last = false;

    $: isString = typeof entry === "string";
    $: entryObj = /** @type {EntryObject} */ (isString ? {} : entry);
    $: separator = last ? "" : ", ";
    $: details = entryObj.details ? ` (${entryObj.details.join(", ")})` : "";
</script>

{#if isString}{entry}{separator}{:else}{#if entryObj.focus}<strong class="focus">{#if entryObj.url}<Link url={entryObj.url}>{#if entryObj.abbr}<Abbr text={entryObj.text} description={entryObj.abbr} />{:else}{entryObj.text}{/if}</Link>{:else if entryObj.abbr}<Abbr text={entryObj.text} description={entryObj.abbr} />{:else}{entryObj.text}{/if}</strong>{:else if entryObj.url}<Link url={entryObj.url}>{#if entryObj.abbr}<Abbr text={entryObj.text} description={entryObj.abbr} />{:else}{entryObj.text}{/if}</Link>{:else if entryObj.abbr}<Abbr text={entryObj.text} description={entryObj.abbr} />{:else}{entryObj.text}{/if}{details}{separator}{/if}

<style>
    .focus {
        font-weight: normal;
        color: var(--mainColor);
    }
</style>
