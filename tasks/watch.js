var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
	livereload.listen();
    gulp.watch(
		[
	    './client/sass/bundle.scss',
	    './client/js/components/*/*.scss',
	    './client/js/components/*/*/*.scss',
	    './client/js/components/*/*/*/*.scss',
	    './client/js/shared/*/*.scss',
	    './client/js/shared/*/*/*.scss',
	    './client/js/shared/*/*/*/*.scss'	    
		]
    	, ['sass']);

    gulp.watch(
		[
		'./client/js/*.js',
		'./client/js/components/*.js',
	    './client/js/components/*/*.js',
	    './client/js/components/*/*/*.js',
	    './client/js/components/*/*/*/*.js',
	    './client/js/shared/*/*.js',
	    './client/js/shared/*/*/*.js',
	    './client/js/shared/*/*/*/*.js',
		'./client/js/components/*.html',
	    './client/js/components/*/*.html',
	    './client/js/components/*/*/*.html',
	    './client/js/components/*/*/*/*.html',
	    './client/js/shared/*/*.html',
	    './client/js/shared/*/*/*.html',
	    './client/js/shared/*/*/*/*.html'		    
		]
    	, ['scripts']);    
});