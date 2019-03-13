/* leny/kourikoulom
 *
 * /src/components/head/global-styles.js - GlobalStyles components
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css, Global} from "@emotion/core";
import {percent, pwop} from "@pwops/core";
import "@pwops/mixins";

import normalize from "emotion-normalize";
import boxSizingReset from "emotion-box-sizing-reset";
import {
    BCG_COLOR,
    MAIN_COLOR,
    SOURCE_SANS_PRO_STACK,
} from "../../core/constants";

export default () => (
    <>
        <Global styles={normalize} />
        <Global styles={boxSizingReset} />
        <Global
            styles={css(
                pwop({
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
                        ],
                    },
                    body: {
                        position: "relative",
                        color: MAIN_COLOR,
                    },
                }),
            )}
        />
    </>
);
