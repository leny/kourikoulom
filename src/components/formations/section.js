/* leny/kourikoulom
 *
 * /src/components/formations/section.js - Formations Section Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";
import {css} from "@pwops/emotion-css";
import {rem} from "@pwops/core";

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
        margin: [0, "auto", rem(3.6)],
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
                                certification
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <Section
                className={className}
                title={"Formations"}
                icon={["fad", "graduation-cap"]}>
                {data.allFormationsJson.edges.map(
                    ({node: {title, details}}) => (
                        <SubSection key={title} title={title}>
                            <ol css={styles.list}>
                                {details.map((formation) => (
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
