/* leny/kourikoulom
 *
 * /src/components/identity/section.js - Identity Section Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem} from "koutla-swiss";

import Section from "../commons/section";
import Entry from "./entry";

// TODO: extract this

const IDENTITY = [
    {
        label: "Date de naissance",
        value: "8 mai 1985",
        prefix: "Né le",
    },
    {
        label: "Adresse",
        value: "Liège, Belgique",
        prefix: "Résidant à",
    },
    {
        label: "Mail",
        value: "pierre-antoine@delnatte.be",
        link: "mailto:pierre-antoine@delnatte.be",
        tooltip: "Contactez-moi par mail",
        icon: "envelope",
    },
    {
        label: "URL",
        value: "leny.me",
        link: "https://leny.me",
        external: true,
        tooltip: "Allez voir mon site perso",
        icon: "link",
    },
    {
        label: "GitHub",
        value: "leny",
        link: "https://github.com/leny",
        external: true,
        tooltip: "Mon profil GitHub",
        icon: ["fab", "github-alt"],
    },
    {
        label: "LinkedIn",
        value: "padelnatte",
        link: "https://www.linkedin.com/in/padelnatte",
        external: true,
        tooltip: "Mon profil LinkedIn",
        icon: ["fab", "linkedin"],
    },
    {
        label: "npm",
        value: "$ npx leny",
        link: "https://www.npmjs.com/package/leny",
        external: true,
        tooltip: "Ma carte de visite virtuelle avec npx",
        icon: ["fab", "npm"],
        kbd: true,
    },
];

const styles = {
    container: css({
        // TODO will have styles with mq
    }),
    list: css({
        margin: 0,
        fontSize: rem(1.6),
    }),
};

export default () => (
    <Section title={"À propos de moi…"} hideTitle>
        <dl css={styles.list}>
            {IDENTITY.map(entry => (
                <Entry key={entry.label} {...entry} />
            ))}
        </dl>
    </Section>
);
