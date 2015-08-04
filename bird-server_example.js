/**
 * @file bird-server.js
 * @author wujun07
 * @description [description]
 */
var paths = require('./config').paths;
var birdConfig = {
    servers: {
        8787: {
            basePath: paths.build
        },
        9898: {
            basePath: paths.release
        }
    },
    transRules: {
        8787: {
            targetServer: {
                host: 'domain-or-ip',
                port: '8022'
            },
            regExpPath: {
                '/some-proj-path': {
                    path: '/',
                    attachHeaders: {
                        cookie: 'JSESSIONID=C5BA6C765071CB229F3C54B0E341FB5F'
                    }
                }
            }
        },
        9898: {
            targetServer: {
                host: 'domain-or-ip',
                port: '8022'
            },
            regExpPath: {
                '/': {
                    path: '/',
                    attachHeaders: {
                        cookie: 'JSESSIONID=C5BA6C765071CB229F3C54B0E341FB5F'
                    }
                }
            }
        },
        ajaxOnly: false
    }
};

var bird = require('gulp-bird');
bird.start(birdConfig.servers, birdConfig.transRules);
