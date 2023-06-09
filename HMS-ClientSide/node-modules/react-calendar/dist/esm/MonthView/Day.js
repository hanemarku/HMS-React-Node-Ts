var _excluded = ["formatDay", "formatLongDate", "calendarType", "classes", "currentMonthIndex"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import { getDayStart, getDayEnd } from '@wojtekmaj/date-utils';
import Tile from '../Tile';
import { isWeekend } from '../shared/dates';
import { formatDay as defaultFormatDay, formatLongDate as defaultFormatLongDate } from '../shared/dateFormatter';
import { tileProps } from '../shared/propTypes';
var className = 'react-calendar__month-view__days__day';
export default function Day(_ref) {
  var _ref$formatDay = _ref.formatDay,
    formatDay = _ref$formatDay === void 0 ? defaultFormatDay : _ref$formatDay,
    _ref$formatLongDate = _ref.formatLongDate,
    formatLongDate = _ref$formatLongDate === void 0 ? defaultFormatLongDate : _ref$formatLongDate,
    calendarType = _ref.calendarType,
    classes = _ref.classes,
    currentMonthIndex = _ref.currentMonthIndex,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var date = otherProps.date,
    locale = otherProps.locale;
  return /*#__PURE__*/React.createElement(Tile, _extends({}, otherProps, {
    classes: [].concat(classes, className, isWeekend(date, calendarType) ? "".concat(className, "--weekend") : null, date.getMonth() !== currentMonthIndex ? "".concat(className, "--neighboringMonth") : null),
    formatAbbr: formatLongDate,
    maxDateTransform: getDayEnd,
    minDateTransform: getDayStart,
    view: "month"
  }), formatDay(locale, date));
}
Day.propTypes = _objectSpread(_objectSpread({}, tileProps), {}, {
  currentMonthIndex: PropTypes.number.isRequired,
  formatDay: PropTypes.func,
  formatLongDate: PropTypes.func
});