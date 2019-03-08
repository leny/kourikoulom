/* leny/kourikoulom
 *
 * /src/components/commons/description-parser.js - Commons Description Parser
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {css} from "@emotion/core";

import {MAIN_COLOR} from "../../core/constants";

import Abbr from "./abbr";
import Link from "./link";

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

    const {text, focus, details, abbr, url} = entry;

    let $text = text,
        $separator = last || ", ",
        $details;

    if (abbr) {
        $text = <Abbr description={abbr} text={text} />;
    }

    if (url) {
        $text = <Link url={url}>{$text}</Link>;
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
