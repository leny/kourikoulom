/* leny/kourikoulom
 *
 * /src/components/head/global-styles.js - GlobalStyles components
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css, Global} from "@emotion/core";
import {percent, absolute, size, borderBottom, rem} from "koutla-swiss";

import normalize from "emotion-normalize";
import {
    boxSizingReset,
    BCG_COLOR,
    MAIN_COLOR,
    ALT_COLOR,
    ALT_HOVER_COLOR,
    SOURCE_SANS_PRO_STACK,
} from "../../core/constants";

export default () => (
    <>
        <Global styles={normalize} />
        <Global styles={css(boxSizingReset)} />
        <Global
            styles={css({
                "*": {
                    textSizeAdjust: percent(100),
                },
                ":focus": {
                    outline: 0,
                },
                html: {
                    background: BCG_COLOR,
                    font: [
                        "normal",
                        `${percent(62.5)}/1.5`,
                        SOURCE_SANS_PRO_STACK,
                    ].join(" "),
                },
                body: {
                    position: "relative",
                    color: MAIN_COLOR,
                },
                a: {
                    color: ALT_COLOR,
                    textDecoration: "none",
                    transition: ["color", ".25s", "ease-in-out"].join(" "),
                    "&:hover": {color: ALT_HOVER_COLOR},
                },
                "abbr[title]": {
                    position: "relative",
                    borderBottom: 0,
                    cursor: "help",
                    textDecoration: "none",
                    "&::after": {
                        content: `""`,
                        display: "block",
                        ...absolute("auto", 0, rem(0.2)),
                        ...size("auto", 0),
                        ...borderBottom(rem(0.1), "dotted", ALT_COLOR),
                    },
                },
            })}
        />
    </>
);
