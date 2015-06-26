var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');
var server = require( 'gulp-develop-server' );

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
	if (argv.sync || argv.s) {
		gulp.watch(paths.source, ['build-system', browserSync.reload]).on('change', reportChange);
		gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
	 	gulp.watch(paths.style, browserSync.reload).on('change', reportChange);
	} else {
		gulp.watch(paths.source, ['build-system']).on('change', reportChange);
		gulp.watch(paths.html, ['build-html']).on('change', reportChange);
		gulp.watch(paths.serverSource, ['build-server', server.restart]).on('change', reportChange);
	}
});
