<!-- @leny/kourikoulom - /src/lib/components/formations/entry.svelte -->

<script>
    import Icon from "../icon.svelte";
    import { NBSP } from "$lib/core/constants.js";
    import { formatFormationDate } from "$lib/core/date-utils.js";

    /** @type {string} */
    let className = "";
    export { className as class };

    /** @type {string} */
    export let title;
    /** @type {string} */
    export let from;
    /** @type {string | undefined} */
    export let to = undefined;
    /** @type {string | undefined} */
    export let location = undefined;
    /** @type {string | undefined} */
    export let certification = undefined;
    /** @type {string} */
    export let details;

    $: fromFormatted = formatFormationDate(
        from,
        to ? "yyyy" : undefined,
        to ? "yyyy" : undefined,
    );
    $: toFormatted = to ? formatFormationDate(to, "yyyy", "yyyy") : null;
</script>

<li class="container {className}">
    <h3 class="title">{title}</h3>
    <p class="details">{details}</p>
    <div class="time-container">
        <time datetime={from}>{fromFormatted}</time>
        {#if to}
            {NBSP}-{NBSP}
            <time datetime={to}>{toFormatted}</time>
        {/if}
    </div>
    {#if location}
        <p class="location">
            <Icon icon="map-marker-alt" class="location-icon" />
            {NBSP}{location}
        </p>
    {/if}
    {#if certification}
        <p class="location">
            <a class="certification-link" href={certification} target="_new">
                <Icon icon="award" class="location-icon" />
                {NBSP}Voir certificat
            </a>
        </p>
    {/if}
</li>

<style>
    .container {
        position: relative;
        margin: 0 auto 3.2rem;
        padding-left: 3.44rem;
    }

    .title {
        width: 100%;
        margin: 0 auto 1rem;
        font-size: 1.8rem;
    }

    .details {
        width: 100%;
        margin: 0 auto 0.7rem;
        font-size: 1.6rem;
    }

    .time-container {
        position: absolute;
        top: 0;
        left: -15rem;
        width: 15rem;
        height: 1.8rem;
        padding: 0 0.8rem;
        font-size: 1.6rem;
        text-align: right;
        transform: rotate(-90deg);
        transform-origin: top right;
        color: var(--timeColor);
        text-transform: uppercase;
    }

    .location {
        margin: 0;
        font-size: 1.4rem;
        color: var(--locationColor);
    }

    .location :global(.location-icon) {
        font-size: 1.2rem;
        color: var(--locationColor);
    }

    .certification-link {
        text-decoration: none;
        color: var(--locationColor);
    }
</style>
