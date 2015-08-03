/**
 * @file headerCtrl.js
 * @author wujun07
 * @description [headerCtrl.js description]
 */
define([
    'app',
    'text!./header.tpl.html'
], function (app, tpl) {
    app.regController('headerCtrl', [
        '$scope',
        function ($scope) {

        }
    ]);

    return tpl;
});
