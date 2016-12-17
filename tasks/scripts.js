var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');

gulp.task('scripts', function(){
  return browserify({
        entries: ['./client/js/main.js'],
        transform: ['jstify'],
        //extensions: ['.jsx'],
        paths: ['./node_modules','./client/js/','./client/js/components', './client/js/shared']
    })
      // .external('jquery')
      // .external('lodash')
      // .external('backbone')
      // .external('backbone.marionette')
    .bundle()
    .on('error', function(error) {
      console.log(error);
      // add pipe end!
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./client/public/dist/js/'))
    .pipe(livereload());
    //.pipe(livereload(lr))
    //.pipe(notify({ message: 'Browserify task complete'}));
});