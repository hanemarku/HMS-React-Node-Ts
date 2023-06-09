"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var prop_types_1 = __importDefault(require("prop-types"));
var detect_element_overflow_1 = __importDefault(require("detect-element-overflow"));
var tiny_warning_1 = __importDefault(require("tiny-warning"));
var isBrowser = typeof document !== 'undefined';
var isDisplayContentsSupported = isBrowser && 'CSS' in window && 'supports' in window.CSS && CSS.supports('display', 'contents');
var isMutationObserverSupported = isBrowser && 'MutationObserver' in window;
function capitalize(string) {
    return (string.charAt(0).toUpperCase() + string.slice(1));
}
function findScrollContainer(element) {
    var parent = element.parentElement;
    while (parent) {
        var overflow = window.getComputedStyle(parent).overflow;
        if (overflow.split(' ').every(function (o) { return o === 'auto' || o === 'scroll'; })) {
            return parent;
        }
        parent = parent.parentElement;
    }
    return document.documentElement;
}
function alignAxis(_a) {
    var axis = _a.axis, container = _a.container, element = _a.element, invertAxis = _a.invertAxis, secondary = _a.secondary, scrollContainer = _a.scrollContainer, spacing = _a.spacing;
    var style = window.getComputedStyle(element);
    var parent = container.parentElement;
    if (!parent) {
        return;
    }
    var scrollContainerCollisions = (0, detect_element_overflow_1.default)(parent, scrollContainer);
    var documentCollisions = (0, detect_element_overflow_1.default)(parent, document.documentElement);
    var isX = axis === 'x';
    var startProperty = isX ? 'left' : 'top';
    var endProperty = isX ? 'right' : 'bottom';
    var sizeProperty = isX ? 'width' : 'height';
    var overflowStartProperty = "overflow".concat(capitalize(startProperty));
    var overflowEndProperty = "overflow".concat(capitalize(endProperty));
    var scrollProperty = "scroll".concat(capitalize(startProperty));
    var uppercasedSizeProperty = capitalize(sizeProperty);
    var offsetSizeProperty = "offset".concat(uppercasedSizeProperty);
    var clientSizeProperty = "client".concat(uppercasedSizeProperty);
    var minSizeProperty = "min-".concat(sizeProperty);
    var scrollbarWidth = scrollContainer[offsetSizeProperty] - scrollContainer[clientSizeProperty];
    var startSpacing = typeof spacing === 'object' ? spacing[startProperty] : spacing;
    var availableStartSpace = -Math.max(scrollContainerCollisions[overflowStartProperty], documentCollisions[overflowStartProperty] + document.documentElement[scrollProperty]) - startSpacing;
    var endSpacing = typeof spacing === 'object' ? spacing[endProperty] : spacing;
    var availableEndSpace = -Math.max(scrollContainerCollisions[overflowEndProperty], documentCollisions[overflowEndProperty] - document.documentElement[scrollProperty]) -
        endSpacing -
        scrollbarWidth;
    if (secondary) {
        availableStartSpace += parent[clientSizeProperty];
        availableEndSpace += parent[clientSizeProperty];
    }
    var offsetSize = element[offsetSizeProperty];
    function displayStart() {
        element.style[startProperty] = 'auto';
        element.style[endProperty] = secondary ? '0' : '100%';
    }
    function displayEnd() {
        element.style[startProperty] = secondary ? '0' : '100%';
        element.style[endProperty] = 'auto';
    }
    function displayIfFits(availableSpace, display) {
        var fits = offsetSize <= availableSpace;
        if (fits) {
            display();
        }
        return fits;
    }
    function displayStartIfFits() {
        return displayIfFits(availableStartSpace, displayStart);
    }
    function displayEndIfFits() {
        return displayIfFits(availableEndSpace, displayEnd);
    }
    function displayWhereverShrinkedFits() {
        var moreSpaceStart = availableStartSpace > availableEndSpace;
        var rawMinSize = style.getPropertyValue(minSizeProperty);
        var minSize = rawMinSize ? parseInt(rawMinSize, 10) : null;
        function shrinkToSize(size) {
            (0, tiny_warning_1.default)(!minSize || size >= minSize, "<Fit />'s child will not fit anywhere with its current ".concat(minSizeProperty, " of ").concat(minSize, "px."));
            var newSize = Math.max(size, minSize || 0);
            (0, tiny_warning_1.default)(false, "<Fit />'s child needed to have its ".concat(sizeProperty, " decreased to ").concat(newSize, "px."));
            element.style[sizeProperty] = "".concat(newSize, "px");
        }
        if (moreSpaceStart) {
            shrinkToSize(availableStartSpace);
            displayStart();
        }
        else {
            shrinkToSize(availableEndSpace);
            displayEnd();
        }
    }
    var fits;
    if (invertAxis) {
        fits = displayStartIfFits() || displayEndIfFits();
    }
    else {
        fits = displayEndIfFits() || displayStartIfFits();
    }
    if (!fits) {
        displayWhereverShrinkedFits();
    }
}
function alignMainAxis(args) {
    alignAxis(args);
}
function alignSecondaryAxis(args) {
    alignAxis(__assign(__assign({}, args), { axis: args.axis === 'x' ? 'y' : 'x', secondary: true }));
}
function alignBothAxis(args) {
    var invertAxis = args.invertAxis, invertSecondaryAxis = args.invertSecondaryAxis, commonArgs = __rest(args, ["invertAxis", "invertSecondaryAxis"]);
    alignMainAxis(__assign(__assign({}, commonArgs), { invertAxis: invertAxis }));
    alignSecondaryAxis(__assign(__assign({}, commonArgs), { invertAxis: invertSecondaryAxis }));
}
var Fit = /** @class */ (function (_super) {
    __extends(Fit, _super);
    function Fit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fit = function () {
            var _a = _this, scrollContainer = _a.scrollContainer, container = _a.container, element = _a.element;
            if (!scrollContainer || !container || !element) {
                return;
            }
            var elementWidth = element.clientWidth;
            var elementHeight = element.clientHeight;
            // No need to recalculate - already did that for current dimensions
            if (_this.elementWidth === elementWidth && _this.elementHeight === elementHeight) {
                return;
            }
            // Save the dimensions so that we know we don't need to repeat the function if unchanged
            _this.elementWidth = elementWidth;
            _this.elementHeight = elementHeight;
            var parent = container.parentElement;
            // Container was unmounted
            if (!parent) {
                return;
            }
            /**
             * We need to ensure that <Fit />'s child has a absolute position. Otherwise,
             * we wouldn't be able to place the child in the correct position.
             */
            var style = window.getComputedStyle(element);
            var position = style.position;
            if (position !== 'absolute') {
                element.style.position = 'absolute';
            }
            /**
             * We need to ensure that <Fit />'s parent has a relative or absolute position. Otherwise,
             * we wouldn't be able to place the child in the correct position.
             */
            var parentStyle = window.getComputedStyle(parent);
            var parentPosition = parentStyle.position;
            if (parentPosition !== 'relative' && parentPosition !== 'absolute') {
                parent.style.position = 'relative';
            }
            var _b = _this.props, invertAxis = _b.invertAxis, invertSecondaryAxis = _b.invertSecondaryAxis, _c = _b.mainAxis, mainAxis = _c === void 0 ? 'y' : _c, _d = _b.spacing, spacing = _d === void 0 ? 8 : _d;
            alignBothAxis({
                container: container,
                element: element,
                invertAxis: invertAxis,
                invertSecondaryAxis: invertSecondaryAxis,
                axis: mainAxis,
                scrollContainer: scrollContainer,
                spacing: spacing,
            });
        };
        return _this;
    }
    Fit.prototype.componentDidMount = function () {
        var _this = this;
        if (!isDisplayContentsSupported) {
            // eslint-disable-next-line react/no-find-dom-node
            var element = (0, react_dom_1.findDOMNode)(this);
            if (!element || !(element instanceof HTMLElement)) {
                return;
            }
            this.container = element;
            this.element = element;
            this.scrollContainer = findScrollContainer(element);
        }
        this.fit();
        var onMutation = function () {
            _this.fit();
        };
        if (isMutationObserverSupported && this.element) {
            var mutationObserver = new MutationObserver(onMutation);
            mutationObserver.observe(this.element, {
                attributes: true,
                attributeFilter: ['class', 'style'],
            });
        }
    };
    Fit.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        var child = react_1.default.Children.only(children);
        if (isDisplayContentsSupported) {
            return (react_1.default.createElement("span", { ref: function (container) {
                    _this.container = container;
                    var element = container && container.firstElementChild;
                    if (!element || !(element instanceof HTMLElement)) {
                        return;
                    }
                    _this.element = element;
                    _this.scrollContainer = findScrollContainer(element);
                }, style: { display: 'contents' } }, child));
        }
        return child;
    };
    Fit.propTypes = {
        children: prop_types_1.default.node.isRequired,
        invertAxis: prop_types_1.default.bool,
        invertSecondaryAxis: prop_types_1.default.bool,
        mainAxis: prop_types_1.default.oneOf(['x', 'y']),
        spacing: prop_types_1.default.oneOfType([
            prop_types_1.default.number,
            prop_types_1.default.shape({
                bottom: prop_types_1.default.number.isRequired,
                left: prop_types_1.default.number.isRequired,
                right: prop_types_1.default.number.isRequired,
                top: prop_types_1.default.number.isRequired,
            }),
        ]),
    };
    return Fit;
}(react_1.Component));
exports.default = Fit;
