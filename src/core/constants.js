/* leny/kourikoulom
 *
 * /src/core/constants.js - Constants & stuffs
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

export const NBSP = "\u00a0";

export const BCG_COLOR = "#fff";
export const MAIN_COLOR = "#000";
export const FADE_COLOR = "#666";
export const ALT_COLOR = "mediumblue";
export const ALT_HOVER_COLOR = "dodgerblue";
export const BORDER_COLOR = "#7f7f7f";

export const LIGHT = {
    BCG_COLOR,
    MAIN_COLOR,
    FADE_COLOR,
    ALT_COLOR,
    ALT_HOVER_COLOR,
    BORDER_COLOR,
};

export const DARK = {
    BCG_COLOR,
    MAIN_COLOR,
    FADE_COLOR,
    ALT_COLOR,
    ALT_HOVER_COLOR,
    BORDER_COLOR,
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
