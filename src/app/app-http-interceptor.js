/**
 * http-interceptor.js
 * @description 统一的拦截器
 * 1.ie下，对所有get请求进行缓存处理
 * 2.对同一的请求code做处理，通常会跟后台约定code。比如code202，后台如果想直接返回提示信息，就返回该code，并在message中带相应的消息，该拦截器做统一的处理，不用在每一个http请求都做处理
 * 3.根据不同的code，跳转到不同的页面，如404，500等
 */

define([
    'app'
], function (app) {
    app.config(['$httpProvider', '$anchorScrollProvider', function ($httpProvider, $anchorScrollProvider) {

        $anchorScrollProvider.disableAutoScrolling();
        var errorInterceptor = ['$q', '$log', '$location', function ($q, $log, $location) {
            var msie = getInternetExplorerVersion();
            return {
                request: function (config) {
                    if (msie > 0 && config.method === 'GET' && config.url && !/\.js$|\.html$/.test(config.url)) {
                        config.params = config.params || {};
                        config.params['_'] = new Date().getTime();
                    }
                    return config;
                },
                responseError: function (rejection) {
                    $log.error(rejection);
                    var status = rejection.status.toString();
                    if (status.indexOf('4') === 0) {
                        // $location.path('/error/404');
                    }
                    else if (status.indexOf('5') === 0) {
                        $location.path('/error/500');
                    }

                    return $q.reject(rejection);
                }
            };
        }];
        $httpProvider.interceptors.push(errorInterceptor);

        function getInternetExplorerVersion() {
            var rv = -1;
            var ua;
            var re;
            if (navigator.appName === 'Microsoft Internet Explorer') {
                ua = navigator.userAgent;
                re = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
                if (re.exec(ua) != null) {
                    rv = parseFloat(RegExp.$1);
                }
            }
            else if (navigator.appName === 'Netscape') {
                ua = navigator.userAgent;
                re = new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})');
                if (re.exec(ua) != null) {
                    rv = parseFloat(RegExp.$1);
                }
            }
            return rv;
        }
    }]);
});
