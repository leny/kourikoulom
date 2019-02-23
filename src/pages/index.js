/* leny/kourikoulom
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem} from "koutla-swiss";

const styles = {
    tmp: css({
        fontSize: rem(4),
        color: "red",
    }),
};

export default () => <div css={styles.tmp}>{"Hey, leny!"}</div>;
