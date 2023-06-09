"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TileGroup;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Flex = _interopRequireDefault(require("./Flex"));
var _utils = require("./shared/utils");
var _propTypes2 = require("./shared/propTypes");
var _excluded = ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function TileGroup(_ref) {
  var className = _ref.className,
    _ref$count = _ref.count,
    count = _ref$count === void 0 ? 3 : _ref$count,
    dateTransform = _ref.dateTransform,
    dateType = _ref.dateType,
    end = _ref.end,
    hover = _ref.hover,
    offset = _ref.offset,
    start = _ref.start,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    Tile = _ref.tile,
    value = _ref.value,
    valueType = _ref.valueType,
    tileProps = _objectWithoutProperties(_ref, _excluded);
  var tiles = [];
  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push( /*#__PURE__*/_react["default"].createElement(Tile, _extends({
      key: date.getTime(),
      classes: (0, _utils.getTileClasses)({
        value: value,
        valueType: valueType,
        date: date,
        dateType: dateType,
        hover: hover
      }),
      date: date,
      point: point
    }, tileProps)));
  }
  return /*#__PURE__*/_react["default"].createElement(_Flex["default"], {
    className: className,
    count: count,
    offset: offset,
    wrap: true
  }, tiles);
}
TileGroup.propTypes = _objectSpread(_objectSpread({}, _propTypes2.tileGroupProps), {}, {
  activeStartDate: _propTypes["default"].instanceOf(Date),
  count: _propTypes["default"].number,
  dateTransform: _propTypes["default"].func.isRequired,
  dateType: _propTypes["default"].string,
  offset: _propTypes["default"].number,
  step: _propTypes["default"].number,
  tile: _propTypes["default"].func.isRequired
});