/* leny/kourikoulom
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem, percent} from "koutla-swiss";

import GlobalStyles from "../components/head/global-styles";

const styles = {
    main: css({
        width: percent(90),
        margin: [0, "auto"].join(" "),
        paddingTop: rem(2.4),
    }),
    tmp: css({
        fontSize: rem(4),
        color: "red",
    }),
};

export default () => (
    <main css={styles.main}>
        <GlobalStyles />
        <h1 css={styles.tmp}>{"Hello, leny!"}</h1>
    </main>
);
