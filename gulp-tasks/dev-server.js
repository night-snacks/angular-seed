/**
 * @file dev-server.js
 * @author wujun07
 * @description 用nodemon跑bird-server
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev-server', function () {
    nodemon({
        script: 'bird-server.js',
        ext: 'js',
        watch: ['bird-server.js']
    });
});
