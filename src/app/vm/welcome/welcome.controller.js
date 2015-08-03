define([
    'app',
    'text!vm/welcome/welcome.tpl.html'
], function (app, tpl) {
    app.regController('welcomeCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        '$rootScope',
        function ($scope, $state, $stateParams, $rootScope) {
            var vm = this;

            vm.goAbout = function () {
                $state.go('about');
            };

            init();
            function init() {
                if (!$stateParams.username && $rootScope.username) {
                    var username = $rootScope.username
                    $state.go('welcome.hello', {username: username});
                }
            }
        }
    ]);
    return tpl;
});
