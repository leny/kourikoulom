/* leny/kourikoulom
 *
 * /src/components/commons/section.js - Common Section Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {
    rem,
    margin,
    flexrow,
    borderBottom,
    size,
    important,
} from "koutla-swiss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {BORDER_COLOR} from "../../core/constants";

const styles = {
    container: css({
        ...margin(0, "auto", rem(3.6)),
    }),
    title: css({
        ...flexrow("space-between", "center"),
        ...margin(0, "auto", rem(3.2)),
        paddingBottom: rem(0.25),
        ...borderBottom(rem(0.1), "solid", BORDER_COLOR),
        fontSize: rem(2.4),
        textAlign: "right",
    }),
    titleContent: {flex: 1},
    hideTitle: css({display: "none"}),
    icon: css({
        ...important(size(rem(2.4))),
    }),
};

export default ({title, hideTitle = false, children, icon}) => {
    let $icon;

    icon && ($icon = <FontAwesomeIcon icon={icon} css={styles.icon} />);

    return (
        <section css={styles.container}>
            <h2 css={[styles.title, hideTitle && styles.hideTitle]}>
                {$icon}
                <span css={styles.titleContent}>{title}</span>
            </h2>
            {children}
        </section>
    );
};
