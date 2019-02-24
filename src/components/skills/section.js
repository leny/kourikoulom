/* leny/kourikoulom
 *
 * /src/components/skills/section.js - Skills Section Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem, margin} from "koutla-swiss";

import Section from "../commons/section";
import SubSection from "../commons/sub-section";
import FieldsList from "./fields-list";

// TODO: extract this

const SKILLS = [
    {
        title: "Langages",
        fields: [
            {
                title: "Expert javascript",
                fields: [
                    "ES5",
                    {text: "ES2015+", focus: true},
                    {
                        text: "node.js",
                        focus: true,
                        details: ["server", "CLI", "tools", "apps"],
                    },
                    {
                        text: "React",
                        focus: true,
                        details: ["Flux", "Redux", "MobX", "SSR", "…"],
                    },
                    "Angular",
                    "Ember",
                    "VueJS",
                    {text: "DOM", focus: true, abbr: "Document Object Model"},
                    {
                        text: "APIs HTML5",
                        details: [
                            "canvas",
                            "geolocalisation",
                            "storage",
                            "workers",
                            "…",
                        ],
                    },
                    "jQuery",
                    "AJAX/AJAJ",
                    "lodash",
                    "CoffeeScript",
                ],
            },
            {
                title: "Spécialiste performances web",
                fields: ["client-side", "server-side"],
            },
            {
                title: "Front-end",
                fields: [
                    {
                        text: "HTML 5",
                        focus: true,
                        abbr: "HyperText Markup Language",
                    },
                    {text: "xhtml", abbr: "eXtended Hypertext Markup Language"},
                    {text: "css 3", focus: true, abbr: "Cascading StyleSheets"},
                    {text: "xml", abbr: "eXtended Markup Language"},
                    {text: "xsl", abbr: "eXtensible Stylesheet Language"},
                    "xpath",
                    {text: "svg", abbr: "Scalable Vector Graphics"},
                    {text: "Stylus", focus: true},
                    "sass",
                    {text: "javascript", focus: true},
                    "json",
                    {text: "RegExp", focus: true},
                ],
            },
            {
                title: "Back-End",
                fields: [
                    {
                        text: "node.js",
                        focus: true,
                        details: ["express", "sockets.io", "…"],
                    },
                    {text: "NoSQL", details: ["Redis", "MongoDB", "CouchDB"]},
                    {text: "GraphQL", focus: true},
                    {text: "ArangoDB", focus: true},
                    "MySQL",
                    {text: "PostgreSQL", focus: true},
                    "ElasticSearch",
                    "PHP",
                ],
            },
            {
                title: "CMS & Générateurs",
                fields: [
                    "Ghost",
                    "Jekyll",
                    {text: "Gatsby", focus: true},
                    "Hexo",
                ],
            },
            {
                title: "Mobile",
                fields: [{text: "iOS natif", details: ["Swift"]}],
            },
            {title: "Système", fields: ["bash", "python", "go-lang"]},
        ],
    },
    {
        title: "Outils & Méthodologies",
        fields: [
            {
                title: "Adobe Creative Suite CC",
                fields: [
                    "Photoshop",
                    "Illustrator",
                    "InDesign",
                    "Flash",
                    "Edge Tools",
                    "Animate",
                    "XD",
                ],
            },
            {
                title: "Computer Graphics Design",
                fields: ["Sketch", "Pixelmator Pro", "Figma"],
            },
            {
                title: "Apple Pro Apps",
                fields: ["Logic Pro 8", "Final Cut Pro X", "XCode 4+"],
            },
            {
                title: "Text Editors & IDE",
                fields: [
                    "Vim",
                    {text: "neovim", focus: true},
                    "Atom",
                    "VSCode",
                    "Sublime Text",
                ],
            },
            {
                title: "Task runners and workflow control",
                fields: [
                    {text: "Webpack", focus: true},
                    "Parcel",
                    "GruntJS",
                    "GulpJS",
                    "Codekit",
                ],
            },
            {
                title: "Continuous Integration Tools",
                fields: [
                    "Travis",
                    "Jenkins",
                    {text: "GitHub Actions", focus: true},
                ],
            },
            {
                title: "Virtualisation, containers & provisioning",
                fields: [
                    "Vagrant",
                    {text: "docker", focus: true},
                    {text: "AWS Lambda", focus: true},
                    "Serverless",
                    "Chef",
                    "Puppet",
                    "Ansible",
                ],
            },
            {
                title: "Version Control",
                fields: [
                    {
                        text: "git",
                        focus: true,
                        details: ["GitHub", "git-flow", "GitHub Classroom"],
                    },
                    {text: "SVN", abbr: "Subversion"},
                    {text: "hg", abbr: "Mercurial"},
                ],
            },
            {
                title: "Méthodologies",
                fields: [
                    "Scrum",
                    {text: "GTD", abbr: "Get Things Done"},
                    {text: "XP", abbr: "eXtreme Programming"},
                    "KanBan",
                ],
            },
        ],
    },
    {
        title: "Systèmes",
        fields: [
            {
                title: "macOS",
                fields: [
                    "10.6~10.13",
                    {text: "10.14", details: ["système principal"]},
                ],
            },
            {
                title: "Linux",
                fields: [
                    "debian-based",
                    {text: "shell", details: ["bash/zsh", "automation"]},
                ],
            },
            {
                title: "Administration Système, DevOps",
                fields: [
                    {text: "nginx", focus: true},
                    "Apache2",
                    {text: "AWS", focus: true, details: ["ECS/ECR", "lambda"]},
                ],
            },
        ],
    },
];

const styles = {
    list: css({
        ...margin(0, "auto", rem(3.2)),
        fontSize: rem(1.6),
    }),
};

export default () => (
    <Section title={"Compétences"} icon={"bolt"}>
        {SKILLS.map(({title, fields}) => (
            <SubSection key={title} title={title}>
                <dl css={styles.list}>
                    {fields.map(entry => (
                        <FieldsList key={entry.title} {...entry} />
                    ))}
                </dl>
            </SubSection>
        ))}
    </Section>
);
