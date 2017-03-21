var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

gulp.task('css', function() {

    var processors = [autoprefixer, cssnext, precss];
    return gulp.src('src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/'));
});

// gulp.task('rename', function() {
//     return gulp.src('src/*.pcss')
//         .pipe(rename('template.min.css'))
//         .pipe(sourcemaps.init())
//         .pipe(sourcemaps.write('maps/'))
//         .pipe(gulp.dest("dist/"));
// });

// gulp.task('default', ['autoprefixer', 'rename']);

// // var watcher = gulp.watch('src/*.pcss', ['default']);
// // watcher.on('change', function(event) {
// //     console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// // });