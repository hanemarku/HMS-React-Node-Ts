import React from 'react';
import PropTypes from 'prop-types';
import { isHandLength, isHandWidth } from './shared/propTypes';
export default function Hand(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, name = _a.name, _c = _a.length, length = _c === void 0 ? 100 : _c, _d = _a.oppositeLength, oppositeLength = _d === void 0 ? 10 : _d, _e = _a.width, width = _e === void 0 ? 1 : _e;
    return (React.createElement("div", { className: "react-clock__hand react-clock__".concat(name, "-hand"), style: {
            transform: "rotate(".concat(angle, "deg)"),
        } },
        React.createElement("div", { className: "react-clock__hand__body react-clock__".concat(name, "-hand__body"), style: {
                width: "".concat(width, "px"),
                top: "".concat(50 - length / 2, "%"),
                bottom: "".concat(50 - oppositeLength / 2, "%"),
            } })));
}
Hand.propTypes = {
    angle: PropTypes.number,
    length: isHandLength,
    name: PropTypes.string.isRequired,
    oppositeLength: isHandLength,
    width: isHandWidth,
};
