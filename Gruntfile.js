module.exports = function(grunt) {

// load all grunt tasks
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.initConfig({
	jshint: {
    	all: ['Gruntfile.js', 'src/js/script.js']
    },
    compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'src/css',
					environment: 'production',
					relativeAssets: true,
                	boring: false,
                	debugInfo: true
				},
				files: {
	                'src/css/style.css': 'sass/style.scss'
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