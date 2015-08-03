/**
 * @file gulpfile.js
 * @author wujun07
 * @description 将每个 task 单独维护在 gulp_task/ 中
 */
var requireDir = require('require-dir');
var gulp = require('gulp');
// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp-tasks', {recurse: true});

gulp.task('default', ['dev-server', 'watch', 'test']);
