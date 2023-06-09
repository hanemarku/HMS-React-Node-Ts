"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var propTypes_1 = require("./shared/propTypes");
function Mark(_a) {
    var _b = _a.angle, angle = _b === void 0 ? 0 : _b, _c = _a.length, length = _c === void 0 ? 10 : _c, name = _a.name, _d = _a.width, width = _d === void 0 ? 1 : _d, number = _a.number;
    return (react_1.default.createElement("div", { className: "react-clock__mark react-clock__".concat(name, "-mark"), style: {
            transform: "rotate(".concat(angle, "deg)"),
        } },
        react_1.default.createElement("div", { className: "react-clock__mark__body react-clock__".concat(name, "-mark__body"), style: {
                width: "".concat(width, "px"),
                top: 0,
                bottom: "".concat(100 - length / 2, "%"),
            } }),
        number && (react_1.default.createElement("div", { className: "react-clock__mark__number", style: {
                transform: "rotate(-".concat(angle, "deg)"),
                top: "".concat(length / 2, "%"),
            } }, number))));
}
exports.default = Mark;
Mark.propTypes = {
    angle: prop_types_1.default.number,
    length: propTypes_1.isMarkLength,
    name: prop_types_1.default.string.isRequired,
    number: prop_types_1.default.node,
    width: propTypes_1.isMarkWidth,
};
