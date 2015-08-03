define([
    'app',
    'text!./aboutContent.tpl.html'
], function (app, tpl) {
    app
    .regController('aboutContentCtrl', [
        '$scope',
        '$stateParams',
        function ($scope, $stateParams) {
            var vm = this;

        }
    ]);
    return tpl;
});
