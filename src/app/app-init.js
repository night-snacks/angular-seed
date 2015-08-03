/**
 * @file app-init.js
 * @author wujun07
 * app的配置
 * 1.http请求的头部设定
 * 2.couchpatato设定
 */
define([
    'app',
    'routes',
    'app-http-interceptor',
    'app.controller',
], function (app) {

    /**
     * 通常定义全局的service，如登录用户、外部环境等
     * @description 可以针对dev和真实环境做hack处理
     * @example
     */
    // get context
    if (window.PROJ_ENV) {
        app.constant('APP_CONTEXT', window.PROJ_ENV.APP_CONTEXT + '/');
        app.constant('STATIC_DIR', window.PROJ_ENV.STATIC_DIR + '/resources/');
        app.constant('CURRENT_USER_NAME', window.PROJ_ENV.CURRENT_USER_NAME);
    }
    else {
        // for dev
        app.constant('APP_CONTEXT', 'project-name/');
        app.constant('STATIC_DIR', './');
        app.constant('CURRENT_USER_NAME', '');
    }

    app.config(['routesProvider', '$httpProvider',
        function(routesProvider, $httpProvider ) {

            //GET header config
            $httpProvider.defaults.headers.get = $httpProvider.defaults.headers.get || {};
            $httpProvider.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
            $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';

            //POST header config
            $httpProvider.defaults.headers.post = {
                'Content-Type' : 'application/json; charset=UTF-8',
                'X-Requested-With':'XMLHttpRequest'
            };
        }
    ]);

    app.run(['$couchPotato', '$state', '$stateParams', '$rootScope',
        function($couchPotato, $state, $stateParams, $rootScope) {

            // no lazy if unit testing
            if (!window.__karma__) {
            // by assigning the couchPotato service to the lazy property, we
            // the register functions will know to run-time-register components
            // instead of config-time-registering them.
                app.lazy = $couchPotato;
            }

            // angular-ui-project recommends assigning these services to the root
            // scope.  Others have argued that doing so can lead to obscured
            // dependencies and that making services directly available to html and
            // directives is unclean.  In any case, the ui-router demo assumes these
            // are available in the DOM, therefore they should be on $rootScope.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);

});