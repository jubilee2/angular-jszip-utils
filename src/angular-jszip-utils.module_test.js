'use strict';

describe('angular-jszip-utils module', function () {
  beforeEach(module('angular-jszip-utils'));

  describe('version service', function () {
    it('should return current version', inject(function (version) {
      expect(version).toEqual('0.1.0');
    }));
  });
});
