module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-modernizr");

  grunt.initConfig({

    uglify: {
      js: {
        files: {
          'assets/js/script.js': [
            'assets/vendor/js/*.js',
            'assets/components/js/*.js'
          ]
        } //files
      } //js
    }, //uglify

    sass: {
      dist: {
        files: {
          'assets/css/styles.css': [
            'assets/components/sass/screen.sass'
          ]
        }, //files
        options: {
          style: 'compressed',
          loadPath: require('node-bourbon').includePaths
        } // options
      } // dist
    }, // sass

    watch: {
      options: {
        livereload: true
      },
      script: {
        files: [
          'assets/components/js/*.js',
          'assets/components/js/vendors/*.js',
        ],
        tasks: ['uglify']
      }, //script
      sass: {
        files: ['assets/components/sass/*.sass'],
        tasks: ['sass'],
        sourceMap: true
      }, //sass
      html: {
        files: ['*.html', '*.php']
      }
    },

    // run this with grunt modernizr:dist
    modernizr: {

      dist: {
        // [REQUIRED] Path to the build you're using for development.
        "devFile" : false,

        // Path to save out the built file.
        "outputFile" : "assets/components/js/modernizr.js",

        // Based on default settings on http://modernizr.com/download/
        "extra" : {
            "shiv" : true,
            "printshiv" : false,
            "load" : true,
            "mq" : true,
            "cssclasses" : true
        },

        // Based on default settings on http://modernizr.com/download/
        "extensibility" : {
            "addtest" : false,
            "prefixed" : false,
            "teststyles" : false,
            "testprops" : false,
            "testallprops" : false,
            "hasevents" : false,
            "prefixes" : false,
            "domprefixes" : false,
            "cssclassprefix": ""
        },

        // By default, source is uglified before saving
        "uglify" : true,

        // Define any tests you want to implicitly include.
        "tests" : [
          "forms-validation",
          "flexbox",
          "cssgradients"
        ],

        // By default, will crawl your project for references to Modernizr tests
        // Set to false to disable
        "crawl" : true,

        // This handler will be passed an array of all the test names passed to the Modernizr API, and will run after the API call has returned
        // "handler": function (tests) {},

        // When parseFiles = true, matchCommunityTests = true will attempt to
        // match user-contributed tests.
        "matchCommunityTests" : true,

        // Have custom Modernizr tests? Add paths to their location here.
        "customTests" : []
      }
    }
  });

  grunt.registerTask('default', ['watch']);

};