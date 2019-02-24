/* leny/kourikoulom
 *
 * /src/components/projects/section.js - Projects Section Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";
import {css} from "@emotion/core";
import {rem, margin} from "koutla-swiss";

import Section from "../commons/section";
import Entry from "./entry";

const styles = {
    list: css({
        ...margin(0, "auto", rem(3.2)),
        fontSize: rem(1.6),
    }),
    elementTitle: css({
        ...margin(0, "auto", rem(0.66)),
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
                icon={"flask"}>
                <dl css={styles.list}>
                    {data.allProjectsJson.edges.map(({node: project}) => (
                        <Entry key={project.name} {...project} />
                    ))}
                    <dt css={styles.elementTitle}>{"et plein d'autres :"}</dt>
                    <dd>
                        <ul css={styles.sublist}>
                            <li>
                                <a
                                    href={
                                        "https://github.com/leny?tab=repositories"
                                    }
                                    rel={"external"}
                                    title={"Mes repositories sur GitHub"}>
                                    {"sur GitHub"}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"https://www.npmjs.com/~leny"}
                                    rel={"external"}
                                    title={"Mes packages sur npm"}>
                                    {"sur npm"}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"https://atom.io/users/leny/packages"}
                                    rel={"external"}
                                    title={"Mes packages pour Atom"}>
                                    {"sur Atom"}
                                </a>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </Section>
        )}
    />
);
