'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _propTypes = require('prop-types');

var _prepared = require('./prepared');

var _prepared2 = _interopRequireDefault(_prepared);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeShape = _propTypes.PropTypes.shape({
  dispatch: _propTypes.PropTypes.func.isRequired
});

var dispatched = function dispatched(prepareUsingDispatch) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (OriginalComponent) {
    var prepare = function prepare(props, _ref) {
      var dispatch = _ref.store.dispatch;
      return prepareUsingDispatch(props, dispatch);
    };
    var contextTypes = (0, _assign2.default)({}, opts && opts.contextTypes ? opts.contextTypes : {}, { store: storeShape });
    var preparedOpts = (0, _assign2.default)({}, opts, { contextTypes: contextTypes });
    return (0, _prepared2.default)(prepare, preparedOpts)(OriginalComponent);
  };
};

exports.default = dispatched;
//# sourceMappingURL=dispatched.js.map