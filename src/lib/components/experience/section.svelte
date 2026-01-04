<!-- @leny/kourikoulom - /src/lib/components/experience/section.svelte -->

<script>
    import Section from "../commons/section.svelte";
    import Entry from "./entry.svelte";
    import experiencesData from "$lib/data/experiences.json";

    /** @type {string} */
    let className = "";
    export { className as class };
</script>

<Section class={className} title="Parcours" icon={["fad", "route"]}>
    <ol class="list">
        {#each experiencesData as experience (experience.company)}
            <Entry class="element" {...experience} />
        {/each}
    </ol>
</Section>

<style>
    .list {
        list-style: none;
        margin: 0;
        padding: 0.3rem 0 0;
    }

    .list :global(.element) {
        margin: 0 auto 4.8rem;
    }
</style>
