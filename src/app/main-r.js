/**
 * @file main.r.js
 * @author wujun07
 * @description [main.r.js description]
 */

require.config({
    waitSeconds: 0,
    fileExclusionRegExp: /\.html$|^\.|svn/g,
    baseUrl: '.',
    optimize: 'none',
    keepBuildDir: true,
    // optimizeCss: "standard",
    removeCombined: false,  // keep it `false` if not all modules bundled, so that every module can be found
    IESelectorLimit: true,  // css-builder config
    siteRoot: '../',    // css-builder config
    modules: [{
        name: 'main'
    }, {
        name: 'vm/home/index',
        exclude: ['main']
    }, {
        name: 'vm/welcome/index',
        exclude: ['main']
    }, {
        name: 'vm/about/index',
        exclude: ['main']
    }],
    paths: {
        'text': '../vendor/requirejs-text/text',
        'css': '../vendor/require-css/css',
        'css-builder': '../vendor/require-css/css-builder',
        'normalize': '../vendor/require-css/normalize',
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
        }
    }
});
