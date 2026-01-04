<!-- @leny/kourikoulom - /src/lib/components/identity/section.svelte -->

<script>
    import Section from "../commons/section.svelte";
    import Entry from "./entry.svelte";
    import identityData from "$lib/data/identity.json";

    /** @type {string} */
    let className = "";
    export { className as class };
</script>

<Section class="container {className}" title="À propos de moi…" hideTitle>
    <dl class="list">
        {#each identityData as entry (entry.label)}
            <Entry {...entry} />
        {/each}
    </dl>
</Section>

<style>
    :global(.container) {
        margin-bottom: 1.2rem;
    }

    .list {
        margin: 0;
        font-size: 1.6rem;
    }

    @media (min-width: 640px) {
        :global(.container) {
            margin-bottom: 1.2rem !important;
        }
    }
</style>
