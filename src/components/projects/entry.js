/* leny/kourikoulom
 *
 * /src/components/projects/entry.js - Entry Projects Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem, margin} from "koutla-swiss";

import Link from "../commons/link";

const styles = {
    title: css({
        ...margin(0, "auto", rem(0.66)),
        fontWeight: "bold",
        fontSize: rem(1.8),
    }),
    description: css({
        ...margin(0, "auto", rem(1.6)),
    }),
};

export default ({name, url, tooltip, description}) => {
    return (
        <>
            <dt css={styles.title}>
                <Link url={url} tooltip={tooltip}>
                    {name}
                </Link>
            </dt>
            <dd css={styles.description}>{description}</dd>
        </>
    );
};
