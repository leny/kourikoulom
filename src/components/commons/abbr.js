/* leny/kourikoulom
 *
 * /src/components/commons/abbr.js - Abbr Component
 *
 * coded by leny@flatLand!
 * started at 08/03/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {important} from "koutla-swiss";

import withTooltip, {styles as tooltipStyles} from "../../core/with-tooltip";

import {ALT_COLOR} from "../../core/constants";

const styles = {
    container: css({
        position: "relative",
        cursor: "help",
        textDecoration: important([ALT_COLOR, "dotted", "underline"].join(" ")),
        ...tooltipStyles,
    }),
};

export default ({text, description}) => {
    return (
        <abbr css={styles.container} {...withTooltip(description)}>
            {text}
        </abbr>
    );
};
