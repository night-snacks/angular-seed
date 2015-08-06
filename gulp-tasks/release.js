/**
 * @file release.js
 * @author wujun07
 * @description [release.js description]
 */
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var rjs = require('requirejs');
var bless = require('gulp-bless');
var rename = require('gulp-rename');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var paths = require('../config').paths;

gulp.task('release', ['rjs'], function () {

});

// r.js optimize
gulp.task('rjs', ['cleanup-release'], function (cb) {
    rjs.optimize({
        mainConfigFile: paths.build + '/app/r-config.js',
        dir: paths.release + '/app'
    }, function () {
        global.console.log('r.js done');
        cb();
    });
});

gulp.task('cleanup-release', ['bless-min'], function () {
    return gulp
            .src([
                paths.release + '/app/css/app-unblessed.min.css'
            ])
            .pipe(vinylPaths(del));
});

// bless min.css
gulp.task('bless-min', ['minify-css'], function () {
    return gulp
            .src(paths.release + '/app/css/app.min.css')
            .pipe(bless())
            .pipe(gulp.dest(paths.release + '/app/css'));
});

// minify
gulp.task('minify-css', ['clean-blessed-css'], function () {
    return gulp
            .src(paths.build + '/app/css/app-unblessed.min.css')
            .pipe(rename('app.min.css'))
            .pipe(minifycss())
            // .pipe(bless())
            .pipe(gulp.dest(paths.release + '/app/css'));
});

// clean blessed css created in task-build
gulp.task('clean-blessed-css', ['copy-build2release'], function () {
    return gulp
            .src([
                paths.release + '/app/css/*.css',
                '!' + paths.release + '/app/css/app-unblessed.min.css'
            ])
            .pipe(vinylPaths(del));
});

gulp.task('copy-build2release', ['build', 'clean-release'], function () {
    return gulp
            .src([
                paths.build + '/**'
            ])
            .pipe(gulp.dest(paths.release));
});

// clean last release
gulp.task('clean-release', function () {
    return gulp
            .src([
                paths.release
            ])
            .pipe(vinylPaths(del));
});
