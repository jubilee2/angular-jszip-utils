# Angular jszip utils
This project was initially forked from the application template seed here [https://github.com/Stuk/jszip-utils](https://github.com/Stuk/jszip-utils) and [https://github.com/refactorthis/angular-component-seed](https://github.com/refactorthis/angular-component-seed) and [https://github.com/angular/angular-seed](https://github.com/angular/angular-seed)

Thanks all!

Basically use angularjs built-in provider function '$q' and '$http' to replace xmlhttprequest and promise. to make callback functions can work with angularjs platform.

## Getting Started

install
```bash
yarn add https://github.com/jubilee2/angular-jszip-utils.git#v0.1.0
```

use
```javascript
import 'angular';
import 'angular-jszip-utils'

angular.module('app', [
  'angular-jszip-utils',
])
.controller('Controller', ['$q', 'JsZipUtils', function($q, JsZipUtils) {
  var jsZip_loadAsync = (data) => {
    // change promise to angular promise
    return $q(function(resolve, reject) {
      JSZip.loadAsync(data).then(resolve, reject);
    })
  }

JsZipUtils.getBinaryContent(url).then((data)=>{
    // here we go !
    jsZip_loadAsync(data).then(function (zip) {
        return zip.file("content.txt").async("string");
    }).then(function (text) {
    console.log(text);
    });
  })
}])
```


## Contact

For more information on AngularJS please check out http://angularjs.org/

  * git: http://git-scm.com/
  * bower: http://bower.io
  * npm: https://www.npmjs.org/
  * node: http://nodejs.org
  * protractor: https://github.com/angular/protractor
  * jasmine: http://jasmine.github.io
  * karma: http://karma-runner.github.io
  * travis: https://travis-ci.org/
  * http-server: https://github.com/nodeapps/http-server
  * JSZip: https://stuk.github.io/jszip/
