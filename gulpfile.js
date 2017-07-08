var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass');

var sassSources = 'components/scss/style.scss';
var jsSources = 'components/scripts/*.js';

gulp.task('concat', function() {
  gulp.src(jsSources)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/scss',
      image: 'builds/development',
      style: 'expanded'
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('builds/development/css'))
});
