<!-- @leny/kourikoulom - /src/lib/components/misc/languages-section.svelte -->

<script>
    import Section from "../commons/section.svelte";
    import DefinitionList from "../commons/definition-list.svelte";
    import languagesData from "$lib/data/languages.json";

    /** @type {string} */
    let className = "";
    export { className as class };
</script>

<Section class={className} title="Langues" icon={["fad", "comment-dots"]}>
    <DefinitionList elements={languagesData} />
</Section>
