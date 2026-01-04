<!-- @leny/kourikoulom - /src/lib/components/commons/section.svelte -->

<script>
    import Icon from "../icon.svelte";

    /** @type {string} */
    export let title;

    /** @type {string | undefined} */
    export let icon = undefined;

    /** @type {boolean} */
    export let hideTitle = false;

    /** @type {string} */
    let className = "";
    export { className as class };
</script>

<section class="section {className}">
    <h2 class="section__title" class:section__title--hidden={hideTitle}>
        {#if icon}
            <Icon {icon} class="section__icon" />
        {/if}
        <span class="section__title-content">{title}</span>
    </h2>
    <slot />
</section>

<style>
    .section {
        margin: 0 auto 3.6rem;
    }

    @media (min-width: 640px) {
        .section {
            margin-bottom: 19.2rem;
        }
    }

    @media (min-width: 960px) {
        .section {
            break-inside: avoid;
            margin-bottom: 9.6rem;
        }
    }

    .section__title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto 3.2rem;
        padding-bottom: 0.25rem;
        border-bottom: 0.1rem solid var(--borderColor);
        font-size: 2.4rem;
        text-align: right;
    }

    .section__title--hidden {
        display: none;
    }

    .section__title-content {
        flex: 1;
    }

    .section :global(.section__icon) {
        font-size: 2.4rem;
    }
</style>
