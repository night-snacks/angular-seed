define([
    'app',
    'text!./topic-1.tpl.html',
    'vendor!angular-toaster:toaster',
    'filter/percentage'
], function (app, tpl) {
    app
    .regController('topic1Ctrl', [
        '$scope',
        '$stateParams',
        '$filter',
        'toaster',
        function ($scope, $stateParams, $filter, toaster) {
            var vm = this;
            vm.per = 0.7;

            vm.pop = function () {
                toaster.pop('success', $filter('percentage')(vm.per));
            };

        }
    ]);
    return tpl;
});
