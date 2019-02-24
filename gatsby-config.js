/* leny/kourikoulom
 *
 * /gatsby-config.js - Gatsby main configuration file
 *
 * coded by leny@flatLand!
 * started at 23/02/2019
 */

module.exports = {
    plugins: [
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data/`,
            },
        },
        {
            resolve: `gatsby-plugin-emotion`,
        },
    ],
};
