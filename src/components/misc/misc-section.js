/* leny/kourikoulom
 *
 * /src/components/misc/misc-section.js - Misc Section Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";

import Section from "../commons/section";
import DefinitionList from "../commons/definition-list";

// TODO: extract this

const MISCS = [
    {
        name: "Motorisation",
        icon: "car",
        description: [
            "Maîtrise de la marche à pied et des transports en commun",
        ],
    },
    {
        name: "Centres d'intérêt",
        icon: "mug-marshmallows",
        description: [
            "Nouvelles technologies",
            "éducation & vulgratisation",
            {text: "développement open-source", url: "https://github.com/leny"},
            "actualités",
            "littérature",
            "contre-culture",
        ],
    },
];

export default () => (
    <Section title={"Divers"} icon={"user"}>
        <DefinitionList elements={MISCS} />
    </Section>
);
