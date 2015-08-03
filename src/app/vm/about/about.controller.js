/**
 * @file about.controller.js
 * @author wujun07
 * @description [about.controller.js description]
 */
define([
    'app',
    'text!./about.tpl.html'
], function (app, tpl) {
    app
    .regController('aboutCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        function ($scope, $state, $stateParams) {
            var vm = this;
            vm.currentTopicName = null;

            init();

            function init() {
                if (!vm.currentTopicName) {
                    $state.go('about.topicIndex');
                }
                vm.currentTopicName = null;
            }
        }
    ]);
    return tpl;
});
