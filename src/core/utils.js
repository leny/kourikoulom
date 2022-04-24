/* leny/kourikoulom
 *
 * /src/core/utils.js - Misc utils
 *
 * coded by leny@flatLand!
 * started at 13/03/2019
 */

import {
    MQ_TABLET,
    MQ_SMALL_DESKTOP,
    MQ_MEDIUM_DESKTOP,
    MQ_LARGE_DESKTOP,
    MQ_PREFER_DARK,
    MQ_PREFER_LIGHT,
} from "./constants";

export const mq = (query, props = {}) => ({
    [`@media(${query})`]: props,
});

export const mqTablet = (props) => mq(MQ_TABLET, props);
export const mqSmallDesktop = (props) => mq(MQ_SMALL_DESKTOP, props);
export const mqMediumDesktop = (props) => mq(MQ_MEDIUM_DESKTOP, props);
export const mqLargeDesktop = (props) => mq(MQ_LARGE_DESKTOP, props);

export const mqPreferDark = (props) => mq(MQ_PREFER_DARK, props);
export const mqPreferLight = (props) => mq(MQ_PREFER_LIGHT, props);

export const varValue = (name) => `var(--${name})`;
export const varsDeclaration = (props) =>
    Object.fromEntries(
        Object.entries(props).map(([key, value]) => [`--${key}`, value]),
    );
