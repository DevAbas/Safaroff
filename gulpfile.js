var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    w3cjs = require('gulp-w3cjs'),
    connect = require('gulp-connect');

var env,
    htmlSources,
    sassSources,
    jsSources,
    fontSources,
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
fontSources = 'components/fonts/**/*.*';

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
  gulp.src('builds/development/*.html')
    .pipe(gulpif(env === 'production', minifyHTML()))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe(connect.reload())
});

gulp.task('images', function() {
  gulp.src('builds/development/images/**')
    .pipe(gulpif(env === 'production', imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }]
    })))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir + 'images')))
    .pipe(connect.reload())
});

gulp.task('font', function() {
  gulp.src(fontSources)
   .pipe(connect.reload())
});

gulp.task('w3cjs', function () {
    gulp.src(htmlSources)
        .pipe(w3cjs())
        .pipe(w3cjs.reporter());
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['concat']);
  gulp.watch('components/scss/*.scss', ['compass']);
  gulp.watch('builds/development/*.html', ['html','w3cjs']);
  gulp.watch(fontSources, ['font']);
  gulp.watch('builds/development/images/**',['images'])
});

gulp.task('default', ['concat', 'compass', 'watch', 'html', 'images', 'connect', 'w3cjs', 'font']);
