var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// gulp.task('vendor', function(){
//   return browserify()
//       .require('backbone.marionette')
//       .require('backbone')
//       .require('lodash')
//       .require('jquery')
//     .bundle()
//     .pipe(source('vendor.js'))
//     .pipe(gulp.dest('./public/dist/js/'))
// });


gulp.task('vendor', function(){
  return browserify({
        entries: ['./client/js/vendor.js']
    })
    .bundle()
    .on('error', function(error) {
      console.log(error);
      // add pipe end!
    })
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('./client/public/dist/js/'))
    //.pipe(livereload(lr))
    //.pipe(notify({ message: 'Browserify task complete'}));
});