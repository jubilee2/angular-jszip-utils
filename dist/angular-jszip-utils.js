/*!
 * See LICENSE in this repository for license information
 */
(function(){
'use strict';

angular
  .module('angular-jszip-utils', [])
  .value('version', '0.1');

'use strict';

angular
  .module('angular-jszip-utils')
  .directive('appVersion', ['version', function (version) {
    return function (scope, elm) {
      elm.text(version);
    };
  }]);

})();