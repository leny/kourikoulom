/* leny/kourikoulom
 *
 * /src/components/misc/languages-section.js - Languages Section Component
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
                allLanguagesJson {
                    edges {
                        node {
                            name
                            description
                        }
                    }
                }
            }
        `}
        render={data => (
            <Section className={className} title={"Langues"} icon={"comments"}>
                <DefinitionList
                    elements={data.allLanguagesJson.edges.map(({node}) => node)}
                />
            </Section>
        )}
    />
);
