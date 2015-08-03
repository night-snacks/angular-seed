/**
 * @file aboutNav.controller.js
 * @author wujun07
 * @description [aboutNav.controller.js description]
 */
define([
    'app',
    'text!./aboutNav.tpl.html'
], function (app, tpl) {
    app
    .regController('aboutNavCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        function ($scope, $state, $stateParams) {
            var vm = this;
            vm.topicList = [{
                name: 'topic1'
            }, {
                name: 'topic2'
            }];

            vm.parentVm = $scope.$parent.vm;

            vm.goTopic = function (topicName) {
                var stateName = 'about.' + topicName;
                vm.parentVm.currentTopicName = topicName;
                $state.go(stateName);
            };
        }
    ]);
    return tpl;
});
