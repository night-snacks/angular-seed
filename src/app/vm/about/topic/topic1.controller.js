define([
    'app',
    'text!./topic-1.tpl.html'
], function (app, tpl) {
    app
    .regController('topic1Ctrl', [
        '$scope',
        '$stateParams',
        function ($scope, $stateParams) {
            var vm = this;

        }
    ]);
    return tpl;
});
