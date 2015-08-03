var tests = [];
for (var file in window.__karma__.files) {
    if (/\.spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    waitSeconds: 0,
    // Karma serves files from '/base'
    baseUrl: '/base/src/app',

    paths: {
        'text': '../../vendor/requirejs-text/text',
        'css': '../../vendor/require-css/css',
        'vendor': 'vendor-loader',
        'angular': '../../vendor/angular/angular',
        'angular-mocks': '../../node_modules/angular-mocks/angular-mocks',
        'angular-couch-potato': '../../vendor/angular-couch-potato/dist/angular-couch-potato',
        'angular-deferred-bootstrap': 'vendor/angular-deferred-bootstrap/angular-deferred-bootstrap',
        'angular-ui-router': '../../vendor/ui-router/release/angular-ui-router',
        'angular-ui-bootstrap': '../../vendor/angular-ui-bootstrap-bower/ui-bootstrap-tpls',
        'angular-loading-bar': '../../vendor/angular-loading-bar/build/loading-bar',
        'angular-toaster': '../../vendor/toaster/toaster'
    },
    shim: {
        'vendor': ['angular'],
        'angular': {
            exports: 'angular'
        },
        'angular-mocks': {
            exports: 'angular.mock',
            deps: ['angular']
        },
        'angular-couch-potato': ['angular'],
        'angular-ui-router': ['angular'],
        'angular-ui-bootstrap': ['angular'],
        'angular-loading-bar': ['angular'],
        'angular-toaster': ['angular']
    },

    // ask Require.js to load these files (all our tests)
    // deps: tests,

    // start test run, once Require.js is done
    // callback: window.__karma__.start
    callback: function () {
        require([
            'app',
            'angular',
            'app-init'
        ], function (app, angular) {

            angular.element(document).ready(function () {
                angular.bootstrap(document, [app.name, function () {
                    angular.element(document).find('html').addClass('ng-app');
                    require(tests, function () {
                        window.__karma__.start();
                    });
                }]);

            });

        });
    }
});
