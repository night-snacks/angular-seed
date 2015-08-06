/**
 * @file routeDefs.js 路由定义
 * @author wujun07
 * @description 该app为SPA，single page application
 * 路由完全有前端控制，此处配置**路由**
 */

define(['app'], function (app) {
    app
    .regProvider('routes', [
        '$stateProvider',
        '$urlRouterProvider',
        '$couchPotatoProvider',
        'STATIC_DIR',
        function ($stateProvider, $urlRouterProvider, $couchPotatoProvider, STATIC_DIR) {
            this.$get = function () {
                // this is a config-time-only provider
                // in a future sample it will expose runtime information to the app
                return {};
            };
            // $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('home');

            // var baseUrl = STATIC_DIR + 'app/';

            var headerConfig = {
                templateProvider: tplPro('headerTpl', 'common'),
                controller: 'headerCtrl as vm'
            };
            var footerConfig = {
                // templateUrl: baseUrl + 'vm/common/footer/footer.tpl.html',
                templateProvider: tplPro('footerTpl', 'common')
            };

            // note:
            // 1. The `resolve` keyword MUST be relative to `state` not `views` (in case you use multiple views)
            // 2. The `resolve` keys MUST be injected into the child states
            //    if you want to wait for the promises to be resolved before instantiating the children.

            $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    header: headerConfig,
                    footer: footerConfig,
                    body: {
                        templateProvider: tplPro('homeTpl', 'home'),
                        controller: 'homeCtrl as vm'
                    }
                },
                resolve: {
                    common: resolveDependencies('vm/common/index'),
                    home: resolveDependencies('vm/home/index')
                }
            })
            .state('welcome', {
                url: '/welcome',
                abstract: true,
                views: {
                    'header': headerConfig,
                    'footer': footerConfig,
                    'body': {
                        templateProvider: tplPro('welcomeTpl'),
                        controller: 'welcomeCtrl as vm'
                    }
                },
                resolve: {
                    common: resolveDependencies('vm/common/index'),
                    tpl: resolveDependencies('vm/welcome/index')
                }
            })
            .state('welcome.hello', {
                url: '/:username',
                views: {
                    hello: {
                        templateProvider: tplPro('helloTpl'),
                        controller: 'helloCtrl as vm'
                    }
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    'header': headerConfig,
                    'footer': footerConfig,
                    'body': {
                        templateProvider: tplPro('aboutTpl'),
                        controller: 'aboutCtrl as vm'
                    },
                    'aboutNav@about': {
                        templateProvider: tplPro('aboutNavTpl'),
                        controller: 'aboutNavCtrl as vm'
                    },
                    'aboutContent@about': {
                        templateProvider: tplPro('aboutContentTpl'),
                        controller: 'aboutContentCtrl as vm'
                    }
                },
                resolve: {
                    common: resolveDependencies('vm/common/index'),
                    tpl: resolveDependencies('vm/about/index')
                }
            })
            .state('about.topicIndex', {
                url: '/topicIndex',
                views: {
                    topic: {
                        // templateProvider: tplProvider('topic1Tpl'),
                        templateProvider: tplPro('topicIndexTpl')
                    }
                }
            })
            .state('about.topic1', {
                url: '/topic1',
                views: {
                    topic: {
                        // templateProvider: tplProvider('topic1Tpl'),
                        templateProvider: tplPro('topic1Tpl'),
                        controller: 'topic1Ctrl as vm'
                    }
                }
            })
            .state('about.topic2', {
                url: '/topic2',
                views: {
                    topic: {
                        templateProvider: tplPro('topic2Tpl'),
                        controller: 'topic2Ctrl as vm'
                    }
                }
            });
            angular.noop(); // do not remove this line,grunt tool use this to do reg match.

            function resolveDependencies(indexModule, parentTplName) {

                var providerInject = ['$q', '$rootScope'];
                // The resolve keys MUST be injected into the child states
                // if you want to wait for the promises to be resolved before instantiating the children.
                if (parentTplName) {
                    providerInject.push(parentTplName);
                }
                providerInject.push(providerFunc);

                return providerInject;

                function providerFunc($q, $rootScope, tpl) {
                    var deferred = $q.defer();
                    $couchPotatoProvider.resolveDependencies([indexModule])($q, $rootScope).then(function (tpl) {
                        deferred.resolve(tpl);
                    });
                    return deferred.promise;
                }
            }

            function tplPro(name, resolvedName) {
                resolvedName = resolvedName || 'tpl';
                name = name || 'tpl';
                return [resolvedName, function (tpl) {
                    return tpl[name];
                }];
            }
        }
    ]);
    // end for define
});
