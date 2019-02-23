/* leny/kourikoulom
 *
 * /src/components/head/global-styles.js - GlobalStyles components
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css, Global} from "@emotion/core";
import {percent} from "koutla-swiss";
import {Helmet} from "react-helmet";

import {
    meyerReset,
    boxSizingReset,
    BCG_COLOR,
    MAIN_COLOR,
    SOURCE_SANS_PRO_STACK,
} from "../../core/constants";

export default () => (
    <>
        <Helmet>
            <link
                href={"https://fonts.googleapis.com/css?family=Source+Sans+Pro"}
                rel={"stylesheet"}
            />
        </Helmet>
        <Global styles={css(meyerReset)} />
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
            })}
        />
    </>
);
