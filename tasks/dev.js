var gulp = require('gulp');
var runSequence = require('run-sequence');
 
// This will run in this order: 
// * build-clean 
// * build-scripts and build-styles in parallel 
// * build-html 
// * Finally call the callback function 
gulp.task('dev', function(callback) {
  runSequence(['watch', 'server'], callback);
});
 