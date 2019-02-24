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
export const FADE_COLOR = "#444";
export const ALT_COLOR = "#6666bf";
export const ALT_HOVER_COLOR = "#b2b2df";
export const BORDER_COLOR = "#7f7f7f";

export const SOURCE_SANS_PRO_STACK = `"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif`;

export const MQ_TABLET = "min-width: 640px";
export const MQ_SMALL_DESKTOP = "min-width: 960px";
export const MQ_MEDIUM_DESKTOP = "min-width: 1280px";
export const MQ_LARGE_DESKTOP = "min-width: 1520px";

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
