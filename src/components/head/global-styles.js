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
import {mqPreferDark} from "../../core/utils";

export default () => (
    <>
        <Global styles={normalize} />
        <Global styles={boxSizingReset} />
        <Global
            styles={css({
                "*": {
                    textSizeAdjust: percent(100),
                },
                ":focus": {
                    outline: 0,
                },
                html: {
                    background: LIGHT.BCG_COLOR,
                    font: [
                        "normal",
                        `${percent(62.5)}/1.5`,
                        SOURCE_SANS_PRO_STACK,
                    ],
                    ...mqPreferDark({
                        background: DARK.BCG_COLOR,
                    }),
                },
                body: {
                    position: "relative",
                    color: LIGHT.MAIN_COLOR,
                    ...mqPreferDark({color: DARK.MAIN_COLOR}),
                },
            })}
        />
    </>
);
