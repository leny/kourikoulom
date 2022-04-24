/* leny/kourikoulom
 *
 * /src/components/commons/section.js - Common Section Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css} from "@pwops/emotion-css";
import {rem} from "@pwops/core";
import {mqTablet, mqSmallDesktop} from "../../core/utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {varValue} from "../../core/utils";

const styles = {
    container: css({
        margin: [0, "auto", rem(3.6)],
        ...mqTablet({
            marginBottom: rem(19.2),
        }),
        ...mqSmallDesktop({
            breakInside: "avoid",
            marginBottom: rem(9.6),
        }),
    }),
    title: css({
        flexRow: ["space-between", "center"],
        margin: [0, "auto", rem(3.2)],
        paddingBottom: rem(0.25),
        borderBottom: [rem(0.1), "solid", varValue("borderColor")],
        fontSize: rem(2.4),
        textAlign: "right",
    }),
    titleContent: {flex: 1},
    hideTitle: css({display: "none"}),
    icon: css({
        size: [`${rem(2.4)} !important`],
    }),
};

export default ({className, title, hideTitle = false, children, icon}) => {
    let $icon;

    icon && ($icon = <FontAwesomeIcon icon={icon} css={styles.icon} />);

    return (
        <section css={styles.container} className={className}>
            <h2 css={[styles.title, hideTitle && styles.hideTitle]}>
                {$icon}
                <span css={styles.titleContent}>{title}</span>
            </h2>
            {children}
        </section>
    );
};
