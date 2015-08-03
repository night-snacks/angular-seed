/**
 * @file homeCtrl.js
 * @author wujun07
 * @description [homeCtrl.js description]
 */
define([
    'app',
    'text!./home.tpl.html'
], function (app, tpl) {
    app
    .regController('homeCtrl', [
        '$scope',
        '$state',
        '$rootScope',
        function ($scope, $state, $rootScope) {
            var vm = this;
            vm.username = '';
            vm.go = function () {
                if (vm.username) {
                    $rootScope.username = vm.username;
                    $state.go('welcome.hello', {
                        username: vm.username
                    });
                }
            };
        }
    ]);

    return tpl;
});
