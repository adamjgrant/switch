var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  connect = require('gulp-connect');

gulp.task('default', ['connect'], function() {
  gulp.src(['example.sass'])
    .pipe(sass())
    .pipe(gulp.dest('./'))
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  })
})
