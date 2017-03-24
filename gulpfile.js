var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var cssnext = require('postcss-cssnext');
var rename = require("gulp-rename");
var atImport = require("postcss-import");
var cssnano = require('gulp-cssnano');
var rucksack = require('rucksack-css');
var browserSync = require('browser-sync').create();

gulp.task('css', function() {
    var processors = [cssnext, precss, atImport, cssnano, rucksack];
    return gulp.src('src/pcss/*.pcss')
        .pipe(postcss(processors))
        .pipe(rename("template.css"))
        .pipe(gulp.dest('src/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
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

//development task
gulp.task('serve', ['browserSync', 'css'], function() {
    gulp.watch('src/pcss/*.pcss', ['css']);
    gulp.watch('src/*.html', browserSync.reload);
});

//final dist task
//Todo
//clean
//fonts copy
//img optimize 
//css compress and js