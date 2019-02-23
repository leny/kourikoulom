/* leny/kourikoulom
 *
 * /src/core/constants.js - Constants & stuffs
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import {percent} from "koutla-swiss";

export const NBSP = "\u00a0";

export const BCG_COLOR = "#fff";
export const MAIN_COLOR = "#000";
export const FADE_COLOR = "#444";
export const ALT_COLOR = "#6666bf";
export const ALT_HOVER_COLOR = "#b2b2df";
export const BORDER_COLOR = "#7f7f7f";

export const SOURCE_SANS_PRO_STACK = `"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif`;

export const meyerReset = {
    "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
        margin: 0,
        padding: 0,
        border: 0,
        fontSize: percent(100),
        font: "inherit",
        verticalAlign: "baseline",
    },
    "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section": {
        display: "block",
    },
    body: {
        lineHeight: 1,
    },
    "ol, ul": {
        listStyle: "none",
    },
    "blockquote, q": {
        quotes: "none",
        ":before,:after": {
            content: "none",
        },
    },
    table: {
        borderCollapse: "collapse",
        borderSpacing: 0,
    },
};

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
