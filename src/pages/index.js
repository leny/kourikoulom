/* leny/kourikoulom
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {graphql} from "gatsby";
import {css} from "@emotion/core";
import {rem, percent, mq, fixed, margin, padding, vw} from "koutla-swiss";

import {
    MQ_TABLET,
    MQ_SMALL_DESKTOP,
    MQ_MEDIUM_DESKTOP,
    MQ_LARGE_DESKTOP,
} from "../core/constants";

import {Helmet} from "react-helmet";
import "../core/font-awesome";
import GlobalStyles from "../components/head/global-styles";
import ShareCard from "../components/head/share-card";

import Header from "../components/header/header";

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
        ...margin(0, "auto"),
        paddingTop: rem(2.4),
        ...mq(MQ_TABLET, {
            ...padding(rem(8.1), 0, rem(18), rem(28.5)),
        }),
        ...mq(MQ_SMALL_DESKTOP, {
            paddingTop: rem(15.6),
        }),
        ...mq(MQ_LARGE_DESKTOP, {
            width: rem(140),
        }),
    }),
    head: css({
        ...mq(MQ_TABLET, {
            ...fixed({top: rem(2.5), left: percent(50)}),
            width: rem(25),
            marginLeft: percent(-45),
        }),
        ...mq(MQ_SMALL_DESKTOP, {
            top: rem(10),
        }),
        ...mq(MQ_LARGE_DESKTOP, {
            marginLeft: rem(-70),
        }),
    }),
    content: css({
        ...mq(MQ_SMALL_DESKTOP, {
            columns: 2,
            columnGap: percent(8),
        }),
        ...mq(MQ_MEDIUM_DESKTOP, {
            columns: 3,
            columnGap: percent(4),
        }),
        ...mq(MQ_LARGE_DESKTOP, {
            columns: 4,
            columnGap: percent(2.5),
        }),
    }),
    forceBreak: css({
        ...mq(MQ_LARGE_DESKTOP, {
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
        </Helmet>
        <GlobalStyles />
        <ShareCard type={"twitter"} values={data.dataJson.cards.twitter} />
        <ShareCard type={"og"} values={data.dataJson.cards.facebook} />
        <div css={styles.head}>
            <Header />
            <IdentitySection />
        </div>
        <main css={styles.content}>
            <SkillsSection />
            <ExperienceSection />
            <FormationsSection css={styles.forceBreak} />
            <ProjectsSection />
            <LanguagesSection />
            <MiscSection />
        </main>
    </div>
);
