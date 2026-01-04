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
        text-decoration: none;
    }

    .link :global(.icon) {
        font-size: 1.6rem;
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
