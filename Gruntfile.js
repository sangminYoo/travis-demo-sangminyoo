module.exports = function(grunt) {

// load all grunt tasks
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.initConfig({
	jshint: {
    	all: ['Gruntfile.js', 'js/script.js']
    },
    compass: {                  // Task
	    dist: {                   // Target
	    	options: { 
	        	sassDir: 'sass/style.scss',
	        	cssDir: 'css/style.css',
	        	debugInfo : true,
	        	trace: true,
	        	environment: 'production'
	      	}
	    }/*,
	    dev: {                    // Another target
	      	options: {
	        	sassDir: 'sass',
	        	cssDir: 'css'
	      	}
	    }*/
  	}
});

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint', 'compass']);

};