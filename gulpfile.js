var browserify = require('browserify')
var gulp = require('gulp')
var path = require('path')
var uglify = require('gulp-uglify')
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');

gulp.task('js', function () {
  return browserify('./src/main.js')
  .bundle()
  .pipe(source('main.js'))
  .pipe(streamify(uglify()))
  .pipe(gulp.dest('./dist'))
})

gulp.task('static', function () {
  return gulp.src('./static/*')
  .pipe(gulp.dest('./dist'))
})

gulp.task('build', ['js', 'static'])

gulp.task('default', ['build'])
