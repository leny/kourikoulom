/* leny/kourikoulom
 *
 * /src/components/commons/section.js - Common Section Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

// TODO: icon

import React from "react";
import {css} from "@emotion/core";
import {rem, margin, borderBottom} from "koutla-swiss";

import {BORDER_COLOR} from "../../core/constants";

const styles = {
    container: css({
        ...margin(0, "auto", rem(3.6)),
    }),
    title: css({
        position: "relative",
        ...margin(0, "auto", rem(3.2)),
        paddingBottom: rem(0.25),
        ...borderBottom(rem(0.1), "solid", BORDER_COLOR),
        fontSize: rem(2.4),
        textAlign: "right",
    }),
    hideTitle: css({display: "none"}),
};

export default ({title, hideTitle = false, children}) => (
    <div css={styles.container}>
        <h2 css={[styles.title, hideTitle && styles.hideTitle]}>{title}</h2>
        {children}
    </div>
);
