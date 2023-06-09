"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var propTypes_1 = require("./shared/propTypes");
function Hand(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, name = _a.name, _c = _a.length, length = _c === void 0 ? 100 : _c, _d = _a.oppositeLength, oppositeLength = _d === void 0 ? 10 : _d, _e = _a.width, width = _e === void 0 ? 1 : _e;
    return (react_1.default.createElement("div", { className: "react-clock__hand react-clock__".concat(name, "-hand"), style: {
            transform: "rotate(".concat(angle, "deg)"),
        } },
        react_1.default.createElement("div", { className: "react-clock__hand__body react-clock__".concat(name, "-hand__body"), style: {
                width: "".concat(width, "px"),
                top: "".concat(50 - length / 2, "%"),
                bottom: "".concat(50 - oppositeLength / 2, "%"),
            } })));
}
exports.default = Hand;
Hand.propTypes = {
    angle: prop_types_1.default.number,
    length: propTypes_1.isHandLength,
    name: prop_types_1.default.string.isRequired,
    oppositeLength: propTypes_1.isHandLength,
    width: propTypes_1.isHandWidth,
};
