"use strict";

/*!
 * See LICENSE in this repository for license information
 */
(function () {
  'use strict';

  angular.module('angular-jszip-utils', []).value('version', '0.1').provider('JsZipUtils', function ChartJsProvider() {
    var ngJsZipUtils = function ngJsZipUtils($q, $http) {
      return {
        getBinaryContent: function getBinaryContent(path) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return $q(function (resolve, reject) {
            var httpOption = {
              responseType: 'arraybuffer',
              eventHandlers: {}
            };

            if (options.progress) {
              httpOption.eventHandlers.progress = function (e) {
                options.progress({
                  path: path,
                  originalEvent: e,
                  percent: e.loaded / e.total * 100,
                  loaded: e.loaded,
                  total: e.total
                });
              };
            }

            $http.get(path, httpOption).then(function (response) {
              resolve(response.data);
            }, reject);
          });
        }
      };
    };

    this.$get = ['$q', '$http', ngJsZipUtils];
  });
})();