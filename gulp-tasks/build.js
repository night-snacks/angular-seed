/**
 * @file build.js
 * @author wujun07
 * @description [build.js description]
 */
var gulp = require('gulp');
// var minifycss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var less = require('gulp-less');
var gulpif = require('gulp-if');
var sprite = require('css-sprite').stream;
var bless = require('gulp-bless');
var rename = require('gulp-rename');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var paths = require('../config').paths;

gulp.task('build', ['cleanup', 'copy-vendor', 'copy-fonts']);

// cleanup less and temp css
gulp.task('cleanup', ['bless'], function () {
    return gulp
            .src([
                paths.build + '/app/**/*.less',
                paths.build + '/app/css/temp'
            ])
            .pipe(vinylPaths(del));
});

// splits CSS files suitably for Internet Explorer < 10
gulp.task('bless', ['concat-css'], function () {
    return gulp
            .src(paths.build + '/app/css/app-unblessed.min.css')
            .pipe(rename('app.min.css'))
            .pipe(bless())
            .pipe(gulp.dest(paths.build + '/app/css'));
});

gulp.task('concat-css', ['copy-src'], function () {
    return gulp
            .src([
                paths.vendor + '/bootstrap/dist/css/bootstrap.css',
                paths.vendor + '/toaster/toaster.css',
                paths.build + '/app/css/temp/**/*.css'
            ])
            .pipe(concatCss('app-unblessed.min.css', {rebaseUrls: false}))
            .pipe(gulp.dest(paths.build + '/app/css'));
});

gulp.task('copy-src', ['less'], function () {
    return gulp
            .src(paths.src + '/**')
            .pipe(gulp.dest(paths.build));
});

// less -> css
gulp.task('less', ['sprites', 'clean-build'], function () {
    return gulp
            .src(paths.src + '/app/**/*.less')
            .pipe(less())
            .pipe(gulp.dest(paths.build + '/app/css/temp'));

});

// create sprites
gulp.task('sprites', function () {
    return gulp
            .src(paths.src + '/app/img/sprites/*.png')
            .pipe(sprite({
                name: 'sprite',
                cssPath: paths.src + '/app/img/',
                style: 'sprite.less',
                processor: 'less',
                prefix: 'sprite',
                template: paths.src + '/app/less/sprite.mustache'
            }))
            .pipe(gulpif('*.png', gulp.dest(paths.src + '/app/img'), gulp.dest(paths.src + '/app/less')));
});

gulp.task('copy', ['copy-vendor', 'copy-fonts']);

gulp.task('copy-vendor', ['clean-build'], function () {
    return gulp
            .src(paths.vendor + '/**')
            .pipe(gulp.dest(paths.build + '/vendor'));
});

gulp.task('copy-fonts', ['clean-build'], function () {
    return gulp
            .src([
                paths.vendor + '/bootstrap/dist/fonts/*'
            ])
            .pipe(gulp.dest(paths.build + '/app/fonts'));
});

// clean last build
gulp.task('clean-build', function () {
    return gulp
            .src([
                paths.build
            ])
            .pipe(vinylPaths(del));
});
