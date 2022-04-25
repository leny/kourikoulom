/* leny/kourikoulom
 *
 * /src/components/header/color-scheme-switcher.js - ColorSchemeSwitcher Component
 *
 * coded by leny@flatLand!
 * started at 25/04/2022
 */

import React, {useCallback, useState, useEffect, useMemo} from "react";
import {css} from "@pwops/emotion-css";
import {rem} from "@pwops/core";
import {mqTablet} from "../../core/utils";
import {varValue} from "../../core/utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import withTooltip, {styles as tooltipStyles} from "../../core/with-tooltip";

const styles = {
    container: css({
        marginBottom: rem(4.8),
        paddingTop: rem(1.25),
        borderTop: [rem(0.1), "solid", varValue("borderColor")],
        textAlign: "center",
        ...mqTablet({
            textAlign: "right",
            marginBottom: rem(2.4),
        }),
    }),
    link: css({
        position: "relative",
        textDecoration: "none",
        ...tooltipStyles,
    }),
    icon: css({
        display: "inline",
        size: [`${rem(1.6)} !important`],
        marginRight: rem(0.8),
        verticalAlign: rem(-0.3),
        ...mqTablet({
            marginRight: 0,
            verticalAlign: 0,
        }),
    }),
    label: css({
        fontSize: rem(1.4),
        ...mqTablet({display: "none"}),
    }),
};

export default () => {
    const colorSchemeQuery = useMemo(
        () => window.matchMedia("(prefers-color-scheme: dark)"),
        [],
    );

    const [colorScheme, setColorScheme] = useState(
        colorSchemeQuery?.matches ? "dark" : "light",
    );

    const handleChangeColorScheme = useCallback((scheme) => {
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.toggle("light");
        setColorScheme(scheme);
    }, []);

    const handleChangeSystemColorScheme = useCallback((e) => {
        handleChangeColorScheme(e.matches ? "dark" : "light");
    }, []);

    const handleSwitchColorScheme = useCallback(
        (e) => {
            e.preventDefault();
            handleChangeColorScheme(colorScheme === "dark" ? "light" : "dark");
        },
        [colorScheme],
    );

    useEffect(() => {
        document.documentElement.classList.add(colorScheme);
        colorSchemeQuery.addEventListener(
            "change",
            handleChangeSystemColorScheme,
        );
    }, []);

    return (
        <div css={styles.container}>
            <a
                href={"#"}
                css={styles.link}
                {...withTooltip(
                    `Passer en mode ${
                        colorScheme === "dark" ? "clair" : "sombre"
                    }`,
                )}
                onClick={handleSwitchColorScheme}>
                <FontAwesomeIcon
                    css={styles.icon}
                    icon={["fas", colorScheme === "dark" ? "sun" : "moon"]}
                />
                <span css={styles.label}>{`Passer en mode ${
                    colorScheme === "dark" ? "clair" : "sombre"
                }`}</span>
            </a>
        </div>
    );
};
