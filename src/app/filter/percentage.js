/**
 * @file percentage.filter.js
 * @author wujun07
 * @description [percentage.filter.js description]
 */

define(['app'], function (app) {
    app.regFilter('percentage', function () {
        return function (input) {
            if (input === 0) {
                return 0;
            }
            if (!input || !Number(input)) {
                return '--';
            }
            return (input * 100).toFixed(2) + '%';
        };
    });
});
