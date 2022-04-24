/* leny/kourikoulom
 *
 * /src/core/constants.js - Constants & stuffs
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import color from "color";

export const NBSP = "\u00a0";

export const LIGHT = {
    BCG_COLOR: "#fff",
    MAIN_COLOR: "#000",
    FADE_COLOR: "#666",
    ALT_COLOR: "mediumblue",
    ALT_HOVER_COLOR: "dodgerblue",
    BORDER_COLOR: "#7f7f7f",
    TIME_COLOR: color("#000")
        .mix(color("mediumblue"))
        .desaturate(0.33)
        .lighten(0.85)
        .whiten(0.75)
        .hex(),
    TIME_TEXT_COLOR: color("#000").negate().hex(),
    LOCATION_COLOR: color("#000").mix(color("#fff")).hex(),
};

export const DARK = {
    BCG_COLOR: "#22272e",
    MAIN_COLOR: "#adbac7",
    FADE_COLOR: "#768390",
    ALT_COLOR: "#539bf5",
    ALT_HOVER_COLOR: "dodgerblue",
    BORDER_COLOR: "#373e47",
    TIME_COLOR: color("#adbac7").mix(color("#539bf5")).desaturate(0.66).hex(),
    TIME_TEXT_COLOR: color("#adbac7").negate().hex(),
    LOCATION_COLOR: color("#adbac7").mix(color("#22272e")).hex(),
};

export const SOURCE_SANS_PRO_STACK = `"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif`;

export const MQ_TABLET = "min-width: 640px";
export const MQ_SMALL_DESKTOP = "min-width: 960px";
export const MQ_MEDIUM_DESKTOP = "min-width: 1280px";
export const MQ_LARGE_DESKTOP = "min-width: 1520px";

export const MQ_PREFER_DARK = "prefers-color-scheme: dark";
export const MQ_PREFER_LIGHT = "prefers-color-scheme: light";

export const boxSizingReset = {
    html: {
        boxSizing: "border-box",
    },
    "*, *:before, *:after": {
        boxSizing: "inherit",
    },
    "article *, article *:before, article *:after": {
        boxSizing: "border-box",
    },
};
