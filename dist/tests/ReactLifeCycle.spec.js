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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _server = require('react-dom/server');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;


describe('React lifecycle methods', function () {
  var CompositeComponent = function (_Component) {
    (0, _inherits3.default)(CompositeComponent, _Component);

    function CompositeComponent() {
      (0, _classCallCheck3.default)(this, CompositeComponent);
      return (0, _possibleConstructorReturn3.default)(this, (CompositeComponent.__proto__ || (0, _getPrototypeOf2.default)(CompositeComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(CompositeComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var spyForComponentWillMount = this.props.spyForComponentWillMount;

        spyForComponentWillMount();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var spyForComponentWillUnmount = this.props.spyForComponentWillUnmount;

        spyForComponentWillUnmount();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          'CompositeComponent'
        );
      }
    }]);
    return CompositeComponent;
  }(_react.Component);

  CompositeComponent.propTypes = {
    spyForComponentWillMount: _propTypes2.default.func,
    spyForComponentWillUnmount: _propTypes2.default.func
  };


  it('renderToString calls #componentWillMount()', function () {
    var spyForComponentWillMount = _sinon2.default.spy();
    var spyForComponentWillUnmount = function spyForComponentWillUnmount() {
      return void 0;
    };
    (0, _server.renderToString)(_react2.default.createElement(CompositeComponent, {
      spyForComponentWillMount: spyForComponentWillMount,
      spyForComponentWillUnmount: spyForComponentWillUnmount
    }));
    _tcomb2.default.assert(spyForComponentWillMount.calledOnce, '#componentWillMount() has been called once');
  });

  it("renderToString doesn't call #componentWillUnmount()", function () {
    var spyForComponentWillMount = function spyForComponentWillMount() {
      return void 0;
    };
    var spyForComponentWillUnmount = _sinon2.default.spy();
    (0, _server.renderToString)(_react2.default.createElement(CompositeComponent, {
      spyForComponentWillMount: spyForComponentWillMount,
      spyForComponentWillUnmount: spyForComponentWillUnmount
    }));
    _tcomb2.default.assert(spyForComponentWillUnmount.callCount === 0, '#componentWillUnmount() has not been called');
  });
});
//# sourceMappingURL=ReactLifeCycle.spec.js.map