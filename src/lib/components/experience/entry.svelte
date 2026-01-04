<!-- @leny/kourikoulom - /src/lib/components/experience/entry.svelte -->

<script>
    import Icon from "../icon.svelte";
    import Link from "../commons/link.svelte";
    import { NBSP } from "$lib/core/constants.js";
    import { formatExperienceDate } from "$lib/core/date-utils.js";

    /** @type {string} */
    let className = "";
    export { className as class };

    /** @type {string} */
    export let company;
    /** @type {string} */
    export let url;
    /** @type {string} */
    export let position;
    /** @type {string} */
    export let from;
    /** @type {string | undefined} */
    export let to = undefined;
    /** @type {string} */
    export let location;
    /** @type {string[]} */
    export let details;
    /** @type {string[]} */
    export let subs = [];
</script>

<li class="container {className}">
    <h3 class="company">
        <Link {url}>{company}</Link>
    </h3>
    <div class="details">
        <strong>
            <Icon icon="user-circle" class="position-icon" />
            {NBSP}{position}
        </strong>
        {#if details.length > 1}
            <ul class="details-content">
                {#each details as detail}
                    <li>{detail}</li>
                {/each}
            </ul>
        {:else}
            <p class="details-content">{details[0]}</p>
        {/if}
    </div>
    {#if subs.length > 0}
        <div class="subs">
            <Icon icon="info" class="subs-icon" />
            <ul class="subs-content">
                {#each subs as sub}
                    <li class="sub-element">{sub}</li>
                {/each}
            </ul>
        </div>
    {/if}
    <div class="time-container">
        <span class="time-period">
            <time datetime={from}>{formatExperienceDate(from)}</time>
            {NBSP}-{NBSP}
            {#if to}
                <time datetime={to}>{formatExperienceDate(to)}</time>
            {:else}
                …
            {/if}
        </span>
    </div>
    <p class="location">
        <Icon icon="map-marker-alt" class="location-icon" />
        {NBSP}{location}
    </p>
</li>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }

    .company {
        width: 100%;
        margin: 0 auto 1rem;
        font-size: 2rem;
    }

    .details {
        width: 100%;
        margin: 0 auto 0.7rem;
        font-size: 1.6rem;
    }

    .details :global(.position-icon) {
        width: 1.4rem !important;
        height: 1.4rem !important;
    }

    .details-content {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .subs {
        position: relative;
        margin-bottom: 0.5rem;
    }

    .subs :global(.subs-icon) {
        position: absolute;
        top: 0.25rem;
        width: 1.3rem !important;
        height: 1.3rem !important;
    }

    .subs-content {
        list-style: none;
        padding-left: 1.75rem;
    }

    .sub-element {
        font-size: 1.4rem;
        margin-bottom: 0.25rem;
    }

    .time-container {
        order: -1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.2rem;
    }

    .time-period {
        display: block;
        position: relative;
        padding: 0.2rem 0.6rem;
        background: var(--timeColor);
        font-size: 1.2rem;
        color: var(--timeTextColor);
        text-align: center;
        text-transform: uppercase;
        white-space: nowrap;
    }

    .time-period::before,
    .time-period::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        width: 2rem;
        height: 0.1rem;
        background: var(--timeColor);
    }

    .time-period::before {
        left: -3rem;
    }

    .time-period::after {
        right: -3rem;
    }

    .location {
        margin: 0;
        font-size: 1.4rem;
        color: var(--locationColor);
    }

    .location :global(.location-icon) {
        width: 1.2rem !important;
        height: 1.2rem !important;
        color: var(--locationColor);
    }
</style>
