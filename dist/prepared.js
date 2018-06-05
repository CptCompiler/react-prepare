'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrepare = exports.isPrepared = undefined;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prepared = function prepared(prepare) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$pure = _ref.pure,
      pure = _ref$pure === undefined ? true : _ref$pure,
      _ref$componentDidMoun = _ref.componentDidMount,
      _componentDidMount = _ref$componentDidMoun === undefined ? true : _ref$componentDidMoun,
      _ref$componentWillRec = _ref.componentWillReceiveProps,
      _componentWillReceiveProps = _ref$componentWillRec === undefined ? true : _ref$componentWillRec,
      _ref$contextTypes = _ref.contextTypes,
      contextTypes = _ref$contextTypes === undefined ? {} : _ref$contextTypes;

  return function (OriginalComponent) {
    var displayName = OriginalComponent.displayName;

    var PreparedComponent = function (_ref2) {
      (0, _inherits3.default)(PreparedComponent, _ref2);

      function PreparedComponent() {
        (0, _classCallCheck3.default)(this, PreparedComponent);
        return (0, _possibleConstructorReturn3.default)(this, (PreparedComponent.__proto__ || (0, _getPrototypeOf2.default)(PreparedComponent)).apply(this, arguments));
      }

      (0, _createClass3.default)(PreparedComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (_componentDidMount) {
            prepare(this.props, this.context);
          }
        }

        // Placeholder to allow referencing this.context in lifecycle methods

      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
          if (_componentWillReceiveProps) {
            prepare(nextProps, nextContext);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(OriginalComponent, this.props);
        }
      }]);
      return PreparedComponent;
    }(pure ? _react.PureComponent : _react.Component);

    PreparedComponent.displayName = 'PreparedComponent' + (displayName ? '(' + displayName + ')' : '');
    PreparedComponent.contextTypes = contextTypes;

    PreparedComponent[_constants.__REACT_PREPARE__] = prepare.bind(null);
    return PreparedComponent;
  };
};

function isPrepared(CustomComponent) {
  return typeof CustomComponent[_constants.__REACT_PREPARE__] === 'function';
}

function getPrepare(CustomComponent) {
  return CustomComponent[_constants.__REACT_PREPARE__];
}

exports.isPrepared = isPrepared;
exports.getPrepare = getPrepare;
exports.default = prepared;
//# sourceMappingURL=prepared.js.map