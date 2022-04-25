/* leny/kourikoulom
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {graphql} from "gatsby";
import {css} from "@pwops/emotion-css";
import {rem, percent, vw} from "@pwops/core";
import {
    mqTablet,
    mqSmallDesktop,
    mqMediumDesktop,
    mqLargeDesktop,
} from "../core/utils";

import {Helmet} from "react-helmet";
import "../core/font-awesome";
import GlobalStyles from "../components/head/global-styles";
import ShareCard from "../components/head/share-card";

import Header from "../components/header/header";
import ColorSchemeSwitcher from "../components/header/color-scheme-switcher";

import IdentitySection from "../components/identity/section";
import SkillsSection from "../components/skills/section";
import ExperienceSection from "../components/experience/section";
import FormationsSection from "../components/formations/section";
import ProjectsSection from "../components/projects/section";
import LanguagesSection from "../components/misc/languages-section";
import MiscSection from "../components/misc/misc-section";

const styles = {
    wrapper: css({
        position: "relative",
        width: percent(90),
        margin: [0, "auto"],
        paddingTop: rem(2.4),
        ...mqTablet({
            padding: [rem(8.1), 0, rem(18), rem(28.5)],
        }),
        ...mqSmallDesktop({
            paddingTop: rem(15.6),
        }),
        ...mqLargeDesktop({
            width: rem(140),
        }),
    }),
    head: css({
        ...mqTablet({
            fixed: [rem(2.5), null, null, percent(50)],
            width: rem(25),
            marginLeft: percent(-45),
        }),
        ...mqSmallDesktop({
            top: rem(10),
        }),
        ...mqLargeDesktop({
            marginLeft: rem(-70),
        }),
    }),
    content: css({
        ...mqSmallDesktop({
            columns: 2,
            columnGap: percent(8),
        }),
        ...mqMediumDesktop({
            columns: 3,
            columnGap: percent(4),
        }),
        ...mqLargeDesktop({
            columns: 4,
            columnGap: percent(2.5),
        }),
    }),
    mediumBreak: css({
        ...mqLargeDesktop({
            marginBottom: vw(100),
        }),
    }),
    largeBreak: css({
        ...mqLargeDesktop({
            marginBottom: vw(100),
        }),
    }),
};

export const query = graphql`
    query {
        dataJson {
            title
            cards {
                twitter {
                    card
                    title
                    description
                    image
                    creator
                }
                facebook {
                    type
                    title
                    description
                    site_name
                    image
                    locale
                }
            }
        }
    }
`;

export default ({data}) => (
    <div css={styles.wrapper}>
        <Helmet>
            <title>{data.dataJson.title}</title>
            <meta
                httpEquiv={"X-Clacks-Overhead"}
                content={"GNU Terry Pratchett"}
            />
        </Helmet>
        <GlobalStyles />
        <ShareCard type={"twitter"} values={data.dataJson.cards.twitter} />
        <ShareCard type={"og"} values={data.dataJson.cards.facebook} />
        <div css={styles.head}>
            <Header />
            <IdentitySection />
            <ColorSchemeSwitcher />
        </div>
        <main css={styles.content}>
            <SkillsSection />
            <ExperienceSection css={styles.mediumBreak} />
            <FormationsSection css={styles.largeBreak} />
            <ProjectsSection />
            <LanguagesSection />
            <MiscSection />
        </main>
    </div>
);
