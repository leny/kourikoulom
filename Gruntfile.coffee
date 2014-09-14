"use strict"

module.exports = ( grunt ) ->

  require( "matchdep" ).filterDev( "grunt-*" ).forEach grunt.loadNpmTasks

  grunt.initConfig
    # html
    jade:
      options:
        compress: no
      page:
        files:
          "index.html": "src/jade/index.jade"
    # CSS
    stylus:
      options:
        compress: no
        use: [
          require "kouto-swiss"
        ]
      styles:
        files:
          "assets/unclean.css": "src/stylus/styles.styl"
    colorguard:
      styles:
        src: [ "assets/unclean.css" ]
    csslint:
      options:
        "box-model": no
        "compatible-vendor-prefixes": no
        "qualified-headings": no
        "unique-headings": no
        "duplicate-background-images": no
        "known-properties": no
      styles:
        files:
          src: [ "assets/unclean.css" ]
    uncss:
      options:
        stylesheets: [ "assets/unclean.css" ]
      styles:
        files:
          "assets/styles.css": [ "index.html" ]
    csso:
      options:
        report: "gzip"
      styles:
        files:
          "assets/styles.min.css": "assets/styles.css"
    # Perfs

    # Watch
    watch:
      jade:
        files: "src/jade/index.jade"
        tasks: [ "html" ]
        options:
          livereload: yes
      styles:
        files: "src/stylus/styles.styl"
        tasks: [ "css" ]
        options:
          livereload: yes

  grunt.registerTask "html", [ "jade" ]

  grunt.registerTask "css", [
    "stylus"
    "colorguard"
    "csslint"
    "uncss"
    "csso"
  ]

  grunt.registerTask "default", [
    "html"
    "css"
  ]

  grunt.registerTask "work", [
    "jade"
    "css"
    "watch"
  ]
