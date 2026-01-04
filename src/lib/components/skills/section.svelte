<!-- @leny/kourikoulom - /src/lib/components/skills/section.svelte -->

<script>
    import Section from "../commons/section.svelte";
    import SubSection from "../commons/sub-section.svelte";
    import FieldsList from "./fields-list.svelte";
    import skillsData from "$lib/data/skills.json";

    /** @type {string} */
    let className = "";
    export { className as class };
</script>

<Section class={className} title="Compétences" icon={["fad", "books"]}>
    {#each skillsData as { title, sections } (title)}
        <SubSection {title}>
            <dl class="list">
                {#each sections as entry (entry.title)}
                    <FieldsList {...entry} />
                {/each}
            </dl>
        </SubSection>
    {/each}
</Section>

<style>
    .list {
        margin: 0 auto 3.2rem;
        font-size: 1.6rem;
    }
</style>
