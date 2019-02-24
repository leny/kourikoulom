/* leny/kourikoulom
 *
 * /src/components/commons/sub-section.js - Common Subsection Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem, margin, flexrow, size} from "koutla-swiss";

import {BORDER_COLOR} from "../../core/constants";

const styles = {
    title: css({
        ...flexrow("center", "center"),
        ...margin(0, "auto", rem(2.4)),
        fontSize: rem(2),
        textAlign: "center",
        "&::before, &::after": {
            content: `""`,
            ...margin(0, rem(0.5)),
            ...size(rem(2), rem(0.1)),
            background: BORDER_COLOR,
        },
    }),
    hideTitle: css({display: "none"}),
};

export default ({title, hideTitle = false, children}) => (
    <>
        <h3 css={[styles.title, hideTitle && styles.hideTitle]}>
            <span css={styles.titleContent}>{title}</span>
        </h3>
        {children}
    </>
);
