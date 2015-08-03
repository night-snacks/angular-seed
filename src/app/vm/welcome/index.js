define([
    'app',
    './welcome.controller',
    './hello.controller'
], function (app, welcomeTpl, helloTpl) {
    return {
        welcomeTpl: welcomeTpl,
        helloTpl: helloTpl
    };
});
