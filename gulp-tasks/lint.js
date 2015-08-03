/**
 * @file lint.js
 * @author wujun07
 * @description [lint.js description]
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var paths = require('../config').paths;

gulp.task('lint', function () {
    var opt = {
        // bitwise: false, // 禁止位运算
        expr: true, // 允许短路 a && b();
        curly: true,
        immed: true,
        noarg: true, // 禁止使用arguments.caller and arguments.callee
        sub: true, // 允许使用 $scope['name'] ,而不仅仅$scope.name
        eqnull: true, // 允许使用 == null
        trailing: true
        // eqeqeq: true // 允许使用== 和 !=
    };
    var stream = gulp
                    .src(paths.src + '/app/**/*.js')
                    .pipe(jshint(opt))
                    .pipe(jshint.reporter(stylish));

    return stream;
});
