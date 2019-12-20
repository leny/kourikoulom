/* leny/kourikoulom
 *
 * /src/components/misc/misc-section.js - Misc Section Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";

import Section from "../commons/section";
import DefinitionList from "../commons/definition-list";

export default ({className}) => (
    <StaticQuery
        query={graphql`
            query {
                allMiscJson {
                    edges {
                        node {
                            name
                            icon
                            description {
                                text
                                url
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Section
                className={className}
                title={"Divers"}
                icon={["fad", "user"]}>
                <DefinitionList
                    elements={data.allMiscJson.edges.map(({node}) => node)}
                />
            </Section>
        )}
    />
);
