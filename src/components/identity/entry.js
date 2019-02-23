/* leny/kourikoulom
 *
 * /src/components/identity/entry.js - Identity Entry Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem, percent, size, margin, important} from "koutla-swiss";

import {ALT_COLOR} from "../../core/constants";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const styles = {
    term: css({
        display: "inline",
        fontSize: 0,
    }),
    icon: css({
        display: "inline",
        ...important(size(rem(1.6))),
        marginRight: rem(1.2),
        verticalAlign: rem(-0.3),
    }),
    value: css({
        display: "inline",
        margin: 0,
        "&[data-prefix]::before": {
            content: `attr(data-prefix) " "`,
        },
        "&::after": {
            content: `""`,
            display: "block",
            ...size(percent(100), rem(0.1)),
            ...margin(0, 0, rem(1.1)),
        },
    }),
};

export default ({
    label,
    prefix,
    value,
    link,
    external = false,
    tooltip,
    icon,
    kbd = false,
}) => {
    const prefixAttr = {};
    const linkAttr = {};

    let $icon,
        $content = value,
        $value;

    prefix && (prefixAttr["data-prefix"] = prefix);

    icon &&
        ($icon = (
            <FontAwesomeIcon color={ALT_COLOR} css={styles.icon} icon={icon} />
        ));

    kbd && ($content = <kbd>{value}</kbd>);

    external && (linkAttr.rel = "external");
    tooltip && (linkAttr.title = tooltip);

    link &&
        ($value = (
            <a href={link} {...linkAttr}>
                {$content}
            </a>
        ));

    return (
        <>
            <dt css={styles.term}>
                {$icon}
                {label}
            </dt>
            <dd css={styles.value} {...prefixAttr}>
                {$value || $content}
            </dd>
        </>
    );
};
