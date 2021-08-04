'use strict';

angular
  .module('angular-jszip-utils', [])
  .value('version', '0.1')
  .provider('JsZipUtils', function ChartJsProvider () {
    var ngJsZipUtils = ($q, $http) => {
      return {
        getBinaryContent: (path, options = {}) => {
          return $q(function(resolve, reject) {
            let httpOption = { responseType: 'arraybuffer', eventHandlers: {} };
            if(options.progress) {
              httpOption.eventHandlers.progress = function(e) {
                options.progress({
                  path: path,
                  originalEvent: e,
                  percent: e.loaded / e.total * 100,
                  loaded: e.loaded,
                  total: e.total
                });
              };
            }

            $http.get(path, httpOption).then(function(response) {
              resolve(response.data);
            }, reject);

          });
        }
      };
    };

    this.$get = ['$q', '$http', ngJsZipUtils];
  });
