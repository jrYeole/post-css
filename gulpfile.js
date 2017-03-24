var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var cssnext = require('postcss-cssnext');
var rename = require("gulp-rename");
var atImport = require("postcss-import");
var cssnano = require('gulp-cssnano');
var rucksack = require('rucksack-css');

gulp.task('css', function() {
    var processors = [cssnext, precss, atImport, cssnano, rucksack];
    return gulp.src('src/pcss/*.pcss')
        .pipe(postcss(processors))
        .pipe(rename("template.css"))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('minify', function() {
    return gulp.src('dist/css/*.css')
        .pipe(rename("template.min.css"))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('copy', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['css', 'minify', 'copy']);