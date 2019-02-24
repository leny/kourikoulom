/* leny/kourikoulom
 *
 * /src/components/formations/section.js - Formations Section Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem, margin} from "koutla-swiss";

import Section from "../commons/section";
import SubSection from "../commons/sub-section";
import Entry from "./entry";

// TODO: extract this

const FORMATIONS = {
    Diplômes: [
        {
            title: "Simplon - Formation de Formateurs",
            from: "2018-09",
            details: "Formation pédagogie active - Méthodologie Simplon",
            location: "Simplon, Montreuil, France",
        },
        {
            title: "Bachelor en Techniques Infographiques",
            from: "2004",
            to: "2007",
            details: "Orientation WEB",
            location: "Haute École de la Province de Liège, Belgique",
        },
        {
            title: "Psychologie et Sciences de l'Éducation",
            from: "2003",
            to: "2004",
            details: "Première année",
            location: "ULiège, Belgique",
        },
    ],
    Distinctions: [
        {
            title: "Webdesign International Festival - Finale",
            from: "2006-02",
            details: "Seconde place, catégorie amateurs & étudiants",
            location: "Limoges, France",
        },
        {
            title: "Webdesign International Festival - Présélections Belges",
            from: "2005-11",
            details: "Première place, catégorie amaterus & étudiants",
            location: "Belgique",
        },
    ],
};

const styles = {
    list: css({
        listStyle: "none",
        margin: 0,
        padding: 0,
    }),
    element: css({
        ...margin(0, "auto", rem(3.6)),
    }),
};

export default ({className}) => (
    <Section className={className} title={"Formations"} icon={"graduation-cap"}>
        {Object.entries(FORMATIONS).map(([title, formations], index) => (
            <SubSection key={title} title={title} hideTitle={index === 0}>
                <ol css={styles.list}>
                    {formations.map(formation => (
                        <Entry
                            key={formation.title}
                            css={styles.element}
                            {...formation}
                        />
                    ))}
                </ol>
            </SubSection>
        ))}
    </Section>
);
