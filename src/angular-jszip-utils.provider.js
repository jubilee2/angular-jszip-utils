'use strict';

angular
  .module('angular-jszip-utils')
  .directive('appVersion', ['version', function (version) {
    return function (scope, elm) {
      elm.text(version);
    };
  }]);
