var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var cssnext = require('postcss-cssnext');
var rename = require("gulp-rename");

gulp.task('css', function() {

    var processors = [cssnext, precss];
    return gulp.src('src/*.pcss')
        .pipe(postcss(processors))
        .pipe(rename("template.css"))
        .pipe(gulp.dest('dist/'));
});