/* leny/kourikoulom
 *
 * /src/components/head/share-card.js - ShareCard Component
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

import React from "react";
import {Helmet} from "react-helmet";

export default ({type, values}) => (
    <Helmet>
        {Object.entries(values).map(([key, value]) => (
            <meta key={key} property={`${type}:${key}`} content={value} />
        ))}
    </Helmet>
);
