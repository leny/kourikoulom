/* leny/kourikoulom
 *
 * /src/components/commons/definition-list.js - Common Definition List
 *
 * coded by leny@flatLand!
 * started at 24/02/2019
 */

import React from "react";
import {css} from "@emotion/core";
import {rem, margin} from "koutla-swiss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DescriptionParser from "./description-parser";
import {NBSP} from "../../core/constants";

const styles = {
    list: css({
        ...margin(0, "auto", rem(3.2)),
        fontSize: rem(1.6),
    }),
    title: css({
        ...margin(0, "auto", rem(0.66)),
        fontWeight: "bold",
        fontSize: rem(1.8),
    }),
    description: css({
        ...margin(0, "auto", rem(1.6)),
    }),
};

export default ({elements}) => (
    <dl css={styles.list}>
        {elements.map(({name, icon, description}) => {
            let $icon;

            icon &&
                ($icon = (
                    <>
                        <FontAwesomeIcon icon={icon} />
                        {NBSP}
                    </>
                ));

            return (
                <React.Fragment key={name}>
                    <dt css={styles.title}>
                        {$icon}
                        {name}
                    </dt>
                    <dd css={styles.description}>
                        {description.map((entry, index, arr) => (
                            <DescriptionParser
                                key={entry.text}
                                entry={entry}
                                last={index === arr.length - 1}
                            />
                        ))}
                    </dd>
                </React.Fragment>
            );
        })}
    </dl>
);
