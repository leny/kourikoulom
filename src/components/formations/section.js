/* leny/kourikoulom
 *
 * /src/components/formations/section.js - Formations Section Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";
import {css} from "@emotion/core";
import {rem, margin} from "koutla-swiss";

import Section from "../commons/section";
import SubSection from "../commons/sub-section";
import Entry from "./entry";

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
    <StaticQuery
        query={graphql`
            query {
                allFormationsJson {
                    edges {
                        node {
                            title
                            details {
                                title
                                from
                                details
                                to
                                location
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Section
                className={className}
                title={"Formations"}
                icon={"graduation-cap"}>
                {data.allFormationsJson.edges.map(
                    ({node: {title, details}}, index) => (
                        <SubSection
                            key={title}
                            title={title}
                            hideTitle={index === 0}>
                            <ol css={styles.list}>
                                {details.map(formation => (
                                    <Entry
                                        key={formation.title}
                                        css={styles.element}
                                        {...formation}
                                    />
                                ))}
                            </ol>
                        </SubSection>
                    ),
                )}
            </Section>
        )}
    />
);