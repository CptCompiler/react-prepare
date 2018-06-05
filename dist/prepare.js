'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var prepareCompositeElement = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref3, context) {
    var type = _ref3.type,
        props = _ref3.props;
    var p, instance;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(0, _prepared.isPrepared)(type)) {
              _context.next = 11;
              break;
            }

            p = (0, _prepared.getPrepare)(type)(props, context);

            if (!(0, _isThenable2.default)(p)) {
              _context.next = 7;
              break;
            }

            _context.next = 5;
            return p;

          case 5:
            _context.next = 9;
            break;

          case 7:
            _context.next = 9;
            return _promise2.default.resolve();

          case 9:
            _context.next = 13;
            break;

          case 11:
            _context.next = 13;
            return _promise2.default.resolve();

          case 13:
            instance = createCompositeElementInstance({ type: type, props: props }, context);
            return _context.abrupt('return', renderCompositeElementInstance(instance, context));

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function prepareCompositeElement(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isReactCompositeComponent = require('./utils/isReactCompositeComponent');

var _isReactCompositeComponent2 = _interopRequireDefault(_isReactCompositeComponent);

var _isThenable = require('./utils/isThenable');

var _isThenable2 = _interopRequireDefault(_isThenable);

var _prepared = require('./prepared');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updater = {
  enqueueSetState: function enqueueSetState(publicInstance, partialState, callback) {
    var newState = typeof partialState === 'function' ? partialState(publicInstance.state, publicInstance.props) : partialState;

    publicInstance.state = (0, _assign2.default)({}, publicInstance.state, newState);
    if (typeof callback === 'function') {
      callback();
      return;
    }
  }
};

function createCompositeElementInstance(_ref, context) {
  var CompositeComponent = _ref.type,
      props = _ref.props;

  var instance = new CompositeComponent(props, context);
  var state = instance.state || null;

  instance.props = props;
  instance.state = state;
  instance.context = context;
  instance.updater = updater;
  instance.refs = {};

  if (instance.componentWillMount) {
    instance.componentWillMount();
  }
  return instance;
}

function renderCompositeElementInstance(instance) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var childContext = (0, _assign2.default)({}, context, instance.getChildContext ? instance.getChildContext() : {});
  return [instance.render(), childContext];
}

function prepareElement(element, context) {
  if (element === null || (typeof element === 'undefined' ? 'undefined' : (0, _typeof3.default)(element)) !== 'object') {
    return _promise2.default.resolve([null, context]);
  }
  var type = element.type,
      props = element.props;

  if (typeof type === 'string') {
    return _promise2.default.resolve([props.children, context]);
  }
  if (!(0, _isReactCompositeComponent2.default)(type)) {
    return _promise2.default.resolve([type(props), context]);
  }
  return prepareCompositeElement(element, context);
}

function prepare(element) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return prepareElement(element, context).then(function (_ref4) {
    var _ref5 = (0, _slicedToArray3.default)(_ref4, 2),
        children = _ref5[0],
        childContext = _ref5[1];

    return _promise2.default.all(_react2.default.Children.toArray(children).map(function (child) {
      return prepare(child, childContext);
    }));
  });
}

exports.default = prepare;
//# sourceMappingURL=prepare.js.map