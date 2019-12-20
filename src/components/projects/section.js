/* leny/kourikoulom
 *
 * /src/components/projects/section.js - Projects Section Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";
import {css} from "@pwops/emotion-css";
import {rem} from "@pwops/core";

import Section from "../commons/section";
import Entry from "./entry";
import Link from "../commons/link";

const OTHERS = [
    {
        url: "https://github.com/leny?tab=repositories",
        title: "Mes repositories sur GitHub",
        text: "sur GitHub",
    },
    {
        url: "https://www.npmjs.com/~leny",
        title: "Mes packages sur npm",
        text: "sur npm",
    },
    {
        url: "https://atom.io/users/leny/packages",
        title: "Mes packages pour Atom",
        text: "sur Atom",
    },
];

const styles = {
    list: css({
        margin: [0, "auto", rem(3.2)],
        fontSize: rem(1.6),
    }),
    elementTitle: css({
        margin: [0, "auto", rem(0.66)],
        fontWeight: "bold",
        fontSize: rem(1.8),
    }),
    sublist: css({
        padding: 0,
        fontSize: rem(1.6),
    }),
};

export default ({className}) => (
    <StaticQuery
        query={graphql`
            query {
                allProjectsJson {
                    edges {
                        node {
                            name
                            url
                            tooltip
                            description
                        }
                    }
                }
            }
        `}
        render={data => (
            <Section
                className={className}
                title={"Projets personnels"}
                icon={["fad", "flask"]}>
                <dl css={styles.list}>
                    {data.allProjectsJson.edges.map(({node: project}) => (
                        <Entry key={project.name} {...project} />
                    ))}
                    <dt css={styles.elementTitle}>{"et plein d'autres :"}</dt>
                    <dd>
                        <ul css={styles.sublist}>
                            {OTHERS.map(({url, title, text}) => (
                                <li key={url}>
                                    <Link url={url} tooltip={title}>
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </dd>
                </dl>
            </Section>
        )}
    />
);
