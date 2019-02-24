/* leny/kourikoulom
 *
 * /src/components/skills/field-entry.js - FieldEntry Skills Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {css} from "@emotion/core";

import {MAIN_COLOR} from "../../core/constants";

const styles = {
    strong: css({
        fontWeight: "normal",
        color: MAIN_COLOR,
    }),
};

export default ({entry, last}) => {
    if (typeof entry === "string") {
        return `${entry}${last ? "" : ", "}`;
    }

    const {text, focus, details, abbr} = entry;

    let $text = text,
        $separator = last || ", ",
        $details;

    if (abbr) {
        $text = <abbr title={abbr}>{text}</abbr>;
    }

    if (focus) {
        $text = <strong css={styles.strong}>{$text}</strong>;
    }

    if (details) {
        $details = ` (${details.join(", ")})`;
    }

    return (
        <>
            {$text}
            {$details}
            {$separator}
        </>
    );
};
