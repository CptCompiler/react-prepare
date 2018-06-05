'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _isThenable = require('../utils/isThenable');

var _isThenable2 = _interopRequireDefault(_isThenable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;


describe('isThenable(p)', function () {
  it('recognizes a native Promise as thenable', function () {
    _tcomb2.default.assert((0, _isThenable2.default)(_promise2.default.resolve()));
  });

  it('recognizes null as non-thenable', function () {
    _tcomb2.default.assert(!(0, _isThenable2.default)(null));
  });

  it('recognizes void 0 as non-thenable', function () {
    _tcomb2.default.assert(!(0, _isThenable2.default)(void 0));
  });

  it('recognizes function as non-thenable', function () {
    function nonThenable() {}
    _tcomb2.default.assert(!(0, _isThenable2.default)(nonThenable));
  });

  it('recognizes arrow as non-thenable', function () {
    _tcomb2.default.assert(!(0, _isThenable2.default)(function () {}));
  });

  it('recognizes custom thenable as thenable', function () {
    var thenable = {
      then: function then() {
        return _promise2.default.resolve();
      }
    };
    _tcomb2.default.assert((0, _isThenable2.default)(thenable));
  });
});
//# sourceMappingURL=isThenable.spec.js.map