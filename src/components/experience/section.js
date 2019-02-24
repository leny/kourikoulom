/* leny/kourikoulom
 *
 * /src/components/experience/section.js - Experience Section Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

/* eslint-disable */

import React from "react";
import {css} from "@emotion/core";
import {rem, margin} from "koutla-swiss";

import Section from "../commons/section";

// TODO: extract this

const EXPERIENCES = [
    {
        company: "BeCode",
        url: "https://becode.org",
        position: "Code Guardian / Campus Manager",
        from: "2018-09-15",
        location: "Liège, Belgique",
        details: [
            "Coaching, formation, gestion du campus BeCode de Liège",
            "Coordination de l'équipe dev interne",
            "Analyse & développement d'outils internes",
        ],
    },
    {
        company: "flatLand!",
        url: "https://flatland.be",
        position: "Founder",
        from: "2011-11-05",
        location: "Liège, Belgique",
        details: [
            "Développement web freelance & sous-traitance, analyse & consultance",
        ],
    },
    {
        company: "Référence Fitness",
        url: "https://referencefitness.com",
        position: "Directeur Technique",
        from: "2016-11-01",
        to: "2018-09-15",
        location: "Liège, Belgique",
        details: [
            "Analyse, développement web & outils, administration système, gestion technique",
        ],
    },
    {
        company: "Haute École de la Province de Liège",
        url: "http://hepl.be",
        position: "Professeur Invité",
        from: "2011-10-02",
        to: "2017-09-01",
        location: "Liège, Belgique",
        details: [
            "RIA (Application Internet Riches) - 3ème année",
            "Multimédia Intéractif - 2ème année",
            "Design Web Mobile - 2ème année",
            "Réseaux & serveurs - 2ème année",
            "Création de pages Web - 1ère année",
        ],
    },
    {
        company: "KRKN",
        url: "http://krkn.be",
        position: "Co-Founder",
        from: "2014-05-01",
        to: "2015-08-01",
        location: "Liège, Belgique",
        details: ["Développement web & app, expertise & sous-traitance"],
    },
    {
        company: "ID&CO",
        url: "http://www.id-co.be",
        position: "Développeur Web, Administrateur Système",
        from: "2011-11-01",
        to: "2013-03-01",
        location: "Tournai, Belgique",
        details: ["Sites clients, CMS maison & outils internes"],
    },
    {
        company: "Ankama Studio",
        url: "https://ankama.com",
        position: "Intégrateur RIA Flash",
        from: "2010-09",
        to: "2011-10",
        location: "Roubaix, France",
        details: ["Jeux Boufbowl & Wakfu TCG Online"],
    },
    {
        company: "Ankama Games",
        url: "https://ankama.com",
        position: "Développeur web (php & flash), intégrateur",
        from: "2009-06",
        to: "2010-08",
        location: "Roubaix, France",
        details: ["Sites divers & outils internes"],
    },
    {
        company: "COM2B Networks",
        url: "http://www.com2b.be",
        position: "Développeur web (php & flash), intégrateur",
        from: "2008-12",
        to: "2009-06",
        location: "Bruxelles, Belgique",
        details: ["Sites divers & outils clients"],
    },
    {
        company: "New Edge Concept",
        url: "http://www.newedge.be",
        position: "Développeur web (php), intégrateur & designer",
        from: "2007-10",
        to: "2008-11",
        location: "Liège, Belgique",
        details: ["Sites divers & CMS maison"],
    },
    {
        company: "Valain S.A.",
        url: "http://www.valain.com",
        position: "Développeur Web (php)",
        from: "2007-04",
        to: "2007-07",
        location: "Wiltz, Luxembourg",
        details: ["Outils clients", "Stage de fin d'études & Job étudiant"],
    },
];

const styles = {
    list: css({
        ...margin(0, "auto", rem(3.2)),
        fontSize: rem(1.6),
    }),
};

export default () => (
    <Section title={"Parcours"} icon={"route"}>
        {"Huh?"}
    </Section>
);
