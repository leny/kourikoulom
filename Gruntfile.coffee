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
    watch:
      jade:
        files: "src/jade/index.jade"
        tasks: [ "jade" ]
        options:
          livereload: yes
      styles:
        files: "src/stylus/styles.styl"
        tasks: [ "stylus" ]
        options:
          livereload: yes

  grunt.loadNpmTasks "grunt-ks-stylus"
  grunt.loadNpmTasks "grunt-contrib-jade"
  grunt.loadNpmTasks "grunt-contrib-watch"

  grunt.registerTask "default", [
    "jade"
    "stylus"
  ]

  grunt.registerTask "work", [
    "jade"
    "stylus"
    "watch"
  ]
