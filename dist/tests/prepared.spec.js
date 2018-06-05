'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _server = require('react-dom/server');

var _prepared = require('../prepared');

var _prepared2 = _interopRequireDefault(_prepared);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;


describe('prepared', function () {
  var OriginalCompositeComponent = function (_Component) {
    (0, _inherits3.default)(OriginalCompositeComponent, _Component);

    function OriginalCompositeComponent() {
      (0, _classCallCheck3.default)(this, OriginalCompositeComponent);
      return (0, _possibleConstructorReturn3.default)(this, (OriginalCompositeComponent.__proto__ || (0, _getPrototypeOf2.default)(OriginalCompositeComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(OriginalCompositeComponent, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          this.props.text
        );
      }
    }]);
    return OriginalCompositeComponent;
  }(_react.Component);

  OriginalCompositeComponent.propTypes = {
    text: _propTypes2.default.string
  };

  var OriginalCompositePureComponent = function (_PureComponent) {
    (0, _inherits3.default)(OriginalCompositePureComponent, _PureComponent);

    function OriginalCompositePureComponent() {
      (0, _classCallCheck3.default)(this, OriginalCompositePureComponent);
      return (0, _possibleConstructorReturn3.default)(this, (OriginalCompositePureComponent.__proto__ || (0, _getPrototypeOf2.default)(OriginalCompositePureComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(OriginalCompositePureComponent, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          this.props.text
        );
      }
    }]);
    return OriginalCompositePureComponent;
  }(_react.PureComponent);

  OriginalCompositePureComponent.propTypes = {
    text: _propTypes2.default.string
  };


  var OriginalArrowComponent = function OriginalArrowComponent(_ref) {
    var text = _ref.text;
    return _react2.default.createElement(
      'div',
      null,
      text
    );
  };
  OriginalArrowComponent.propTypes = {
    text: _propTypes2.default.string
  };

  it('prepared Composite Component', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var doAsyncSideEffect, prepareUsingProps, PreparedCompositeComponent, prepare, html;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            doAsyncSideEffect = _sinon2.default.spy((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
              return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, undefined);
            })));
            prepareUsingProps = _sinon2.default.spy(function () {
              var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref5) {
                var text = _ref5.text;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return doAsyncSideEffect(text);

                      case 2:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, undefined);
              }));

              return function (_x) {
                return _ref4.apply(this, arguments);
              };
            }());
            PreparedCompositeComponent = (0, _prepared2.default)(prepareUsingProps, {
              pure: false
            })(OriginalCompositeComponent);

            _tcomb2.default.assert(!(0, _prepared.isPrepared)(OriginalCompositeComponent), 'OriginalComponent is not prepared');
            _tcomb2.default.assert((0, _prepared.isPrepared)(PreparedCompositeComponent), 'PreparedComponent is prepared');
            prepare = (0, _prepared.getPrepare)(PreparedCompositeComponent);

            _tcomb2.default.assert(typeof prepare === 'function', 'getPrepare(PreparedCompositeComponent) is a function');
            _context3.next = 9;
            return prepare({ text: 'foo' });

          case 9:
            _tcomb2.default.assert(prepareUsingProps.calledOnce, 'prepareUsingProps has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(prepareUsingProps.getCall(0).args, [{ text: 'foo' }]), 'prepareUsingProps has been called with correct arguments');
            _tcomb2.default.assert(doAsyncSideEffect.calledOnce, 'doAsyncSideEffect has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(doAsyncSideEffect.getCall(0).args, ['foo']), 'doAsyncSideEffect has been called with correct arguments');
            html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(PreparedCompositeComponent, { text: 'foo' }));

            _tcomb2.default.assert(html === '<div>foo</div>', 'renders with correct html');

          case 15:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  })));

  it('prepared Composite Pure Component', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
    var doAsyncSideEffect, prepareUsingProps, PreparedCompositeComponent, prepare, html;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            doAsyncSideEffect = _sinon2.default.spy((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
              return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                    case 'end':
                      return _context4.stop();
                  }
                }
              }, _callee4, undefined);
            })));
            prepareUsingProps = _sinon2.default.spy(function () {
              var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref9) {
                var text = _ref9.text;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return doAsyncSideEffect(text);

                      case 2:
                      case 'end':
                        return _context5.stop();
                    }
                  }
                }, _callee5, undefined);
              }));

              return function (_x2) {
                return _ref8.apply(this, arguments);
              };
            }());
            PreparedCompositeComponent = (0, _prepared2.default)(prepareUsingProps)(OriginalCompositePureComponent);

            _tcomb2.default.assert(!(0, _prepared.isPrepared)(OriginalCompositePureComponent), 'OriginalComponent is not prepared');
            _tcomb2.default.assert((0, _prepared.isPrepared)(PreparedCompositeComponent), 'PreparedComponent is prepared');
            prepare = (0, _prepared.getPrepare)(PreparedCompositeComponent);

            _tcomb2.default.assert(typeof prepare === 'function', 'getPrepare(PreparedCompositeComponent) is a function');
            _context6.next = 9;
            return prepare({ text: 'foo' });

          case 9:
            _tcomb2.default.assert(prepareUsingProps.calledOnce, 'prepareUsingProps has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(prepareUsingProps.getCall(0).args, [{ text: 'foo' }]), 'prepareUsingProps has been called with correct arguments');
            _tcomb2.default.assert(doAsyncSideEffect.calledOnce, 'doAsyncSideEffect has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(doAsyncSideEffect.getCall(0).args, ['foo']), 'doAsyncSideEffect has been called with correct arguments');
            html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(PreparedCompositeComponent, { text: 'foo' }));

            _tcomb2.default.assert(html === '<div>foo</div>', 'renders with correct html');

          case 15:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  })));

  it('prepared Arrow Component', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
    var doAsyncSideEffect, prepareUsingProps, PreparedCompositeComponent, prepare, html;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            doAsyncSideEffect = _sinon2.default.spy((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
              return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                    case 'end':
                      return _context7.stop();
                  }
                }
              }, _callee7, undefined);
            })));
            prepareUsingProps = _sinon2.default.spy(function () {
              var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(_ref13) {
                var text = _ref13.text;
                return _regenerator2.default.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return doAsyncSideEffect(text);

                      case 2:
                      case 'end':
                        return _context8.stop();
                    }
                  }
                }, _callee8, undefined);
              }));

              return function (_x3) {
                return _ref12.apply(this, arguments);
              };
            }());
            PreparedCompositeComponent = (0, _prepared2.default)(prepareUsingProps)(OriginalArrowComponent);

            _tcomb2.default.assert(!(0, _prepared.isPrepared)(OriginalArrowComponent), 'OriginalComponent is not prepared');
            _tcomb2.default.assert((0, _prepared.isPrepared)(PreparedCompositeComponent), 'PreparedComponent is prepared');
            prepare = (0, _prepared.getPrepare)(PreparedCompositeComponent);

            _tcomb2.default.assert(typeof prepare === 'function', 'getPrepare(PreparedCompositeComponent) is a function');
            _context9.next = 9;
            return prepare({ text: 'foo' });

          case 9:
            _tcomb2.default.assert(prepareUsingProps.calledOnce, 'prepareUsingProps has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(prepareUsingProps.getCall(0).args, [{ text: 'foo' }]), 'prepareUsingProps has been called with correct arguments');
            _tcomb2.default.assert(doAsyncSideEffect.calledOnce, 'doAsyncSideEffect has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(doAsyncSideEffect.getCall(0).args, ['foo']), 'doAsyncSideEffect has been called with correct arguments');
            html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(PreparedCompositeComponent, { text: 'foo' }));

            _tcomb2.default.assert(html === '<div>foo</div>', 'renders with correct html');

          case 15:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined);
  })));
});
//# sourceMappingURL=prepared.spec.js.map