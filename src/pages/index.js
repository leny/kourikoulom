/* leny/kourikoulom
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem, percent} from "koutla-swiss";

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

const styles = {
    main: css({
        width: percent(90),
        margin: [0, "auto"].join(" "),
        paddingTop: rem(2.4),
    }),
};

// TODO: extract this

const TWITTER_CARD = {
    card: "summary",
    title: "Delnatte Pierre-Antoine - Webdeveloper",
    description:
        "C.V. en ligne de Pierre-Antoine &quot;Leny&quot; Delnatte, Développeur web Belge",
    image: "http://pierre-antoine.delnatte.be/me.jpg",
    creator: "@leny_be",
};

const FACEBOOK_CARD = {
    type: "profile",
    title: "Delnatte Pierre-Antoine - Webdeveloper",
    site_name: "pierre-antoine.delnatte.be",
    description:
        "C.V. en ligne de Pierre-Antoine &quot;Leny&quot; Delnatte, Développeur web Belge",
    image: "http://pierre-antoine.delnatte.be/assets/me.jpg",
    locale: "fr_BE",
};

export default () => (
    <main css={styles.main}>
        <Helmet>
            <title>{"Delnatte Pierre-Antoine - Webdeveloper"}</title>
        </Helmet>
        <GlobalStyles />
        <ShareCard type={"twitter"} values={TWITTER_CARD} />
        <ShareCard type={"og"} values={FACEBOOK_CARD} />
        <Header />
        <IdentitySection />
        <SkillsSection />
        <ExperienceSection />
        <FormationsSection />
        <ProjectsSection />
    </main>
);
