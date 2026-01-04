/**
 * Core constants - colors, media queries, fonts
 */

export const IS_BROWSER = typeof window !== "undefined";

export const NBSP = "\u00a0";

// Light theme colors
export const LIGHT = {
    BCG_COLOR: "#fff",
    MAIN_COLOR: "#000",
    FADE_COLOR: "#666",
    ALT_COLOR: "mediumblue",
    ALT_HOVER_COLOR: "dodgerblue",
    BORDER_COLOR: "#7f7f7f",
    // Pre-calculated from: color("#000").mix(color("mediumblue")).desaturate(0.33).lighten(0.85).whiten(0.75).hex()
    TIME_COLOR: "#c5c5d5",
    // Pre-calculated from: color("#000").negate().hex()
    TIME_TEXT_COLOR: "#ffffff",
    // Pre-calculated from: color("#000").mix(color("#fff")).hex()
    LOCATION_COLOR: "#808080",
};

// Dark theme colors
export const DARK = {
    BCG_COLOR: "#22272e",
    MAIN_COLOR: "#adbac7",
    FADE_COLOR: "#768390",
    ALT_COLOR: "#539bf5",
    ALT_HOVER_COLOR: "dodgerblue",
    BORDER_COLOR: "#373e47",
    // Pre-calculated from: color("#adbac7").mix(color("#539bf5")).desaturate(0.66).hex()
    TIME_COLOR: "#8da7b8",
    // Pre-calculated from: color("#adbac7").negate().hex()
    TIME_TEXT_COLOR: "#524538",
    // Pre-calculated from: color("#adbac7").mix(color("#22272e")).hex()
    LOCATION_COLOR: "#6891a9",
};

// Font stack
export const SOURCE_SANS_PRO_STACK = `"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif`;

// Media query breakpoints
export const MQ_TABLET = "(min-width: 640px)";
export const MQ_SMALL_DESKTOP = "(min-width: 960px)";
export const MQ_MEDIUM_DESKTOP = "(min-width: 1280px)";
export const MQ_LARGE_DESKTOP = "(min-width: 1520px)";

export const MQ_PREFER_DARK = "(prefers-color-scheme: dark)";
export const MQ_PREFER_LIGHT = "(prefers-color-scheme: light)";
