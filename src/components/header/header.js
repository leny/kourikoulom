/* leny/kourikoulom
 *
 * /src/components/header/header.js - Header Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css} from "@pwops/emotion-css";
import {rem, percent} from "@pwops/core";

import {varValue} from "../../core/utils";

import Leny from "../svg/leny";
import Name from "../svg/delnatte-pierre-antoine";
import Profession from "../svg/webdeveloper";

const styles = {
    container: css({
        margin: [0, "auto", rem(2.4)],
    }),
    title: css({
        margin: [0, "auto", rem(2.4)],
    }),
    name: css({
        display: "block",
        margin: [0, "auto", rem(1)],
        paddingBottom: rem(1),
        borderBottom: [rem(0.1), "solid", varValue("borderColor")],
    }),
    svg: css({
        display: "block",
        margin: [0, "auto"],
    }),
    leny: css({
        size: [rem(4.8)],
        margin: [0, "auto", rem(2)],
    }),
    profession: css({
        width: percent(45),
        marginRight: 0,
    }),
};

export default ({className}) => (
    <header css={styles.container} className={className}>
        <h1 css={styles.title}>
            <Leny css={[styles.svg, styles.leny]} />
            <strong css={styles.name}>
                <Name css={styles.svg} title={"Delnatte Pierre-Antoine"} />
            </strong>
            <Profession
                css={[styles.svg, styles.profession]}
                title={"Webdeveloper"}
            />
        </h1>
    </header>
);
