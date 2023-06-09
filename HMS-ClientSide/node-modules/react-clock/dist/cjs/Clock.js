"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var date_utils_1 = require("@wojtekmaj/date-utils");
var Hand_1 = __importDefault(require("./Hand"));
var MinuteMark_1 = __importDefault(require("./MinuteMark"));
var HourMark_1 = __importDefault(require("./HourMark"));
var propTypes_1 = require("./shared/propTypes");
function Clock(_a) {
    var className = _a.className, formatHour = _a.formatHour, _b = _a.hourHandLength, hourHandLength = _b === void 0 ? 50 : _b, hourHandOppositeLength = _a.hourHandOppositeLength, _c = _a.hourHandWidth, hourHandWidth = _c === void 0 ? 4 : _c, _d = _a.hourMarksLength, hourMarksLength = _d === void 0 ? 10 : _d, _e = _a.hourMarksWidth, hourMarksWidth = _e === void 0 ? 3 : _e, locale = _a.locale, _f = _a.minuteHandLength, minuteHandLength = _f === void 0 ? 70 : _f, minuteHandOppositeLength = _a.minuteHandOppositeLength, _g = _a.minuteHandWidth, minuteHandWidth = _g === void 0 ? 2 : _g, _h = _a.minuteMarksLength, minuteMarksLength = _h === void 0 ? 6 : _h, _j = _a.minuteMarksWidth, minuteMarksWidth = _j === void 0 ? 1 : _j, _k = _a.renderHourMarks, renderHourMarks = _k === void 0 ? true : _k, _l = _a.renderMinuteHand, renderMinuteHand = _l === void 0 ? true : _l, _m = _a.renderMinuteMarks, renderMinuteMarks = _m === void 0 ? true : _m, renderNumbers = _a.renderNumbers, _o = _a.renderSecondHand, renderSecondHand = _o === void 0 ? true : _o, _p = _a.secondHandLength, secondHandLength = _p === void 0 ? 90 : _p, secondHandOppositeLength = _a.secondHandOppositeLength, _q = _a.secondHandWidth, secondHandWidth = _q === void 0 ? 1 : _q, _r = _a.size, size = _r === void 0 ? 150 : _r, value = _a.value;
    function renderMinuteMarksFn() {
        if (!renderMinuteMarks) {
            return null;
        }
        var minuteMarks = [];
        for (var i = 1; i <= 60; i += 1) {
            var isHourMark = renderHourMarks && !(i % 5);
            if (!isHourMark) {
                minuteMarks.push(react_1.default.createElement(MinuteMark_1.default, { key: "minute_".concat(i), angle: i * 6, length: minuteMarksLength, name: "minute", width: minuteMarksWidth }));
            }
        }
        return minuteMarks;
    }
    function renderHourMarksFn() {
        if (!renderHourMarks) {
            return null;
        }
        var hourMarks = [];
        for (var i = 1; i <= 12; i += 1) {
            hourMarks.push(react_1.default.createElement(HourMark_1.default, { key: "hour_".concat(i), angle: i * 30, formatHour: formatHour, length: hourMarksLength, locale: locale, name: "hour", number: renderNumbers ? i : undefined, width: hourMarksWidth }));
        }
        return hourMarks;
    }
    function renderFace() {
        return (react_1.default.createElement("div", { className: "react-clock__face" },
            renderMinuteMarksFn(),
            renderHourMarksFn()));
    }
    function renderHourHandFn() {
        var angle = value
            ? (0, date_utils_1.getHours)(value) * 30 + (0, date_utils_1.getMinutes)(value) / 2 + (0, date_utils_1.getSeconds)(value) / 600
            : 0;
        return (react_1.default.createElement(Hand_1.default, { angle: angle, length: hourHandLength, name: "hour", oppositeLength: hourHandOppositeLength, width: hourHandWidth }));
    }
    function renderMinuteHandFn() {
        if (!renderMinuteHand) {
            return null;
        }
        var angle = value
            ? (0, date_utils_1.getHours)(value) * 360 + (0, date_utils_1.getMinutes)(value) * 6 + (0, date_utils_1.getSeconds)(value) / 10
            : 0;
        return (react_1.default.createElement(Hand_1.default, { angle: angle, length: minuteHandLength, name: "minute", oppositeLength: minuteHandOppositeLength, width: minuteHandWidth }));
    }
    function renderSecondHandFn() {
        if (!renderSecondHand) {
            return null;
        }
        var angle = value ? (0, date_utils_1.getMinutes)(value) * 360 + (0, date_utils_1.getSeconds)(value) * 6 : 0;
        return (react_1.default.createElement(Hand_1.default, { angle: angle, length: secondHandLength, name: "second", oppositeLength: secondHandOppositeLength, width: secondHandWidth }));
    }
    return (react_1.default.createElement("time", { className: (0, clsx_1.default)('react-clock', className), dateTime: value instanceof Date ? value.toISOString() : value, style: {
            width: size,
            height: size,
        } },
        renderFace(),
        renderHourHandFn(),
        renderMinuteHandFn(),
        renderSecondHandFn()));
}
exports.default = Clock;
Clock.propTypes = {
    className: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.arrayOf(prop_types_1.default.string)]),
    formatHour: prop_types_1.default.func,
    hourHandLength: propTypes_1.isHandLength,
    hourHandOppositeLength: propTypes_1.isOppositeHandLength,
    hourHandWidth: propTypes_1.isHandWidth,
    hourMarksLength: propTypes_1.isMarkLength,
    hourMarksWidth: propTypes_1.isMarkWidth,
    locale: prop_types_1.default.string,
    minuteHandLength: propTypes_1.isHandLength,
    minuteHandOppositeLength: propTypes_1.isOppositeHandLength,
    minuteHandWidth: propTypes_1.isHandWidth,
    minuteMarksLength: propTypes_1.isMarkLength,
    minuteMarksWidth: propTypes_1.isMarkWidth,
    renderHourMarks: prop_types_1.default.bool,
    renderMinuteHand: prop_types_1.default.bool,
    renderMinuteMarks: prop_types_1.default.bool,
    renderNumbers: prop_types_1.default.bool,
    renderSecondHand: prop_types_1.default.bool,
    secondHandLength: propTypes_1.isHandLength,
    secondHandOppositeLength: propTypes_1.isOppositeHandLength,
    secondHandWidth: propTypes_1.isHandWidth,
    size: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.instanceOf(Date)]),
};
