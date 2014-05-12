"use strict"

module.exports = ( grunt ) ->

  grunt.initConfig
    stylus:
      options:
        compress: no
      styles:
        files:
          "assets/styles.css": "src/stylus/styles.styl"
    jade:
      options:
        compress: no
      page:
        files:
          "index.html": "src/jade/index.jade"

  grunt.loadNpmTasks "grunt-ks-stylus"
  grunt.loadNpmTasks "grunt-contrib-jade"

  grunt.registerTask "default", [
    "jade", "stylus"
  ]
