/**
 * @file app.controller.js
 * @author wujun07
 * @description appCtrl 整个app的顶层控制器， 处理整个app层面的事务
 */
define([
    'app',
    'vm/common/index'
], function (app) {
    app.regController('appCtrl', [
        '$scope',
        '$rootScope',
        function ($scope, $rootScope) {

        }
    ]);
});
