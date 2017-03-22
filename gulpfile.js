var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnext = require('postcss-cssnext');

gulp.task('css', function() {

    var processors = [cssnext];
    return gulp.src('src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/'));
});

// gulp.task('css', function () {
//     var plugins = [
//         cssnext({browsers: ['last 1 version']}),
//         opacity
//     ];
//     return gulp.src('./src/*.css')
//         .pipe(postcss(plugins))
//         .pipe(gulp.dest('./dest'));
// });

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