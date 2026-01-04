<!-- @leny/kourikoulom - /src/lib/components/misc/misc-section.svelte -->

<script>
    import Section from "../commons/section.svelte";
    import DefinitionList from "../commons/definition-list.svelte";
    import miscData from "$lib/data/misc.json";

    /** @type {string} */
    let className = "";
    export { className as class };
</script>

<Section class={className} title="Divers" icon={["fad", "user"]}>
    <DefinitionList elements={miscData} />
</Section>
