'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _server = require('react-dom/server');

var _prepared = require('../prepared');

var _prepared2 = _interopRequireDefault(_prepared);

var _prepare = require('../prepare');

var _prepare2 = _interopRequireDefault(_prepare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;


describe('prepare', function () {
  it('sets instance properties', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var MessageBox;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            MessageBox = function (_React$Component) {
              (0, _inherits3.default)(MessageBox, _React$Component);

              function MessageBox() {
                (0, _classCallCheck3.default)(this, MessageBox);
                return (0, _possibleConstructorReturn3.default)(this, (MessageBox.__proto__ || (0, _getPrototypeOf2.default)(MessageBox)).call(this));
              }

              (0, _createClass3.default)(MessageBox, [{
                key: 'render',
                value: function render() {
                  _tcomb2.default.assert((0, _deepEqual2.default)(this.props, { message: 'Hello' }), 'sets props on instance');
                  _tcomb2.default.assert(this.state === null, 'sets state on instance');
                  _tcomb2.default.assert(this.updater !== undefined, 'sets updater on instance'); // eslint-disable-line no-undefined
                  _tcomb2.default.assert((0, _deepEqual2.default)(this.refs, {}), 'sets refs on instance');
                  _tcomb2.default.assert((0, _deepEqual2.default)(this.context, {}), 'sets context on instance');
                  return null;
                }
              }]);
              return MessageBox;
            }(_react2.default.Component);

            MessageBox.propTypes = {
              message: _propTypes2.default.string
            };


            (0, _server.renderToStaticMarkup)(_react2.default.createElement(MessageBox, { message: 'Hello' }));

            _context.next = 5;
            return (0, _prepare2.default)(_react2.default.createElement(MessageBox, { message: 'Hello' }));

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  it('supports state updates inside componentWillMount', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var MessageBox;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            MessageBox = function (_React$Component2) {
              (0, _inherits3.default)(MessageBox, _React$Component2);

              function MessageBox() {
                (0, _classCallCheck3.default)(this, MessageBox);

                var _this2 = (0, _possibleConstructorReturn3.default)(this, (MessageBox.__proto__ || (0, _getPrototypeOf2.default)(MessageBox)).call(this));

                _this2.state = {
                  message: 'Hello'
                };
                return _this2;
              }

              (0, _createClass3.default)(MessageBox, [{
                key: 'componentWillMount',
                value: function componentWillMount() {
                  this.setState({ message: 'Updated message' });
                }
              }, {
                key: 'render',
                value: function render() {
                  _tcomb2.default.assert((0, _deepEqual2.default)(this.state.message, 'Updated message'), 'updates state on instance');
                  return null;
                }
              }]);
              return MessageBox;
            }(_react2.default.Component);

            (0, _server.renderToStaticMarkup)(_react2.default.createElement(MessageBox, null));

            _context2.next = 4;
            return (0, _prepare2.default)(_react2.default.createElement(MessageBox, null));

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));

  it('Shallow hierarchy (no children)', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
    var doAsyncSideEffect, prepareUsingProps, App, html;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            doAsyncSideEffect = _sinon2.default.spy((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
              return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                    case 'end':
                      return _context3.stop();
                  }
                }
              }, _callee3, undefined);
            })));
            prepareUsingProps = _sinon2.default.spy(function () {
              var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref6) {
                var text = _ref6.text;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return doAsyncSideEffect(text);

                      case 2:
                      case 'end':
                        return _context4.stop();
                    }
                  }
                }, _callee4, undefined);
              }));

              return function (_x) {
                return _ref5.apply(this, arguments);
              };
            }());
            App = (0, _prepared2.default)(prepareUsingProps)(function (_ref7) {
              var text = _ref7.text;
              return _react2.default.createElement(
                'div',
                null,
                text
              );
            });
            _context5.next = 5;
            return (0, _prepare2.default)(_react2.default.createElement(App, { text: 'foo' }));

          case 5:
            _tcomb2.default.assert(prepareUsingProps.calledOnce, 'prepareUsingProps has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(prepareUsingProps.getCall(0).args, [{ text: 'foo' }, {}]), 'prepareUsingProps has been called with correct arguments');
            _tcomb2.default.assert(doAsyncSideEffect.calledOnce, 'doAsyncSideEffect has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(doAsyncSideEffect.getCall(0).args, ['foo']), 'doAsyncSideEffect has been called with correct arguments');
            html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(App, { text: 'foo' }));

            _tcomb2.default.assert(html === '<div>foo</div>', 'renders with correct html');

          case 11:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  })));

  it('Deep hierarchy', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
    var classNameOfFirstChild, classNameOfSecondChild, doAsyncSideEffectForFirstChild, prepareUsingPropsForFirstChild, doAsyncSideEffectForSecondChild, prepareUsingPropsForSecondChild, FirstChild, SecondChild, App, html;
    return _regenerator2.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            classNameOfFirstChild = 'FirstChild';
            classNameOfSecondChild = 'SecondChild';
            doAsyncSideEffectForFirstChild = _sinon2.default.spy((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
              return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      classNameOfFirstChild = 'prepared(FirstChild)';

                    case 1:
                    case 'end':
                      return _context6.stop();
                  }
                }
              }, _callee6, undefined);
            })));
            prepareUsingPropsForFirstChild = _sinon2.default.spy(function () {
              var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref11) {
                var text = _ref11.text;
                return _regenerator2.default.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return doAsyncSideEffectForFirstChild(text);

                      case 2:
                      case 'end':
                        return _context7.stop();
                    }
                  }
                }, _callee7, undefined);
              }));

              return function (_x2) {
                return _ref10.apply(this, arguments);
              };
            }());
            doAsyncSideEffectForSecondChild = _sinon2.default.spy((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
              return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      classNameOfSecondChild = 'prepared(SecondChild)';

                    case 1:
                    case 'end':
                      return _context8.stop();
                  }
                }
              }, _callee8, undefined);
            })));
            prepareUsingPropsForSecondChild = _sinon2.default.spy(function () {
              var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(_ref14) {
                var text = _ref14.text;
                return _regenerator2.default.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return doAsyncSideEffectForSecondChild(text);

                      case 2:
                      case 'end':
                        return _context9.stop();
                    }
                  }
                }, _callee9, undefined);
              }));

              return function (_x3) {
                return _ref13.apply(this, arguments);
              };
            }());
            FirstChild = (0, _prepared2.default)(prepareUsingPropsForFirstChild)(function (_ref15) {
              var text = _ref15.text;
              return _react2.default.createElement(
                'span',
                { className: classNameOfFirstChild },
                text
              );
            });
            SecondChild = (0, _prepared2.default)(prepareUsingPropsForSecondChild)(function (_ref16) {
              var text = _ref16.text;
              return _react2.default.createElement(
                'span',
                { className: classNameOfSecondChild },
                text
              );
            });

            App = function App(_ref17) {
              var texts = _ref17.texts;
              return _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  { key: 0 },
                  _react2.default.createElement(FirstChild, { text: texts[0] })
                ),
                _react2.default.createElement(
                  'li',
                  { key: 1 },
                  _react2.default.createElement(SecondChild, { text: texts[1] })
                )
              );
            };

            App.propTypes = {
              texts: _propTypes2.default.array
            };

            _context10.next = 12;
            return (0, _prepare2.default)(_react2.default.createElement(App, { texts: ['first', 'second'] }));

          case 12:

            _tcomb2.default.assert(prepareUsingPropsForFirstChild.calledOnce, 'prepareUsingPropsForFirstChild has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(prepareUsingPropsForFirstChild.getCall(0).args, [{ text: 'first' }, {}]), 'prepareUsingPropsForFirstChild has been called with correct arguments');
            _tcomb2.default.assert(doAsyncSideEffectForFirstChild.calledOnce, 'doAsyncSideEffectForFirstChild has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(doAsyncSideEffectForFirstChild.getCall(0).args, ['first']), 'doAsyncSideEffectForFirstChild has been called with correct arguments');

            _tcomb2.default.assert(prepareUsingPropsForSecondChild.calledOnce, 'prepareUsingPropsForSecondChild has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(prepareUsingPropsForSecondChild.getCall(0).args, [{ text: 'second' }, {}]), 'prepareUsingPropsForSecondChild has been called with correct arguments');
            _tcomb2.default.assert(doAsyncSideEffectForSecondChild.calledOnce, 'doAsyncSideEffectForSecondChild has been called exactly once');
            _tcomb2.default.assert((0, _deepEqual2.default)(doAsyncSideEffectForSecondChild.getCall(0).args, ['second']), 'doAsyncSideEffectForSecondChild has been called with correct arguments');

            html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(App, { texts: ['first', 'second'] }));

            _tcomb2.default.assert(html === '<ul><li><span class="prepared(FirstChild)">first</span></li><li><span class="prepared(SecondChild)">second</span></li></ul>'); // eslint-disable-line max-len

          case 22:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, undefined);
  })));
});
//# sourceMappingURL=prepare.spec.js.map