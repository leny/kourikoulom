/* leny/kourikoulom
 *
 * /src/components/head/global-styles.js - GlobalStyles components
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {Global} from "@emotion/core";
import {percent} from "@pwops/core";
import {css} from "@pwops/emotion-css";
import "@pwops/mixins";

import normalize from "emotion-normalize";
import boxSizingReset from "emotion-box-sizing-reset";
import {LIGHT, DARK, SOURCE_SANS_PRO_STACK} from "../../core/constants";
import {
    varValue,
    varsDeclaration,
    mqPreferDark,
    mqPreferLight,
} from "../../core/utils";

const darkThemeVars = {
    bcgColor: DARK.BCG_COLOR,
    mainColor: DARK.MAIN_COLOR,
    fadeColor: DARK.FADE_COLOR,
    altColor: DARK.ALT_COLOR,
    altHoverColor: DARK.ALT_HOVER_COLOR,
    borderColor: DARK.BORDER_COLOR,
    timeColor: DARK.TIME_COLOR,
    timeTextColor: DARK.TIME_TEXT_COLOR,
    locationColor: DARK.LOCATION_COLOR,
};

const lightThemeVars = {
    bcgColor: LIGHT.BCG_COLOR,
    mainColor: LIGHT.MAIN_COLOR,
    fadeColor: LIGHT.FADE_COLOR,
    altColor: LIGHT.ALT_COLOR,
    altHoverColor: LIGHT.ALT_HOVER_COLOR,
    borderColor: LIGHT.BORDER_COLOR,
    timeColor: LIGHT.TIME_COLOR,
    timeTextColor: LIGHT.TIME_TEXT_COLOR,
    locationColor: LIGHT.LOCATION_COLOR,
};

export default () => (
    <>
        <Global styles={normalize} />
        <Global styles={boxSizingReset} />
        <Global
            styles={css({
                ":root": {
                    ...mqPreferDark(varsDeclaration(darkThemeVars)),
                    ...mqPreferLight(varsDeclaration(lightThemeVars)),
                },
            })}
        />
        <Global
            styles={css({
                ":root": {
                    colorScheme: "light dark",
                },
                "*": {
                    textSizeAdjust: percent(100),
                },
                ":focus": {
                    outline: 0,
                },
                html: {
                    background: varValue("bcgColor"),
                    font: [
                        "normal",
                        `${percent(62.5)}/1.5`,
                        SOURCE_SANS_PRO_STACK,
                    ],
                },
                body: {
                    position: "relative",
                    color: varValue("mainColor"),
                },
            })}
        />
    </>
);
