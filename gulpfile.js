var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('default', function() {
    return gulp.src('src/*.pcss')
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('dist/'));
});