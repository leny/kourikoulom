/* leny/kourikoulom
 *
 * /src/components/identity/section.js - Identity Section Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";
import {css} from "@emotion/core";
import {rem} from "koutla-swiss";

import Section from "../commons/section";
import Entry from "./entry";

const styles = {
    list: css({
        margin: 0,
        fontSize: rem(1.6),
    }),
};

export default () => (
    <StaticQuery
        query={graphql`
            query {
                allIdentityJson {
                    edges {
                        node {
                            icon
                            label
                            value
                            prefix
                            link
                            tooltip
                            external
                            kbd
                        }
                    }
                }
            }
        `}
        render={data => (
            <Section title={"À propos de moi…"} hideTitle>
                <dl css={styles.list}>
                    {data.allIdentityJson.edges.map(({node}) => (
                        <Entry key={node.label} {...node} />
                    ))}
                </dl>
            </Section>
        )}
    />
);
