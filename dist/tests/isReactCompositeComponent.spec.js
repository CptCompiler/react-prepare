'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _isReactCompositeComponent = require('../utils/isReactCompositeComponent');

var _isReactCompositeComponent2 = _interopRequireDefault(_isReactCompositeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;


describe('isReactCompositeComponent', function () {
  it('should match Component', function () {
    var C = function (_React$Component) {
      (0, _inherits3.default)(C, _React$Component);

      function C() {
        (0, _classCallCheck3.default)(this, C);
        return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).apply(this, arguments));
      }

      (0, _createClass3.default)(C, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement('div', null);
        }
      }]);
      return C;
    }(_react2.default.Component);

    _tcomb2.default.assert((0, _isReactCompositeComponent2.default)(C), 'match Component');
  });

  it('should match PureComponent', function () {
    var C = function (_React$PureComponent) {
      (0, _inherits3.default)(C, _React$PureComponent);

      function C() {
        (0, _classCallCheck3.default)(this, C);
        return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).apply(this, arguments));
      }

      (0, _createClass3.default)(C, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement('div', null);
        }
      }]);
      return C;
    }(_react2.default.PureComponent);

    _tcomb2.default.assert((0, _isReactCompositeComponent2.default)(C), 'match PureComponent');
  });

  it('should not match functional component', function () {
    var C = function C() {
      return _react2.default.createElement('div', null);
    };
    _tcomb2.default.assert((0, _isReactCompositeComponent2.default)(C) === false, 'not match functional component');
  });

  it('should match redux Provider', function () {
    _tcomb2.default.assert((0, _isReactCompositeComponent2.default)(_reactRedux.Provider), 'match redux Provider');
  });
});
//# sourceMappingURL=isReactCompositeComponent.spec.js.map