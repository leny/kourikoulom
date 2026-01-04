<!-- @leny/kourikoulom - /src/lib/components/header/header.svelte -->

<script>
    import Leny from "../svg/leny.svelte";
    import Name from "../svg/name.svelte";
    import Profession from "../svg/profession.svelte";

    /** @type {string} */
    let className = "";
    export { className as class };
</script>

<header class="container {className}">
    <h1 class="title">
        <Leny class="svg leny" />
        <strong class="name">
            <Name class="svg" title="Delnatte Pierre-Antoine" />
        </strong>
        <Profession class="svg profession" title="Webdeveloper" />
    </h1>
</header>

<style>
    .container {
        margin: 0 auto 2.4rem;
    }

    .title {
        margin: 0 auto 2.4rem;
    }

    .name {
        display: block;
        margin: 0 auto 1rem;
        padding-bottom: 1rem;
        border-bottom: 0.1rem solid var(--borderColor);
    }

    .name :global(.svg) {
        display: block;
        margin: 0 auto;
    }

    :global(.svg) {
        display: block;
        margin: 0 auto;
    }

    :global(.leny) {
        width: 4.8rem;
        height: 4.8rem;
        margin: 0 auto 2rem;
    }

    :global(.profession) {
        width: 45%;
        margin-right: 0;
    }
</style>
