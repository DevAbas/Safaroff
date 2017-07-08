var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect');

var env,
    htmlSources,
    sassSources,
    jsSources,
    outputDir;

env = process.env.NODE_ENV || 'development';

if(env === 'development') {
  outputDir = 'builds/development/';
} else {
  outputDir = 'builds/production/';
}

htmlSources = outputDir + '*.html';
sassSources = 'components/scss/style.scss';
jsSources = 'components/scripts/*.js';

gulp.task('concat', function() {
  gulp.src(jsSources)
    .pipe(concat('scripts.js'))
    .pipe(gulpif(env === 'production',uglify()))
    .pipe(gulp.dest(outputDir + 'js'))
    .pipe(connect.reload())
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/scss',
      image: outputDir + 'images',
      style: 'expanded'
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(outputDir + 'css'))
    .pipe(connect.reload())
});

gulp.task('connect', function() {
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src(htmlSources)
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['concat']);
  gulp.watch('components/scss/*.scss', ['compass']);
  gulp.watch(htmlSources, ['html'])
});

gulp.task('default', ['concat', 'compass', 'watch', 'html', 'connect']);
