/**
 * @file nsMaxlength.js
 * @author wujun07
 * @description [nsMaxlength.js description]
 */

define(['app'], function (app) {
    app.regDirective('nsMaxlength', [function () {
        function isLengthOverflow(source, maxLength) {
            // if ((source + '').replace(/([^\x00-\xff])/g, 'aa').length > maxLength) {
            if ((source + '').length > maxLength) {
                return true;
            }
            return false;
        }
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                // For DOM -> model validation
                ngModel.$parsers.unshift(function (value) {
                    var valid = !isLengthOverflow(value, parseInt(attrs.nsMaxlength, 10));
                    ngModel.$setValidity('nsMaxlength', valid);
                    return valid ? value : undefined;
                });

                // For model -> DOM validation
                ngModel.$formatters.unshift(function (value) {
                    ngModel.$setValidity('nsMaxlength', !isLengthOverflow(value, parseInt(attrs.nsMaxlength, 10)));
                    return value;
                });
            }
        };
    }]);
});
