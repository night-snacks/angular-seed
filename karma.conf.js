/**
 * @file karma.conf.js
 * @author wujun07
 * @description Karma configuration
 */

var path = require('path');
var module = module;
var __dirname = __dirname;

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            'node_modules/jasmine-jquery/vendor/jquery/jquery.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js', {
                pattern: 'vendor/**/*.js',
                included: false
            }, {
                pattern: 'src/**/*.js',
                included: false
            }, {
                pattern: 'src/**/*.json',
                included: false
            }, {
                pattern: 'src/**/*.html',
                included: false
            }, {
                pattern: 'node_modules/angular-mocks/angular-mocks.js',
                included: false
            },
            'test-main.js'
        ],


        // list of files to exclude
        exclude: [
            'src/app/main.js',
            'src/app/r-config.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)

            'src/**/!(*spec).js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values:
        // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: ['Chrome'],
        browsers: ['PhantomJS'],

        phantomjsLauncher: {
            // configure PhantomJS executable for each platform
            cmd: {
                linux: path.join(__dirname,
                        'node_modules/phantomjs/bin/phantomjs'),
                darwin: path.join(__dirname,
                        'node_modules/karma-phantomjs-launcher/node_modules/phantomjs/lib/phantom/bin/phantomjs'),
                win32: path.join(__dirname,
                        'node_modules/phantomjs/lib/phantom/phantomjs.exe')
            }
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
