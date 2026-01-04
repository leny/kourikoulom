<!-- @leny/kourikoulom - /src/lib/components/commons/sub-section.svelte -->

<script>
    /** @type {string} */
    export let title;

    /** @type {boolean} */
    export let hideTitle = false;
</script>

<h3 class="subsection__title" class:subsection__title--hidden={hideTitle}>
    <span>{title}</span>
</h3>
<slot />

<style>
    .subsection__title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 auto 2.4rem;
        font-size: 2rem;
        text-align: center;
    }

    .subsection__title::before,
    .subsection__title::after {
        content: "";
        margin: 0.2rem 0.5rem 0;
        width: 2rem;
        height: 0.1rem;
        background: var(--borderColor);
    }

    .subsection__title--hidden {
        display: none;
    }
</style>
