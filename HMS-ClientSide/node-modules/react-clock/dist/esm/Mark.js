import React from 'react';
import PropTypes from 'prop-types';
import { isMarkLength, isMarkWidth } from './shared/propTypes';
export default function Mark(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, _c = _a.length, length = _c === void 0 ? 10 : _c, name = _a.name, _d = _a.width, width = _d === void 0 ? 1 : _d, number = _a.number;
    return (React.createElement("div", { className: "react-clock__mark react-clock__".concat(name, "-mark"), style: {
            transform: "rotate(".concat(angle, "deg)"),
        } },
        React.createElement("div", { className: "react-clock__mark__body react-clock__".concat(name, "-mark__body"), style: {
                width: "".concat(width, "px"),
                top: 0,
                bottom: "".concat(100 - length / 2, "%"),
            } }),
        number && (React.createElement("div", { className: "react-clock__mark__number", style: {
                transform: "rotate(-".concat(angle, "deg)"),
                top: "".concat(length / 2, "%"),
            } }, number))));
}
Mark.propTypes = {
    angle: PropTypes.number,
    length: isMarkLength,
    name: PropTypes.string.isRequired,
    number: PropTypes.node,
    width: isMarkWidth,
};
