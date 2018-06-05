'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = isReactCompositeComponent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isReactCompositeComponent(type) {
  if (typeof type !== 'function') {
    return false;
  }
  if ((0, _typeof3.default)(type.prototype) !== 'object') {
    return false;
  }
  if (typeof type.prototype.render !== 'function' && type.displayName !== "Formsy") {
    return false;
  }
  return true;
}
//# sourceMappingURL=isReactCompositeComponent.js.map