/* leny/kourikoulom
 *
 * /src/components/skills/section.js - Skills Section Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";
import {css} from "@pwops/emotion-css";
import {rem} from "@pwops/core";

import Section from "../commons/section";
import SubSection from "../commons/sub-section";
import FieldsList from "./fields-list";

const styles = {
    list: css({
        margin: [0, "auto", rem(3.2)],
        fontSize: rem(1.6),
    }),
};

export default ({className}) => (
    <StaticQuery
        query={graphql`
            query {
                allSkillsJson {
                    edges {
                        node {
                            title
                            sections {
                                title
                                hideTitle
                                fields {
                                    text
                                    focus
                                    details
                                    abbr
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Section className={className} title={"Compétences"} icon={"bolt"}>
                {data.allSkillsJson.edges.map(({node: {title, sections}}) => (
                    <SubSection key={title} title={title}>
                        <dl css={styles.list}>
                            {sections.map(entry => (
                                <FieldsList key={entry.title} {...entry} />
                            ))}
                        </dl>
                    </SubSection>
                ))}
            </Section>
        )}
    />
);
