var gulp = require('gulp'),
  sass = require('gulp-ruby-sass');

gulp.task('default', function() {
  gulp.src(['example.sass'])
    .pipe(sass())
    .pipe(gulp.dest('./'))
});
