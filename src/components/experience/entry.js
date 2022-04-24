/* leny/kourikoulom
 *
 * /src/components/experience/entry.js - Entry Experience Component
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {css} from "@pwops/emotion-css";
import {percent, rem} from "@pwops/core";

import {DateTime} from "luxon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NBSP} from "../../core/constants";
import {varValue} from "../../core/utils";
import Link from "../commons/link";

const formatDate = (date) =>
    DateTime.fromFormat(date, "yyyy-MM-dd", {locale: "fr"}).toFormat(
        "LLLL yyyy",
    );

const styles = {
    container: css({
        flexColumn: [],
    }),
    company: css({
        width: percent(100),
        margin: [0, "auto", rem(1)],
        fontSize: rem(2),
    }),
    details: css({
        width: percent(100),
        margin: [0, "auto", rem(0.7)],
        fontSize: rem(1.6),
    }),
    detailsContent: css({
        listStyle: "none",
        margin: 0,
        padding: 0,
    }),
    subs: css({
        relative: true,
        marginBottom: rem(0.5),
    }),
    subsIcon: css({
        absolute: true,
        top: rem(0.25),
        size: [`${rem(1.3)} !important`],
    }),
    subsContent: css({
        listStyle: "none",
        paddingLeft: rem(1.75),
    }),
    subElement: css({
        fontSize: rem(1.4),
        marginBottom: rem(0.25),
    }),
    positionIcon: css({
        size: [`${rem(1.4)} !important`],
    }),
    timeContainer: css({
        order: -1,
        flexRow: ["center", "center"],
        marginBottom: rem(1.2),
    }),
    timePeriod: css({
        display: "block",
        position: "relative",
        padding: [rem(0.2), rem(0.6)],
        background: varValue("timeColor"),
        fontSize: rem(1.2),
        color: varValue("timeTextColor"),
        textAlign: "center",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        "&::before, &::after": {
            content: `""`,
            display: "block",
            position: "absolute",
            top: percent(50),
            size: [rem(2), rem(0.1)],
            background: varValue("timeColor"),
        },
        "&::before": {left: rem(-3)},
        "&::after": {right: rem(-3)},
    }),
    location: css({
        margin: 0,
        fontSize: rem(1.4),
        color: varValue("locationColor"),
    }),
    locationIcon: css({
        size: [`${rem(1.2)} !important`],
        color: varValue("locationColor"),
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
    subs,
}) => {
    let $details,
        $subs,
        $from,
        $to = "…";

    if (subs.length) {
        $subs = (
            <div css={styles.subs}>
                <FontAwesomeIcon css={styles.subsIcon} icon={"info"} />
                <ul css={styles.subsContent}>
                    {subs.map((sub) => (
                        <li key={sub} css={styles.subElement}>
                            {sub}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    if (details.length > 1) {
        $details = (
            <ul css={styles.detailsContent}>
                {details.map((detail) => (
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
            {$subs}
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
                    icon={"map-marker-alt"}
                />
                {NBSP} {location}
            </p>
        </li>
    );
};
