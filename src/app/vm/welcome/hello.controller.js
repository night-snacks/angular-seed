define([
    'app',
    'text!./hello.tpl.html'
], function (app, tpl) {
    app.regController('helloCtrl', [
        '$scope',
        '$stateParams',
        function ($scope, $stateParams) {
            var vm = this;
            vm.username = $stateParams.username;

        }
    ]);
    return tpl;
});
