'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isThenable(p) {
  return p && (typeof p === 'undefined' ? 'undefined' : (0, _typeof3.default)(p)) === 'object' && typeof p.then === 'function';
}

exports.default = isThenable;
//# sourceMappingURL=isThenable.js.map