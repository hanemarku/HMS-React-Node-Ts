"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMarkWidth = exports.isMarkLength = exports.isHandWidth = exports.isOppositeHandLength = exports.isHandLength = void 0;
function isNumberBetween(min, max) {
    return function (props, propName, componentName) {
        var _a = props, _b = propName, value = _a[_b];
        if (typeof value !== 'undefined') {
            if (typeof value !== 'number') {
                return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof value, "` supplied to `").concat(componentName, "`, expected `number`."));
            }
            if (value < min || value > max) {
                return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof value, "` supplied to `").concat(componentName, "`, length must be between ").concat(min, " and ").concat(max, "."));
            }
        }
        // Everything is fine
        return null;
    };
}
exports.isHandLength = isNumberBetween(0, 100);
exports.isOppositeHandLength = isNumberBetween(-100, 100);
function isHandWidth(props, propName, componentName) {
    var _a = props, _b = propName, width = _a[_b];
    if (typeof width !== 'undefined') {
        if (typeof width !== 'number') {
            return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof width, "` supplied to `").concat(componentName, "`, expected `number`."));
        }
        if (width < 0) {
            return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof width, "` supplied to `").concat(componentName, "`, width must be greater or equal to 0."));
        }
    }
    // Everything is fine
    return null;
}
exports.isHandWidth = isHandWidth;
exports.isMarkLength = exports.isHandLength;
exports.isMarkWidth = isHandWidth;
