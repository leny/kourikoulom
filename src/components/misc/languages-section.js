/* leny/kourikoulom
 *
 * /src/components/misc/languages-section.js - Languages Section Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";

import Section from "../commons/section";
import DefinitionList from "../commons/definition-list";

// TODO: extract this

const LANGS = [
    {
        name: "Français",
        description: [
            "Langue maternelle",
            "maîtrise de l'orthographe et de la grammaire",
        ],
    },
    {
        name: "Anglais",
        description: [
            "Connaissances avancées",
            "maîtrise du langage technique",
        ],
    },
];

export default () => (
    <Section title={"Langues"} icon={"comments"}>
        <DefinitionList elements={LANGS} />
    </Section>
);
