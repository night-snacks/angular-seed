define([
  'angular-mocks',
  'vm/home/home.controller'
], function () {
  describe('app.controller', function () {
    // var $controller;
    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    describe('exists', function() {
      it('should exists', function () {
        var scope = {};
        var vm = $controller('homeCtrl', {$scope: scope});
        expect(vm).toBeDefined();
      });
    });
  });
});