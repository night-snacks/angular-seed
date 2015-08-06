/**
 * @file Util.js
 * @author wujun07
 * @description [Util.js description]
 */

define(['app'], function (app) {
    app.registerService('Util', [
        function () {
            var Util = {
                matchText: function (text, searchToken) {
                    return text.indexOf(searchToken) > -1;
                }
            };

            return Util;
        }
    ]);
});
