/**
 * @file vendorLoader.js
 * @author wujun07
 * @description [vendorLoader.js description]
 */

define(['angular'], function () {

    // Make module Foo and store $controllerProvider in a global
    var providers = null;
    angular.module('yt.vendorLoader', [], [
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        '$injector',
        '$animateProvider',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide, $injector, $animateProvider) {
            if (!providers) {

                providers = {
                    $controllerProvider: $controllerProvider,
                    $compileProvider: $compileProvider,
                    $filterProvider: $filterProvider,
                    $provide: $provide,
                    $injector: $injector,
                    $animateProvider: $animateProvider
                };
            }
        }
    ]);

    return {
        load: load
    };

    function load(name, req, onload, config) {
        var normalized = normalize(name);
        var moduleName = normalized.moduleName;
        var pathName = normalized.pathName;
        if (!pathName) {
            return;
        }
        // req has the same API as require().
        req([pathName], function (value) {

            var injector = angular.element(document.body).injector();
            var module = angular.module(moduleName);
            var invokeQueue = module._invokeQueue;

            try {
                // invoke whatever in invoke queue
                angular.forEach(invokeQueue, function (invokeItem) {
                    var provider = providers[invokeItem[0]];

                    provider[invokeItem[1]].apply(provider, invokeItem[2]);
                });
            }
            catch(e) {
                console.log(e);
            }
            onload(value);
        });

    }

    function normalize(name) {
        var splitted = name.split(':');
        if (splitted.length === 1) {
            return {
                moduleName: name,
                pathName: name
            };
        }
        else if (splitted.length === 2) {
            return {
                moduleName: splitted[1],
                pathName: splitted[0]
            };
        }
        return {};
    }
});
