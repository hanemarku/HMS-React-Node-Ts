import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { getHours, getMinutes, getSeconds } from '@wojtekmaj/date-utils';
import Hand from './Hand';
import MinuteMark from './MinuteMark';
import HourMark from './HourMark';
import { isHandLength, isOppositeHandLength, isHandWidth, isMarkLength, isMarkWidth, } from './shared/propTypes';
export default function Clock(_a) {
    var className = _a.className, formatHour = _a.formatHour, _b = _a.hourHandLength, hourHandLength = _b === void 0 ? 50 : _b, hourHandOppositeLength = _a.hourHandOppositeLength, _c = _a.hourHandWidth, hourHandWidth = _c === void 0 ? 4 : _c, _d = _a.hourMarksLength, hourMarksLength = _d === void 0 ? 10 : _d, _e = _a.hourMarksWidth, hourMarksWidth = _e === void 0 ? 3 : _e, locale = _a.locale, _f = _a.minuteHandLength, minuteHandLength = _f === void 0 ? 70 : _f, minuteHandOppositeLength = _a.minuteHandOppositeLength, _g = _a.minuteHandWidth, minuteHandWidth = _g === void 0 ? 2 : _g, _h = _a.minuteMarksLength, minuteMarksLength = _h === void 0 ? 6 : _h, _j = _a.minuteMarksWidth, minuteMarksWidth = _j === void 0 ? 1 : _j, _k = _a.renderHourMarks, renderHourMarks = _k === void 0 ? true : _k, _l = _a.renderMinuteHand, renderMinuteHand = _l === void 0 ? true : _l, _m = _a.renderMinuteMarks, renderMinuteMarks = _m === void 0 ? true : _m, renderNumbers = _a.renderNumbers, _o = _a.renderSecondHand, renderSecondHand = _o === void 0 ? true : _o, _p = _a.secondHandLength, secondHandLength = _p === void 0 ? 90 : _p, secondHandOppositeLength = _a.secondHandOppositeLength, _q = _a.secondHandWidth, secondHandWidth = _q === void 0 ? 1 : _q, _r = _a.size, size = _r === void 0 ? 150 : _r, value = _a.value;
    function renderMinuteMarksFn() {
        if (!renderMinuteMarks) {
            return null;
        }
        var minuteMarks = [];
        for (var i = 1; i <= 60; i += 1) {
            var isHourMark = renderHourMarks && !(i % 5);
            if (!isHourMark) {
                minuteMarks.push(React.createElement(MinuteMark, { key: "minute_".concat(i), angle: i * 6, length: minuteMarksLength, name: "minute", width: minuteMarksWidth }));
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
            hourMarks.push(React.createElement(HourMark, { key: "hour_".concat(i), angle: i * 30, formatHour: formatHour, length: hourMarksLength, locale: locale, name: "hour", number: renderNumbers ? i : undefined, width: hourMarksWidth }));
        }
        return hourMarks;
    }
    function renderFace() {
        return (React.createElement("div", { className: "react-clock__face" },
            renderMinuteMarksFn(),
            renderHourMarksFn()));
    }
    function renderHourHandFn() {
        var angle = value
            ? getHours(value) * 30 + getMinutes(value) / 2 + getSeconds(value) / 600
            : 0;
        return (React.createElement(Hand, { angle: angle, length: hourHandLength, name: "hour", oppositeLength: hourHandOppositeLength, width: hourHandWidth }));
    }
    function renderMinuteHandFn() {
        if (!renderMinuteHand) {
            return null;
        }
        var angle = value
            ? getHours(value) * 360 + getMinutes(value) * 6 + getSeconds(value) / 10
            : 0;
        return (React.createElement(Hand, { angle: angle, length: minuteHandLength, name: "minute", oppositeLength: minuteHandOppositeLength, width: minuteHandWidth }));
    }
    function renderSecondHandFn() {
        if (!renderSecondHand) {
            return null;
        }
        var angle = value ? getMinutes(value) * 360 + getSeconds(value) * 6 : 0;
        return (React.createElement(Hand, { angle: angle, length: secondHandLength, name: "second", oppositeLength: secondHandOppositeLength, width: secondHandWidth }));
    }
    return (React.createElement("time", { className: clsx('react-clock', className), dateTime: value instanceof Date ? value.toISOString() : value, style: {
            width: size,
            height: size,
        } },
        renderFace(),
        renderHourHandFn(),
        renderMinuteHandFn(),
        renderSecondHandFn()));
}
Clock.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    formatHour: PropTypes.func,
    hourHandLength: isHandLength,
    hourHandOppositeLength: isOppositeHandLength,
    hourHandWidth: isHandWidth,
    hourMarksLength: isMarkLength,
    hourMarksWidth: isMarkWidth,
    locale: PropTypes.string,
    minuteHandLength: isHandLength,
    minuteHandOppositeLength: isOppositeHandLength,
    minuteHandWidth: isHandWidth,
    minuteMarksLength: isMarkLength,
    minuteMarksWidth: isMarkWidth,
    renderHourMarks: PropTypes.bool,
    renderMinuteHand: PropTypes.bool,
    renderMinuteMarks: PropTypes.bool,
    renderNumbers: PropTypes.bool,
    renderSecondHand: PropTypes.bool,
    secondHandLength: isHandLength,
    secondHandOppositeLength: isOppositeHandLength,
    secondHandWidth: isHandWidth,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};
