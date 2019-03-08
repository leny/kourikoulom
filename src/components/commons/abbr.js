/* leny/kourikoulom
 *
 * /src/components/commons/abbr.js - Abbr Component
 *
 * coded by leny@flatLand!
 * started at 08/03/2019
 */

import React, {useState} from "react";
import {css} from "@emotion/core";
import {
    important,
    absolute,
    borderTop,
    transform,
    translateX,
    translateY,
    percent,
    s,
    cubicBezier,
    padding,
    rem,
    attr,
    border,
} from "koutla-swiss";

import {ALT_COLOR, MAIN_COLOR, BCG_COLOR} from "../../core/constants";

const styles = {
    container: css({
        position: "relative",
        cursor: "help",
        textDecoration: important([ALT_COLOR, "dotted", "underline"].join(" ")),
        "&::before,&::after": {
            visibility: "hidden",
            opacity: 0,
            pointerEvents: "none",
            transition: ["all", s(0.15), cubicBezier(0.5, 1, 0.25, 1)].join(
                " ",
            ),
            zIndex: 1,
        },
        "&::before": {
            ...absolute({left: percent(50), bottom: percent(100)}),
            ...padding(rem(0.5), rem(1.5)),
            minWidth: rem(12),
            whiteSpace: "nowrap",
            borderRadius: rem(0.3),
            background: MAIN_COLOR,
            color: BCG_COLOR,
            content: attr("data-tooltip"),
            textAlign: "center",
            fontSize: rem(1.4),
            lineHeight: 1.2,
            marginBottom: rem(0.5),
            transform: translateX(percent(-50)),
        },
        "&::after": {
            ...absolute({bottom: percent(100), left: percent(50)}),
            ...border(rem(0.8), "solid", "transparent"),
            width: 0,
            content: `""`,
            fontSize: 0,
            lineHeight: 0,
            transform: translateX(percent(-50)),
            ...borderTop(rem(0.8), "solid", MAIN_COLOR),
            borderBottom: "none",
        },
        "&:hover::before,&:hover::after": {
            visibility: "visible",
            opacity: 1,
            ...transform(translateX(percent(-50)), translateY(rem(-0.5))),
        },
    }),
};

export default ({text, description}) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <abbr
            css={styles.container}
            title={isHovered || description}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-tooltip={description}>
            {text}
        </abbr>
    );
};
