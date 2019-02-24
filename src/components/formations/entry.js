/* leny/kourikoulom
 *
 * /src/components/formations/entry.js - Entry Formations Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {
    percent,
    rem,
    margin,
    padding,
    size,
    important,
    absolute,
} from "koutla-swiss";

import {DateTime} from "luxon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NBSP, MAIN_COLOR, BCG_COLOR, ALT_COLOR} from "../../core/constants";
import color from "color";

const formatDate = (date, format = "yyyy-MM", out = "LLL yyyy") =>
    DateTime.fromFormat(date, format, {locale: "fr"}).toFormat(out);

const TIME_COLOR = color(MAIN_COLOR)
    .mix(color(ALT_COLOR))
    .lighten(0.75)
    .whiten(0.5)
    .hex();

const LOCATION_COLOR = color(MAIN_COLOR)
    .mix(color(BCG_COLOR))
    .hex();

const box = {
    width: 15,
    height: 1.8,
    margin: 0.8,
};

const styles = {
    container: css({
        position: "relative",
        ...margin(0, "auto", rem(3.2)),
        paddingLeft: rem(box.height + box.margin * 2),
    }),
    title: css({
        width: percent(100),
        ...margin(0, "auto", rem(1)),
        fontSize: rem(2),
    }),
    details: css({
        width: percent(100),
        ...margin(0, "auto", rem(0.7)),
        fontSize: rem(1.6),
    }),
    timeContainer: css({
        ...absolute(0, "auto", "auto", rem(-1 * box.width)),
        ...size(rem(box.width), rem(box.height)),
        ...padding(0, rem(0.8)),
        fontSize: rem(1.6),
        textAlign: "right",
        transform: "rotate(-90deg)",
        transformOrigin: ["top", "right"].join(" "),
        color: TIME_COLOR,
        textTransform: "uppercase",
    }),
    location: css({
        margin: 0,
        fontSize: rem(1.4),
        color: LOCATION_COLOR,
    }),
    locationIcon: css({
        ...important(size(rem(1.2))),
    }),
};

export default ({className, title, from, to, location, details}) => {
    let $from, $to;

    $from = (
        <time dateTime={from}>
            {formatDate(from, to ? "yyyy" : undefined, to ? "yyyy" : undefined)}
        </time>
    );

    to && ($to = <time dateTime={to}>{formatDate(to, "yyyy", "yyyy")}</time>);

    return (
        <li className={className} css={styles.container}>
            <h3 css={styles.title}>{title}</h3>
            <p css={styles.details}>{details}</p>
            <div css={styles.timeContainer}>
                {$from}
                {to ? NBSP : ""}
                {to ? "-" : ""}
                {to ? NBSP : ""}
                {$to}
            </div>
            <p css={styles.location}>
                <FontAwesomeIcon
                    css={styles.locationIcon}
                    color={LOCATION_COLOR}
                    icon={"map-marker-alt"}
                />
                {NBSP} {location}
            </p>
        </li>
    );
};
