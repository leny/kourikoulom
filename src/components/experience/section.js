/* leny/kourikoulom
 *
 * /src/components/experience/section.js - Experience Section Component
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

const styles = {
    list: css({
        listStyle: "none",
        margin: 0,
        padding: [rem(0.3), 0, 0],
    }),
    element: css({
        margin: [0, "auto", rem(3.6)],
    }),
};

export default ({className}) => (
    <StaticQuery
        query={graphql`
            query {
                allExperiencesJson {
                    edges {
                        node {
                            company
                            url
                            position
                            from
                            to
                            location
                            details
                            subs
                        }
                    }
                }
            }
        `}
        render={data => (
            <Section className={className} title={"Parcours"} icon={"route"}>
                <ol css={styles.list}>
                    {data.allExperiencesJson.edges.map(({node: experience}) => (
                        <Entry
                            key={experience.company}
                            css={styles.element}
                            {...experience}
                        />
                    ))}
                </ol>
            </Section>
        )}
    />
);
