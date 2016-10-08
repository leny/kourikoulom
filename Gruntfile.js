/* eslint-disable */

"use strict"

module.exports = function( grunt ) {

    require( "matchdep" ).filterDev( "grunt-*" ).forEach( grunt.loadNpmTasks );

    grunt.initConfig( {
        // html
        "pug": {
            "options": {
                "compress": false
            },
            "page": {
                "files": {
                    "index.html": "src/pug/index.pug"
                }
            }
        },
        // CSS
        "stylus": {
            "options": {
                "compress": false,
                "use": [
                    require( "kouto-swiss" )
                ]
            },
            "styles": {
                "files": {
                    "assets/styles.css": "src/stylus/styles.styl"
                }
            }
        },
        "csso": {
            "options": {
                "report": "gzip"
            },
            "styles": {
                "files": {
                    "assets/styles.min.css": "assets/styles.css"
                }
            }
        },
        // Watch
        "watch": {
            "pug": {
                "files": [ "src/**/*.pug", "src/**/*.svg" ],
                "tasks": [ "html" ],
                "options": {
                    "livereload": true
                }
            },
            "styles": {
                "files": "src/stylus/styles.styl",
                "tasks": [ "css" ],
                "options": {
                    "livereload": true
                }
            }
        }
    } );


    grunt.registerTask( "html", [ "pug" ] );

    grunt.registerTask( "css", [
        "stylus",
        "csso"
    ] );

    grunt.registerTask( "default", [
        "html",
        "css"
    ] );

    grunt.registerTask( "work", [
        "html",
        "css",
        "watch"
    ] );
};
