<script>
    import Icon from "../icon.svelte";
    import DescriptionParser from "./description-parser.svelte";
    import { NBSP } from "$lib/core/constants.js";

    /**
     * @typedef {Object} Element
     * @property {string} name
     * @property {string} [icon]
     * @property {Array<string | import('./DescriptionParser.svelte').EntryObject>} description
     */

    /** @type {Element[]} */
    export let elements;
</script>

<dl class="list">
    {#each elements as { name, icon, description } (name)}
        <dt class="list__title">
            {#if icon}
                <Icon {icon} />{NBSP}
            {/if}
            {name}
        </dt>
        <dd class="list__description">
            {#each description as entry, index}
                <DescriptionParser
                    {entry}
                    last={index === description.length - 1}
                />
            {/each}
        </dd>
    {/each}
</dl>

<style>
    .list {
        margin: 0 auto 3.2rem;
        font-size: 1.6rem;
    }

    .list__title {
        margin: 0 auto 0.66rem;
        font-weight: bold;
        font-size: 1.8rem;
    }

    .list__description {
        margin: 0 auto 1.6rem;
    }
</style>
