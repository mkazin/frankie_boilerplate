'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
 
gulp.task('sass', function () {
  return gulp.src([
	    './client/sass/bundle.scss',
	    './client/js/components/*/*.scss',
	    './client/js/components/*/*/*.scss',
	    './client/js/components/*/*/*/*.scss',
	    './client/js/shared/*/*.scss',
	    './client/js/shared/*/*/*.scss',
	    './client/js/shared/*/*/*/*.scss'	    
	])
	.pipe(sass())
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('./client/public/dist/css'))
	.pipe(livereload());   
});