/**
 * @file app.js
 * @author wujun,ccx
 * app.js,定义app模块
 */
define([
    'angular',
    'angular-couch-potato',
    'vendor',
    'angular-ui-router',
    'angular-ui-bootstrap',
    'angular-toaster'
], function (angular, couchPotato) {

    // 定义angular模块
    var app = angular.module('app', [
        'scs.couch-potato',
        'yt.vendorLoader',
        'ui.router',
        'ui.bootstrap'
    ]);

    // 将app托管给couchPotato，以lazyload
    couchPotato.configureApp(app);

    // 简写
    app.regController = app.registerController;
    app.regValue = app.registerValue;
    app.regConstant = app.registerConstant;
    app.regFactory = app.registerFactory;
    app.regService = app.registerService;
    app.regFilter = app.registerFilter;
    app.regDirective = app.registerDirective;
    app.regDecorator = app.registerDecorator;
    app.regProvider = app.registerProvider;

    return app;
});
