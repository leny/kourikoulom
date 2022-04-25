/* leny/kourikoulom
 *
 * /src/components/identity/section.js - Identity Section Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";
import {css} from "@pwops/emotion-css";
import {rem} from "@pwops/core";
import {mqTablet} from "../../core/utils";

import Section from "../commons/section";
import Entry from "./entry";

const styles = {
    container: css({
        marginBottom: rem(1.2),
        ...mqTablet({marginBottom: rem(1.2)}),
    }),
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
                            kbd
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <Section
                css={styles.container}
                title={"À propos de moi…"}
                hideTitle>
                <dl css={styles.list}>
                    {data.allIdentityJson.edges.map(({node}) => (
                        <Entry key={node.label} {...node} />
                    ))}
                </dl>
            </Section>
        )}
    />
);
