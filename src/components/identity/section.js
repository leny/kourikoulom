/* leny/kourikoulom
 *
 * /src/components/identity/section.js - Identity Section Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

/* eslint-disable */

import React from "react";
import {css} from "@emotion/core";
import {rem, percent} from "koutla-swiss";

import CommonSection from "../commons/section";

const styles = {
    main: css({
        width: percent(90),
        margin: [0, "auto"].join(" "),
        paddingTop: rem(2.4),
    }),
};

export default () => (
    <CommonSection title={"À propos de moi…"} hideTitle>
        {"Hey, c'est moi!"}
    </CommonSection>
);
