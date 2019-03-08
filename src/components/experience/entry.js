/* leny/kourikoulom
 *
 * /src/components/experience/entry.js - Entry Experience Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {
    flexrow,
    flexcolumn,
    percent,
    rem,
    margin,
    padding,
    size,
    important,
} from "koutla-swiss";

import {DateTime} from "luxon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NBSP, MAIN_COLOR, BCG_COLOR, ALT_COLOR} from "../../core/constants";
import color from "color";
import Link from "../commons/link";

const formatDate = date =>
    DateTime.fromFormat(date, "yyyy-MM-dd", {locale: "fr"}).toFormat(
        "LLLL yyyy",
    );

const TIME_COLOR = color(MAIN_COLOR)
    .mix(color(ALT_COLOR))
    .desaturate(0.33)
    .lighten(0.85)
    .whiten(0.75)
    .hex();

const LOCATION_COLOR = color(MAIN_COLOR)
    .mix(color(BCG_COLOR))
    .hex();

const styles = {
    container: css({
        ...flexcolumn(),
    }),
    company: css({
        width: percent(100),
        ...margin(0, "auto", rem(1)),
        fontSize: rem(2),
    }),
    details: css({
        width: percent(100),
        ...margin(0, "auto", rem(0.7)),
        fontSize: rem(1.6),
    }),
    detailsContent: css({
        listStyle: "none",
        margin: 0,
        padding: 0,
    }),
    positionIcon: css({
        ...important(size(rem(1.4))),
    }),
    timeContainer: css({
        order: -1,
        ...flexrow("center", "center"),
        marginBottom: rem(1.2),
    }),
    timePeriod: css({
        display: "block",
        position: "relative",
        ...padding(rem(0.2), rem(0.6)),
        background: TIME_COLOR,
        fontSize: rem(1.2),
        color: color(MAIN_COLOR)
            .negate()
            .hex(),
        textAlign: "center",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        "&::before, &::after": {
            content: `""`,
            display: "block",
            position: "absolute",
            top: percent(50),
            ...size(rem(2), rem(0.1)),
            background: TIME_COLOR,
        },
        "&::before": {left: rem(-3)},
        "&::after": {right: rem(-3)},
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

export default ({
    className,
    company,
    url,
    position,
    from,
    to,
    location,
    details,
}) => {
    let $details,
        $from,
        $to = "…";

    if (details.length > 1) {
        $details = (
            <ul css={styles.detailsContent}>
                {details.map(detail => (
                    <li key={detail}>{detail}</li>
                ))}
            </ul>
        );
    } else {
        $details = <p css={styles.detailsContent}>{details[0]}</p>;
    }

    $from = <time dateTime={from}>{formatDate(from)}</time>;

    to && ($to = <time dateTime={to}>{formatDate(to)}</time>);

    return (
        <li className={className} css={styles.container}>
            <h3 css={styles.company}>
                <Link url={url}>{company}</Link>
            </h3>
            <div css={styles.details}>
                <strong>
                    <FontAwesomeIcon
                        css={styles.positionIcon}
                        icon={"user-circle"}
                    />
                    {NBSP} {position}
                </strong>
                {$details}
            </div>
            <div css={styles.timeContainer}>
                <span css={styles.timePeriod}>
                    {$from}
                    {NBSP}
                    {"-"}
                    {NBSP}
                    {$to}
                </span>
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
