module.exports = function(grunt) {

	grunt.initConfig({
		libinfo: {
			version: '1.1',
			repo: 'https://github.com/tikitariki/equal-height-columns',
			saved: function() {
				var d = new Date();
				return d.toUTCString();
			}()
		},
		jshint: {
			files: ['Gruntfile.js', 'equal-height-columns.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		},
		uglify: {
			options: {
				banner: '/* equal-height-columns v<%= libinfo.version %> | Build Date: <%= libinfo.saved %> | <%= libinfo.repo %> | MIT License */\n',
			},
			my_target: {
				files: {
					'equal-height-columns.<%= libinfo.version %>.min.js': 'equal-height-columns.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'uglify']);

};