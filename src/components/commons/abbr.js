/* leny/kourikoulom
 *
 * /src/components/commons/abbr.js - Abbr Component
 *
 * coded by leny@flatLand!
 * started at 08/03/2019
 */

import React from "react";
import {css} from "@pwops/emotion-css";

import withTooltip, {styles as tooltipStyles} from "../../core/with-tooltip";
import {mqPreferDark} from "../../core/utils";

import {DARK, LIGHT} from "../../core/constants";

const styles = {
    container: css({
        position: "relative",
        cursor: "help",
        textDecoration: [LIGHT.ALT_COLOR, "dotted", "underline", "!important"],
        ...tooltipStyles,
        ...mqPreferDark({
            textDecoration: [
                DARK.ALT_COLOR,
                "dotted",
                "underline",
                "!important",
            ],
        }),
    }),
};

export default ({text, description}) => {
    return (
        <abbr css={styles.container} {...withTooltip(description)}>
            {text}
        </abbr>
    );
};
