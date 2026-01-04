<!-- @leny/kourikoulom - /src/lib/components/projects/section.svelte -->

<script>
    import Section from "../commons/section.svelte";
    import Entry from "./entry.svelte";
    import Link from "../commons/link.svelte";
    import projectsData from "$lib/data/projects.json";

    /** @type {string} */
    let className = "";
    export { className as class };

    const OTHERS = [
        {
            url: "https://github.com/leny?tab=repositories",
            title: "Mes repositories sur GitHub",
            text: "sur GitHub",
        },
        {
            url: "https://www.npmjs.com/~leny",
            title: "Mes packages sur npm",
            text: "sur npm",
        },
        {
            url: "https://atom.io/users/leny/packages",
            title: "Mes packages pour Atom",
            text: "sur Atom",
        },
    ];
</script>

<Section class={className} title="Projets personnels" icon={["fad", "flask"]}>
    <dl class="list">
        {#each projectsData as project (project.name)}
            <Entry {...project} />
        {/each}
        <dt class="element-title">et plein d'autres :</dt>
        <dd>
            <ul class="sublist">
                {#each OTHERS as { url, title, text } (url)}
                    <li>
                        <Link {url} tooltip={title}>{text}</Link>
                    </li>
                {/each}
            </ul>
        </dd>
    </dl>
</Section>

<style>
    .list {
        margin: 0 auto 3.2rem;
        font-size: 1.6rem;
    }

    .element-title {
        margin: 0 auto 0.66rem;
        font-weight: bold;
        font-size: 1.8rem;
    }

    .sublist {
        padding: 0;
        font-size: 1.6rem;
    }
</style>
