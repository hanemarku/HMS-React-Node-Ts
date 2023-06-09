"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var constants = _interopRequireWildcard(require("focus-lock/constants"));

var _useCallbackRef = require("use-callback-ref");

var _FocusGuard = require("./FocusGuard");

var _medium = require("./medium");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var emptyArray = [];
var FocusLock = /*#__PURE__*/React.forwardRef(function FocusLockUI(props, parentRef) {
  var _objectSpread2;

  var _React$useState = React.useState(),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      realObserved = _React$useState2[0],
      setObserved = _React$useState2[1];

  var observed = React.useRef();
  var isActive = React.useRef(false);
  var originalFocusedElement = React.useRef(null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      crossFrame = props.crossFrame,
      autoFocus = props.autoFocus,
      allowTextSelection = props.allowTextSelection,
      group = props.group,
      className = props.className,
      whiteList = props.whiteList,
      hasPositiveIndices = props.hasPositiveIndices,
      _props$shards = props.shards,
      shards = _props$shards === void 0 ? emptyArray : _props$shards,
      _props$as = props.as,
      Container = _props$as === void 0 ? 'div' : _props$as,
      _props$lockProps = props.lockProps,
      containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
      SideCar = props.sideCar,
      shouldReturnFocus = props.returnFocus,
      focusOptions = props.focusOptions,
      onActivationCallback = props.onActivation,
      onDeactivationCallback = props.onDeactivation;

  var _React$useState3 = React.useState({}),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 1),
      id = _React$useState4[0]; // SIDE EFFECT CALLBACKS


  var onActivation = React.useCallback(function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = React.useCallback(function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  (0, React.useEffect)(function () {
    if (!disabled) {
      // cleanup return focus on trap deactivation
      // sideEffect/returnFocus should happen by this time
      originalFocusedElement.current = null;
    }
  }, []);
  var returnFocus = React.useCallback(function (allowDefer) {
    var returnFocusTo = originalFocusedElement.current;

    if (returnFocusTo && returnFocusTo.focus) {
      var howToReturnFocus = typeof shouldReturnFocus === 'function' ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;

      if (howToReturnFocus) {
        var returnFocusOptions = (0, _typeof2["default"])(howToReturnFocus) === 'object' ? howToReturnFocus : undefined;
        originalFocusedElement.current = null;

        if (allowDefer) {
          // React might return focus after update
          // it's safer to defer the action
          Promise.resolve().then(function () {
            return returnFocusTo.focus(returnFocusOptions);
          });
        } else {
          returnFocusTo.focus(returnFocusOptions);
        }
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = React.useCallback(function (event) {
    if (isActive.current) {
      _medium.mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur = _medium.mediumBlur.useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = React.useCallback(function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    if (typeof allowTextSelection !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }

    React.useEffect(function () {
      // report incorrect integration - https://github.com/theKashey/react-focus-lock/issues/123
      if (!observed.current && typeof Container !== 'string') {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }

  var lockProps = _objectSpread((_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, constants.FOCUS_DISABLED, disabled && 'disabled'), (0, _defineProperty2["default"])(_objectSpread2, constants.FOCUS_GROUP, group), _objectSpread2), containerProps);

  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = (0, _useCallbackRef.useMergeRefs)([parentRef, setObserveNode]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasLeadingGuards && [
  /*#__PURE__*/
  // nearest focus guard
  React.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard.hiddenGuard
  }), // first tabbed element guard
  hasPositiveIndices ? /*#__PURE__*/React.createElement("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: _FocusGuard.hiddenGuard
  }) : null], !disabled && /*#__PURE__*/React.createElement(SideCar, {
    id: id,
    sideCar: _medium.mediumSidecar,
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    crossFrame: crossFrame,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus,
    focusOptions: focusOptions
  }), /*#__PURE__*/React.createElement(Container, (0, _extends2["default"])({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && /*#__PURE__*/React.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard.hiddenGuard
  }));
});
FocusLock.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.node,
  disabled: _propTypes.bool,
  returnFocus: (0, _propTypes.oneOfType)([_propTypes.bool, _propTypes.object, _propTypes.func]),
  focusOptions: _propTypes.object,
  noFocusGuards: _propTypes.bool,
  hasPositiveIndices: _propTypes.bool,
  allowTextSelection: _propTypes.bool,
  autoFocus: _propTypes.bool,
  persistentFocus: _propTypes.bool,
  crossFrame: _propTypes.bool,
  group: _propTypes.string,
  className: _propTypes.string,
  whiteList: _propTypes.func,
  shards: (0, _propTypes.arrayOf)(_propTypes.any),
  as: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.func, _propTypes.object]),
  lockProps: _propTypes.object,
  onActivation: _propTypes.func,
  onDeactivation: _propTypes.func,
  sideCar: _propTypes.any.isRequired
} : {};
FocusLock.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  focusOptions: undefined,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  hasPositiveIndices: undefined,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};
var _default = FocusLock;
exports["default"] = _default;