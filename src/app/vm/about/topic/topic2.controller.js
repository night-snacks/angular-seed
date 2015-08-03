define([
    'app',
    'text!./topic-2.tpl.html'
], function (app, tpl) {
    app
    .regController('topic2Ctrl', [
        '$scope',
        '$stateParams',
        function ($scope, $stateParams) {
            var vm = this;

        }
    ]);
    return tpl;
});
