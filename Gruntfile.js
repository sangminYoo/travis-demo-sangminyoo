module.exports = function(grunt) {

// load all grunt tasks
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.initConfig({
	jshint: {
    	all: ['Gruntfile.js', 'js/script.js']
    },
    compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css',
					environment: 'production',
					relativeAssets: true,
                	boring: false,
                	debugInfo: true
				},
				files: {
	                'css/style.css': 'sass/style.scss'
	            }
			}
		},
	watch: {
		css: {
			files: '**/*.scss',
			tasks: ['compass']
		}
	}
});

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jshint', 'compass']);

};