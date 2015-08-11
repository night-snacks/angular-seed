/**
 * @file main.js
 * @author wujun07
 * @description main.js 入口
 */

var baseUrl = './resources/app';
// prod
if (window.PROJCT_NAME) {

}
// dev
else {
    baseUrl = './app';
}

window.buildNumber = '0.0.1';

// requirejs config
var configObj = {
    waitSeconds: 0,
    urlArgs: 'v=' + window.buildNumber,
    baseUrl: baseUrl,
    paths: {
        'text': '../vendor/requirejs-text/text',
        'css': '../vendor/require-css/css',
        'vendor': 'vendor-loader',
        'angular': '../vendor/angular/angular',
        'angular-couch-potato': '../vendor/angular-couch-potato/dist/angular-couch-potato',
        'angular-deferred-bootstrap': 'vendor/angular-deferred-bootstrap/angular-deferred-bootstrap',
        'angular-ui-router': '../vendor/ui-router/release/angular-ui-router',
        'angular-ui-bootstrap': '../vendor/angular-ui-bootstrap-bower/ui-bootstrap-tpls',
        'angular-loading-bar': '../vendor/angular-loading-bar/build/loading-bar',
        'angular-toaster': '../vendor/toaster/toaster'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-deferred-bootstrap': {
            deps: ['angular'],
            exports: 'deferredBootstrap'
        },
        'angular-couch-potato': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-ui-bootstrap': {
            deps: ['angular']
        },
        'angular-loading-bar': {
            deps: ['angular']
        },
        'angular-toaster': {
            deps: ['angular']
        },
        'vendor': {
            deps: ['angular']
        }
    }
};
require.config(configObj);

// 加载angular, app 并启动
require(['app', 'angular', 'app-init'], function (app, angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, [app.name, function () {
            angular.element(document).find('html').addClass('ng-app');
        }]);
    });
});

// 需要等带一些异步请求结束再bootstrap的情况用angular-deferred-bootstrap
// require(['app', 'angular', 'angular-deferred-bootstrap', 'app-init' ], function(app, angular, deferredBootstrap) {
//   /**
//    * actrual bootstrap
//    */
//   function doBootstrap () {
//     angular.element(document).ready(function () {
//       angular.bootstrap(document, [app.name, function () {
//         angular.element(document).find('html').addClass('ng-app');
//       }]);
//     });
//   }

//   var appContext;
//   var i18nPath;

//   // prod or dev
//   // 应根据实际项目定义,
//   try {
//     // if dev, `window.PROJCT_NAME` will be undefined, it will throw an error
//     appContext = window.PROJCT_NAME.constants.APP_CONTEXT;
//     i18nPath = '/project-name/resources/app/_i18n/';
//   } catch (e) {
//     // for dev
//     appContext = '/project-name/';
//     i18nPath = '/app/_i18n/';
//   }

//   // bootstrap after all resolved
//   deferredBootstrapper.bootstrap({
//     element: document.body,
//     module: app['name'],
//     resolve: {
//       'APP_CONTEXT': ['$q', '$timeout', function ($q, $timeout) {
//         var deferred = $q.defer();
//         $timeout(function () {
//           deferred.resolve(appContext);
//         });
//         return deferred.promise;
//       }],
//       'TRANSLATION_CN': ['$http', function ($http) {
//         return $http.get(i18nPath + 'locale-zh-CN.json?v=' + buildNumber);
//       }],
//       'TRANSLATION_EN': ['$http', function ($http) {
//         return $http.get(i18nPath + 'locale-en-US.json?v=' + buildNumber);
//       }]
//     }
//   });
// });
