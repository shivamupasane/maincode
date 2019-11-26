const sass = require('node-sass');
module.exports = function (grunt) {
//configuration
    grunt.initConfig({
// pass in plug-ins and references to  files
concat : {
    js: {
        src : ['js/*js'],
        dest : 'build/app.js'
    },
    css: {
        src : ['css/*css'],
        dest : 'build/styles.css'
    }
},
sass : {
     build : {
         files : [{
             src : 'css/style.scss',
             dest: 'css/main.css'
         }]
     }
 }
    });
 // load plug-ins
 // grunt.loadNpmTasks('')
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-sass');

 //register tasks
//example tasks
 grunt.registerTask('run', function () {
     console.log('i am running');
 });
 grunt.registerTask('sleep', function () {
    console.log('i am sleeping');
});

// combination of tasks
grunt.registerTask('all', ['run', 'sleep']);

//concat task
grunt.registerTask('concat-js', ['concat:js']);
grunt.registerTask('concat-css', ['concat:css']);
grunt.registerTask('sass', ['sass']);
}