/**
 * @file release.js
 * @author wujun07
 * @description [release.js description]
 */
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var rjs = require('requirejs');
var rimraf = require('gulp-rimraf');
var bless = require('gulp-bless');
var rename = require("gulp-rename");

var paths = require('../config').paths;

gulp.task('release', ['rjs'], function () {

});

// r.js optimize
gulp.task('rjs', ['cleanup-release'], function (cb) {
    rjs.optimize({
        mainConfigFile: paths.build + '/app/main-r.js',
        dir: paths.release + '/app'
    }, function () {
        global.console.log('r.js done');
        cb();
    });
});

gulp.task('cleanup-release', ['bless-min'], function () {
    var stream = gulp
                    .src([
                        paths.release + '/app/css/app-unblessed.min.css'
                    ], {read: false})
                    .pipe(rimraf({force: true}));

    return stream;
});

// bless min.css
gulp.task('bless-min', ['minify-css'], function () {
    var stream = gulp
            .src(paths.release + '/app/css/app.min.css')
            .pipe(bless())
            .pipe(gulp.dest(paths.release + '/app/css'));

    return stream;
});

// minify
gulp.task('minify-css', ['clean-blessed-css'], function () {
    var stream = gulp
            .src(paths.build + '/app/css/app-unblessed.min.css')
            .pipe(rename('app.min.css'))
            .pipe(minifycss())
            // .pipe(bless())
            .pipe(gulp.dest(paths.release + '/app/css'));

    return stream;
});

// clean blessed css created in task-build
gulp.task('clean-blessed-css', ['copy-build2release'], function () {
    var stream = gulp
            .src([
                paths.release + '/app/css/*.css',
                '!' + paths.release + '/app/css/app-unblessed.min.css'
            ], {read: false})
            .pipe(rimraf({force: true}));
    return stream;
});

gulp.task('copy-build2release', ['build', 'clean-release'], function () {
    var stream = gulp
                    .src([
                        paths.build + '/**'
                    ])
                    .pipe(gulp.dest(paths.release));
    return stream;
});

// clean last release
gulp.task('clean-release', function () {
    var stream = gulp
                    .src(paths.release, {read: false})
                    .pipe(rimraf({force: true}));
    return stream;
});
