/* leny/kourikoulom
 *
 * /src/components/identity/entry.js - Identity Entry Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {css} from "@pwops/emotion-css";
import {rem, percent} from "@pwops/core";

import {varValue} from "../../core/utils";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "../commons/link";

const styles = {
    term: css({
        display: "inline",
        fontSize: 0,
    }),
    icon: css({
        display: "inline",
        size: [`${rem(1.6)} !important`],
        marginRight: rem(1.2),
        verticalAlign: rem(-0.3),
        color: varValue("altColor"),
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
            size: [percent(100), rem(0.1)],
            margin: [0, 0, rem(1.1)],
        },
    }),
};

export default ({label, prefix, value, link, tooltip, icon, kbd = false}) => {
    const prefixAttr = {};

    let $icon,
        $content = value,
        $value;

    prefix && (prefixAttr["data-prefix"] = prefix);

    icon &&
        ($icon = (
            <FontAwesomeIcon
                css={styles.icon}
                icon={icon.includes("_") ? icon.split("_") : icon}
            />
        ));

    kbd && ($content = <kbd>{value}</kbd>);

    link &&
        ($value = (
            <Link url={link} tooltip={tooltip}>
                {$content}
            </Link>
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
