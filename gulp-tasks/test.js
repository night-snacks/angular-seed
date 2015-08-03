/**
 * @file test.js
 * @author wujun07
 * @description [test.js description]
 */
var gulp = require('gulp');
var karma = require('gulp-karma');
gulp.task('test', function () {
    // Be sure to return the stream
    return gulp.src(['undefined.js'])
    .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'watch'
    }))
    .on('error', function(err) {
       this.emit('end');
    });
});
