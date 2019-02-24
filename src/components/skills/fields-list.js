/* leny/kourikoulom
 *
 * /src/components/skills/fields-list.js - FieldsList Skills Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem, margin} from "koutla-swiss";

import {FADE_COLOR} from "../../core/constants";
import FieldEntry from "./field-entry";

const styles = {
    title: css({
        ...margin(0, "auto", rem(0.66)),
        fontWeight: "bold",
        fontSize: rem(1.8),
    }),
    value: css({
        ...margin(0, "auto", rem(1.6)),
        color: FADE_COLOR,
    }),
};

export default ({title, fields}) => (
    <>
        <dt css={styles.title}>{title}</dt>
        <dd css={styles.value}>
            {fields.map((entry, index, arr) => (
                <FieldEntry
                    key={entry.text || entry}
                    entry={entry}
                    last={index === arr.length - 1}
                />
            ))}
        </dd>
    </>
);
