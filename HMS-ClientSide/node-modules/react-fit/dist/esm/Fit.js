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
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import detectElementOverflow from 'detect-element-overflow';
import warning from 'tiny-warning';
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
    var scrollContainerCollisions = detectElementOverflow(parent, scrollContainer);
    var documentCollisions = detectElementOverflow(parent, document.documentElement);
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
            warning(!minSize || size >= minSize, "<Fit />'s child will not fit anywhere with its current ".concat(minSizeProperty, " of ").concat(minSize, "px."));
            var newSize = Math.max(size, minSize || 0);
            warning(false, "<Fit />'s child needed to have its ".concat(sizeProperty, " decreased to ").concat(newSize, "px."));
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
            var element = findDOMNode(this);
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
        var child = React.Children.only(children);
        if (isDisplayContentsSupported) {
            return (React.createElement("span", { ref: function (container) {
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
        children: PropTypes.node.isRequired,
        invertAxis: PropTypes.bool,
        invertSecondaryAxis: PropTypes.bool,
        mainAxis: PropTypes.oneOf(['x', 'y']),
        spacing: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.shape({
                bottom: PropTypes.number.isRequired,
                left: PropTypes.number.isRequired,
                right: PropTypes.number.isRequired,
                top: PropTypes.number.isRequired,
            }),
        ]),
    };
    return Fit;
}(Component));
export default Fit;
