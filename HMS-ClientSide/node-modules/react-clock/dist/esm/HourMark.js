var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import PropTypes from 'prop-types';
import Mark from './Mark';
import { formatHour as defaultFormatHour } from './shared/hourFormatter';
export default function HourMark(_a) {
    var _b = _a.formatHour, formatHour = _b === void 0 ? defaultFormatHour : _b, locale = _a.locale, number = _a.number, otherProps = __rest(_a, ["formatHour", "locale", "number"]);
    return React.createElement(Mark, __assign({ number: number && formatHour(locale, number) }, otherProps));
}
HourMark.propTypes = {
    formatHour: PropTypes.func,
    locale: PropTypes.string,
    number: PropTypes.number,
};
