function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * Copyright (c) 2022 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
import { useEffect, useCallback, useState } from "react";
import { throttle, debounce, hasHorizontalScrollbar, hasVerticalScrollbar } from "js-utl";
import useEventListener from "@use-it/event-listener";
/**
 * @type {Function}
 */

var detect = function detect(_ref) {
  var ref = _ref.ref,
      isScrollable = _ref.isScrollable,
      setIsScrollable = _ref.setIsScrollable,
      shouldDetectHorizontallyScrollable = _ref.shouldDetectHorizontallyScrollable;

  if (ref.current) {
    var hasScrollbar = shouldDetectHorizontallyScrollable ? hasHorizontalScrollbar(ref.current) : hasVerticalScrollbar(ref.current);

    if (hasScrollbar && !isScrollable) {
      setIsScrollable(true);
    } else if (!hasScrollbar && isScrollable) {
      setIsScrollable(false);
    }
  }
};
/**
 * @type {Function}
 */


var throttledDetect = throttle(detect, 100);
/**
 * @type {Function}
 */

var debouncedDetect = debounce(detect, 110);

function useDetectScrollablePrivate(ref) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$detectOnResize = _ref2.detectOnResize,
      detectOnResize = _ref2$detectOnResize === void 0 ? true : _ref2$detectOnResize,
      _ref2$shouldDetectHor = _ref2.shouldDetectHorizontallyScrollable,
      shouldDetectHorizontallyScrollable = _ref2$shouldDetectHor === void 0 ? false : _ref2$shouldDetectHor;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isScrollable = _useState2[0],
      setIsScrollable = _useState2[1];

  var detectIfScrollable = useCallback(function () {
    detect({
      ref: ref,
      isScrollable: isScrollable,
      setIsScrollable: setIsScrollable,
      shouldDetectHorizontallyScrollable: shouldDetectHorizontallyScrollable
    });
  }, [ref, isScrollable, shouldDetectHorizontallyScrollable]);
  useEffect(function () {
    detectIfScrollable();
  });
  useEffect(function () {
    if (ref.current && window.ResizeObserver) {
      var element = ref.current;
      var resizeObserver = new ResizeObserver(function () {
        detectIfScrollable();
      });
      resizeObserver.observe(ref.current);
      return function () {
        element && resizeObserver.unobserve(element);
        resizeObserver.disconnect();
      };
    }
  }, [ref, detectIfScrollable]);

  var _ref3 = detectOnResize ? ["resize", function () {
    throttledDetect({
      ref: ref,
      isScrollable: isScrollable,
      setIsScrollable: setIsScrollable,
      shouldDetectHorizontallyScrollable: shouldDetectHorizontallyScrollable
    });
    debouncedDetect({
      ref: ref,
      isScrollable: isScrollable,
      setIsScrollable: setIsScrollable,
      shouldDetectHorizontallyScrollable: shouldDetectHorizontallyScrollable
    });
  }] : [void 0, function () {}],
      _ref4 = _slicedToArray(_ref3, 2),
      eventName = _ref4[0],
      listener = _ref4[1];

  useEventListener(eventName, listener);
  return isScrollable;
}
/**
 * Hook to determine if an element is scrollable.
 *
 * @param {Object} ref A React ref (e.g. returned by `useRef()`) for the underlying element.
 * @param {Object} [options] Options.
 * @param {boolean} [options.detectOnResize] True to detect the scrollbars also when the window is resized (default),
 *                                           false otherwise.
 * @return {Object} An object with two properties:
 *
 *                      - isVerticallyScrollable (boolean): True if the element is vertically scrollable, false otherwise.
 *                      - isHorizontallyScrollable (boolean): True if the element is horizontally scrollable, false otherwise.
 *
 */


export default function useDetectScrollable(ref) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref5$detectOnResize = _ref5.detectOnResize,
      detectOnResize = _ref5$detectOnResize === void 0 ? true : _ref5$detectOnResize;

  var isVerticallyScrollable = useDetectScrollablePrivate(ref, {
    detectOnResize: detectOnResize
  });
  var isHorizontallyScrollable = useDetectScrollablePrivate(ref, {
    detectOnResize: detectOnResize,
    shouldDetectHorizontallyScrollable: true
  });
  return {
    isVerticallyScrollable: isVerticallyScrollable,
    isHorizontallyScrollable: isHorizontallyScrollable
  };
}
/**
 * Hook to determine if an element is vertically scrollable.
 *
 * @param {Object} ref A React ref (e.g. returned by `useRef()`) for the underlying element.
 * @param {Object} [options] Options.
 * @param {boolean} [options.detectOnResize] True to detect the scrollbars also when the window is resized (default),
 *                                           false otherwise.
 * @return {boolean} True if the element is vertically scrollable, false otherwise.
 */

export function useDetectVerticallyScrollable(ref) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref6$detectOnResize = _ref6.detectOnResize,
      detectOnResize = _ref6$detectOnResize === void 0 ? true : _ref6$detectOnResize;

  return useDetectScrollablePrivate(ref, {
    detectOnResize: detectOnResize
  });
}
/**
 * Hook to determine if an element is horizontally scrollable.
 *
 * @param {Object} ref A React ref (e.g. returned by `useRef()`) for the underlying element.
 * @param {Object} [options] Options.
 * @param {boolean} [options.detectOnResize] True to detect the scrollbars also when the window is resized (default),
 *                                           false otherwise.
 * @return {Object} True if the element is horizontally scrollable, false otherwise.
 */

export function useDetectHorizontallyScrollable(ref) {
  var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref7$detectOnResize = _ref7.detectOnResize,
      detectOnResize = _ref7$detectOnResize === void 0 ? true : _ref7$detectOnResize;

  return useDetectScrollablePrivate(ref, {
    detectOnResize: detectOnResize,
    shouldDetectHorizontallyScrollable: true
  });
}
//# sourceMappingURL=useDetectScrollable.js.map