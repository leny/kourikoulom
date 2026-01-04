<!-- @leny/kourikoulom - /src/lib/components/header/color-scheme-switcher.svelte -->

<script>
    import { onMount } from "svelte";
    import Icon from "../icon.svelte";
    import { tooltip } from "$lib/core/tooltip.js";
    import { MQ_PREFER_DARK } from "$lib/core/constants.js";

    let colorScheme = "light";

    $: tooltipText = `Passer en mode ${colorScheme === "dark" ? "clair" : "sombre"}`;
    $: iconName = colorScheme === "dark" ? "sun" : "moon";

    function handleChangeColorScheme(scheme) {
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.toggle("light");
        colorScheme = scheme;
    }

    function handleChangeSystemColorScheme(e) {
        handleChangeColorScheme(e.matches ? "dark" : "light");
    }

    function handleSwitchColorScheme(e) {
        e.preventDefault();
        handleChangeColorScheme(colorScheme === "dark" ? "light" : "dark");
    }

    onMount(() => {
        const colorSchemeQuery = window.matchMedia(MQ_PREFER_DARK);
        colorScheme = colorSchemeQuery.matches ? "dark" : "light";
        document.documentElement.classList.add(colorScheme);
        colorSchemeQuery.addEventListener("change", handleChangeSystemColorScheme);

        return () => {
            colorSchemeQuery.removeEventListener(
                "change",
                handleChangeSystemColorScheme,
            );
        };
    });
</script>

<div class="container">
    <a
        href="#"
        class="link"
        use:tooltip={tooltipText}
        on:click={handleSwitchColorScheme}
    >
        <Icon icon={["fas", iconName]} class="icon" />
        <span class="label">{tooltipText}</span>
    </a>
</div>

<style>
    .container {
        margin-bottom: 4.8rem;
        padding-top: 1.25rem;
        border-top: 0.1rem solid var(--borderColor);
        text-align: center;
    }

    .link {
        position: relative;
        text-decoration: none;
    }

    .link::after {
        position: absolute;
        bottom: 100%;
        left: 50%;
        z-index: 1;
        padding: 0.3rem 0.8rem;
        transform: translateX(-50%);
        white-space: nowrap;
        background: var(--mainColor);
        color: var(--bcgColor);
        font-size: 1.2rem;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        content: attr(data-tooltip);
        pointer-events: none;
    }

    .link:hover::after {
        opacity: 1;
    }

    .link :global(.icon) {
        display: inline;
        width: 1.6rem !important;
        height: 1.6rem !important;
        margin-right: 0.8rem;
        vertical-align: -0.3rem;
    }

    .label {
        font-size: 1.4rem;
    }

    @media (min-width: 640px) {
        .container {
            text-align: right;
            margin-bottom: 2.4rem;
        }

        .link :global(.icon) {
            margin-right: 0;
            vertical-align: 0;
        }

        .label {
            display: none;
        }
    }
</style>
