define([
    'app',
    './header/header.controller',
    'text!./footer/footer.tpl.html'
], function (app, headerTpl, footerTpl) {
    return {
        headerTpl: headerTpl,
        footerTpl: footerTpl
    }
});
