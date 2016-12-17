var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('server', function () {
  nodemon({
    script: './server/index.js',
    ignore: ['./client'],
    env: { 'NODE_ENV': 'development' }
  })
})