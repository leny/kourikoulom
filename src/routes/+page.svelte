<!-- @leny/kourikoulom - /src/routes/+page.svelte -->

<script>
    import { Header, ColorSchemeSwitcher } from "$lib/components/header";
    import { IdentitySection } from "$lib/components/identity";
    import { SkillsSection } from "$lib/components/skills";
    import { ExperienceSection } from "$lib/components/experience";
    import { FormationsSection } from "$lib/components/formations";
    import { ProjectsSection } from "$lib/components/projects";
    import { LanguagesSection, MiscSection } from "$lib/components/misc";
    import headData from "$lib/data/head.json";
</script>

<svelte:head>
    <title>{headData.title}</title>
    <meta http-equiv="X-Clacks-Overhead" content="GNU Terry Pratchett" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content={headData.cards.twitter.card} />
    <meta name="twitter:title" content={headData.cards.twitter.title} />
    <meta name="twitter:description" content={headData.cards.twitter.description} />
    <meta name="twitter:image" content={headData.cards.twitter.image} />
    <meta name="twitter:creator" content={headData.cards.twitter.creator} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={headData.cards.facebook.type} />
    <meta property="og:title" content={headData.cards.facebook.title} />
    <meta property="og:site_name" content={headData.cards.facebook.site_name} />
    <meta property="og:description" content={headData.cards.facebook.description} />
    <meta property="og:image" content={headData.cards.facebook.image} />
    <meta property="og:locale" content={headData.cards.facebook.locale} />
</svelte:head>

<div class="wrapper">
    <div class="head">
        <Header />
        <IdentitySection />
        <ColorSchemeSwitcher />
    </div>
    <main class="content">
        <SkillsSection />
        <ExperienceSection class="medium-break" />
        <FormationsSection class="large-break" />
        <ProjectsSection />
        <LanguagesSection />
        <MiscSection />
    </main>
</div>

<style>
    .wrapper {
        position: relative;
        width: 90%;
        margin: 0 auto;
        padding-top: 2.4rem;
    }

    .head {
        /* Mobile: normal flow */
    }

    .content {
        /* Mobile: normal flow */
    }

    @media (min-width: 640px) {
        .wrapper {
            padding: 8.1rem 0 18rem 28.5rem;
        }

        .head {
            position: fixed;
            top: 2.5rem;
            left: 50%;
            width: 25rem;
            margin-left: -45%;
        }
    }

    @media (min-width: 960px) {
        .wrapper {
            padding-top: 15.6rem;
        }

        .head {
            top: 10rem;
        }

        .content {
            columns: 2;
            column-gap: 8%;
        }
    }

    @media (min-width: 1280px) {
        .content {
            columns: 3;
            column-gap: 4%;
        }
    }

    @media (min-width: 1520px) {
        .wrapper {
            width: 140rem;
        }

        .head {
            margin-left: -70rem;
        }

        .content {
            columns: 4;
            column-gap: 2.5%;
        }

        :global(.medium-break) {
            margin-bottom: 125vw;
        }

        :global(.large-break) {
            margin-bottom: 125vw;
        }
    }
</style>
