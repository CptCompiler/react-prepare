'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _server = require('react-dom/server');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _dispatched = require('../dispatched');

var _dispatched2 = _interopRequireDefault(_dispatched);

var _prepare = require('../prepare');

var _prepare2 = _interopRequireDefault(_prepare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global,
    describe = _global.describe,
    it = _global.it;


var HTTP_STATUS_OK_BOUNDS = {
  min: 200,
  max: 300
};

describe('dispatched', function () {
  it('Real-world-like example using redux, koa, et. al', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var echoServer, echoHttpServer, baseUrlObj, FETCH_STARTED, FETCH_FAILED, FETCH_SUCCEEDED, rootReducer, store, fetchInto, OriginalEchoAlpha, ConnectedEchoAlpha, EchoAlpha, OriginalEchoBeta, ConnectedEchoBeta, EchoBeta, App, app, html;
    return _regenerator2.default.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // Create a fake echo server that replies with the pathname, preceded by 'echo '.
            echoServer = (0, _koa2.default)().use( /*#__PURE__*/_regenerator2.default.mark(function echo(next) {
              return _regenerator2.default.wrap(function echo$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.response.body = 'echo ' + this.request.path;
                      _context.next = 3;
                      return next;

                    case 3:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, echo, this);
            }));
            echoHttpServer = echoServer.listen();
            _context3.prev = 2;
            baseUrlObj = {
              protocol: 'http:',
              hostname: 'localhost',
              port: echoHttpServer.address().port
            };

            // Action type constants, also used to expres fetch status

            FETCH_STARTED = 'FETCH_STARTED';
            FETCH_FAILED = 'FETCH_FAILED';
            FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';

            rootReducer = function rootReducer() {
              var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var _ref2 = arguments[1];
              var type = _ref2.type,
                  payload = (0, _objectWithoutProperties3.default)(_ref2, ['type']);

              if (type === FETCH_STARTED) {
                var into = payload.into;

                return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, into, {
                  status: FETCH_STARTED
                }));
              }
              if (type === FETCH_FAILED) {
                var _into = payload.into,
                    statusCode = payload.statusCode,
                    err = payload.err;

                return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, _into, {
                  status: FETCH_FAILED,
                  statusCode: statusCode,
                  err: err
                }));
              }
              if (type === FETCH_SUCCEEDED) {
                var _into2 = payload.into,
                    value = payload.value;

                return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, _into2, {
                  status: FETCH_SUCCEEDED,
                  value: value
                }));
              }
              return state;
            };

            // redux store used by the app


            store = (0, _redux.createStore)(rootReducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));

            // async action creator

            fetchInto = function fetchInto(pathname, into) {
              return function () {
                var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
                  var href, res;
                  return _regenerator2.default.wrap(function _callee$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          dispatch({
                            type: FETCH_STARTED,
                            into: into
                          });
                          href = _url2.default.format((0, _assign2.default)({}, baseUrlObj, { pathname: pathname }));
                          _context2.prev = 2;
                          _context2.next = 5;
                          return (0, _nodeFetch2.default)(href);

                        case 5:
                          res = _context2.sent;

                          if (!(res.status < HTTP_STATUS_OK_BOUNDS.min || res.status >= HTTP_STATUS_OK_BOUNDS.max)) {
                            _context2.next = 17;
                            break;
                          }

                          _context2.t0 = dispatch;
                          _context2.t1 = FETCH_FAILED;
                          _context2.t2 = into;
                          _context2.t3 = res.status;
                          _context2.next = 13;
                          return res.text();

                        case 13:
                          _context2.t4 = _context2.sent;
                          _context2.t5 = {
                            type: _context2.t1,
                            into: _context2.t2,
                            statusCode: _context2.t3,
                            err: _context2.t4
                          };
                          (0, _context2.t0)(_context2.t5);
                          return _context2.abrupt('return');

                        case 17:
                          _context2.t6 = dispatch;
                          _context2.t7 = FETCH_SUCCEEDED;
                          _context2.t8 = into;
                          _context2.next = 22;
                          return res.text();

                        case 22:
                          _context2.t9 = _context2.sent;
                          _context2.t10 = {
                            type: _context2.t7,
                            into: _context2.t8,
                            value: _context2.t9
                          };
                          (0, _context2.t6)(_context2.t10);
                          return _context2.abrupt('return');

                        case 28:
                          _context2.prev = 28;
                          _context2.t11 = _context2['catch'](2);

                          dispatch({
                            type: FETCH_FAILED,
                            into: into,
                            statusCode: null,
                            err: _context2.t11
                          });

                        case 31:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee, undefined, [[2, 28]]);
                }));

                return function (_x2) {
                  return _ref3.apply(this, arguments);
                };
              }();
            };

            OriginalEchoAlpha = function OriginalEchoAlpha(_ref4) {
              var alpha = _ref4.alpha;

              if ((typeof alpha === 'undefined' ? 'undefined' : (0, _typeof3.default)(alpha)) !== 'object') {
                return _react2.default.createElement(
                  'div',
                  null,
                  '???'
                );
              }
              var status = alpha.status,
                  err = alpha.err,
                  value = alpha.value;

              if (status === FETCH_STARTED) {
                return _react2.default.createElement(
                  'div',
                  null,
                  '...'
                );
              }
              if (status === FETCH_FAILED) {
                return _react2.default.createElement(
                  'div',
                  null,
                  'Error fetching beta (Reason: ',
                  err,
                  ')'
                );
              }
              return _react2.default.createElement(
                'div',
                null,
                value
              );
            };

            OriginalEchoAlpha.propTypes = {
              alpha: _propTypes2.default.object
            };

            ConnectedEchoAlpha = (0, _reactRedux.connect)(function (_ref5) {
              var alpha = _ref5.alpha;
              return { alpha: alpha };
            })(OriginalEchoAlpha);
            EchoAlpha = (0, _dispatched2.default)(function (_ref6, dispatch) {
              var value = _ref6.value;
              return dispatch(fetchInto(value, 'alpha'));
            })(ConnectedEchoAlpha);

            OriginalEchoBeta = function OriginalEchoBeta(_ref7) {
              var beta = _ref7.beta;

              if ((typeof beta === 'undefined' ? 'undefined' : (0, _typeof3.default)(beta)) !== 'object') {
                return _react2.default.createElement(
                  'div',
                  null,
                  '???'
                );
              }
              var status = beta.status,
                  err = beta.err,
                  value = beta.value;

              if (status === FETCH_STARTED) {
                return _react2.default.createElement(
                  'div',
                  null,
                  '...'
                );
              }
              if (status === FETCH_FAILED) {
                return _react2.default.createElement(
                  'div',
                  null,
                  'Error fetching beta (Reason: ',
                  err,
                  ')'
                );
              }
              return _react2.default.createElement(
                'div',
                null,
                value
              );
            };

            OriginalEchoBeta.propTypes = {
              beta: _propTypes2.default.object
            };

            ConnectedEchoBeta = (0, _reactRedux.connect)(function (_ref8) {
              var beta = _ref8.beta;
              return { beta: beta };
            })(OriginalEchoBeta);
            EchoBeta = (0, _dispatched2.default)(function (_ref9, dispatch) {
              var value = _ref9.value;
              return dispatch(fetchInto(value, 'beta'));
            })(ConnectedEchoBeta);

            App = function App() {
              return _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  { key: 'alpha' },
                  _react2.default.createElement(EchoAlpha, { value: 'foo' })
                ),
                _react2.default.createElement(
                  'li',
                  { key: 'beta' },
                  _react2.default.createElement(EchoBeta, { value: 'bar' })
                )
              );
            };

            app = _react2.default.createElement(
              _reactRedux.Provider,
              { store: store },
              _react2.default.createElement(App, null)
            );
            _context3.next = 22;
            return (0, _prepare2.default)(app);

          case 22:
            html = (0, _server.renderToStaticMarkup)(app);

            _tcomb2.default.assert(html === '<ul><li><div>echo /foo</div></li><li><div>echo /bar</div></li></ul>', 'renders correct html');

          case 24:
            _context3.prev = 24;

            echoHttpServer.close();
            return _context3.finish(24);

          case 27:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee2, undefined, [[2,, 24, 27]]);
  })));
});
//# sourceMappingURL=dispatched.spec.js.map