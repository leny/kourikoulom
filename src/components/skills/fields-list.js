/* leny/kourikoulom
 *
 * /src/components/skills/fields-list.js - FieldsList Skills Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {css} from "@pwops/emotion-css";
import {rem} from "@pwops/core";

import {varValue} from "../../core/utils";
import DescriptionParser from "../commons/description-parser";

const styles = {
    title: css({
        margin: [0, "auto", rem(0.66)],
        fontWeight: "bold",
        fontSize: rem(1.8),
    }),
    hideTitle: css({display: "none"}),
    value: css({
        margin: [0, "auto", rem(1.6)],
        color: varValue("fadeColor"),
    }),
};

export default ({title, hideTitle = false, fields}) => (
    <>
        <dt css={[styles.title, hideTitle && styles.hideTitle]}>{title}</dt>
        <dd css={styles.value}>
            {fields.map((entry, index, arr) => (
                <DescriptionParser
                    key={entry.text || entry}
                    entry={entry}
                    last={index === arr.length - 1}
                />
            ))}
        </dd>
    </>
);
