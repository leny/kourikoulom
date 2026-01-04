<!-- @leny/kourikoulom - /src/lib/components/formations/section.svelte -->

<script>
    import Section from "../commons/section.svelte";
    import SubSection from "../commons/sub-section.svelte";
    import Entry from "./entry.svelte";
    import formationsData from "$lib/data/formations.json";

    /** @type {string} */
    let className = "";
    export { className as class };
</script>

<Section class={className} title="Formations" icon={["fad", "graduation-cap"]}>
    {#each formationsData as { title, details } (title)}
        <SubSection {title}>
            <ol class="list">
                {#each details as formation (formation.title)}
                    <Entry class="element" {...formation} />
                {/each}
            </ol>
        </SubSection>
    {/each}
</Section>

<style>
    .list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .list :global(.element) {
        margin: 0 auto 3.6rem;
    }
</style>
