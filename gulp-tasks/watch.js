/**
 * @file watch.js
 * @author wujun07
 * @description [watch.js description]
 */
var gulp = require('gulp');
var paths = require('../config').paths;

gulp.task('watch', function () {
    var watcher = gulp.watch(paths.src + '/**', ['build']);
    watcher.on('change', function (file) {
        setTimeout(function () {
            // server.changed(file.path);
        }, 1000);
    });
});
