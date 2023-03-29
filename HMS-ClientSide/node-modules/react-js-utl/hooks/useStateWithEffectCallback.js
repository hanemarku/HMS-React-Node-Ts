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
import { useEffect, useState, useRef, useCallback } from "react";
import { randomString, isUndefined } from "js-utl";
import LQueue from "linked-queue";
import usePOJOState from "./usePOJOState";
import useShallowEqualMemo from "./useShallowEqualMemo";
import useLazyRef from "./useLazyRef";
/**
 * @type {Function}
 */

var defaultOnStateUpdate = function defaultOnStateUpdate(_ref) {
  var newState = _ref.newState;
  return newState;
};
/**
 * Return false by default, for non-POJO state, bail out only if the new state is the same as the previous state.
 *
 * @type {Function}
 */


var defaultOnHasBailedOut = function defaultOnHasBailedOut(_ref2) {
  var prevState = _ref2.prevState,
      newState = _ref2.newState;
  return newState === prevState;
};
/**
 * Hook used internally for all hooks allowing to set state with a `setState` callback
 * (`useStateWithEffectCallback`, `useStateWithLayoutEffectCallback`, `usePOJOStateWithEffectCallback`, `usePOJOStateWithLayoutEffectCallback`).
 *
 * @type {Function}
 */


export var useStateWithSetStateCallback = function useStateWithSetStateCallback(_ref3) {
  var initialState = _ref3.initialState,
      useEffect = _ref3.useEffect,
      _ref3$onStateUpdate = _ref3.onStateUpdate,
      onStateUpdate = _ref3$onStateUpdate === void 0 ? defaultOnStateUpdate : _ref3$onStateUpdate,
      _ref3$onHasBailedOut = _ref3.onHasBailedOut,
      onHasBailedOut = _ref3$onHasBailedOut === void 0 ? defaultOnHasBailedOut : _ref3$onHasBailedOut;
  var counterRef = useRef([]);
  var randomValueCallback = useCallback(function () {
    counterRef.current++;
    counterRef.current = counterRef.current % Number.MAX_SAFE_INTEGER;
    return "".concat(randomString(), "@").concat(counterRef.current);
  }, []);

  var _usePOJOState = usePOJOState(function () {
    return {
      state: typeof initialState === "function" ? initialState.apply(void 0, arguments) : initialState,
      rand: randomValueCallback()
    };
  }),
      _usePOJOState2 = _slicedToArray(_usePOJOState, 2),
      derivedState = _usePOJOState2[0],
      setDerivedState = _usePOJOState2[1];

  var state = useShallowEqualMemo(derivedState.state);
  var callbacksQueueRef = useLazyRef(function () {
    return new LQueue();
  });
  useEffect(function () {
    var len = callbacksQueueRef.current.length;

    for (var i = 0; i < len; i++) {
      var callback = callbacksQueueRef.current.dequeue();
      callback(state);
    }
  }, [derivedState.rand, state, callbacksQueueRef]);
  var setStateWithCallback = useCallback(function (newStateUpdate) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;

    var stateUpdate = function stateUpdate(derivedState) {
      var update = null;
      var prevState = derivedState.state;
      var newState;

      if (typeof newStateUpdate === "function") {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        newState = newStateUpdate.apply(void 0, [prevState].concat(args));
      } else {
        newState = newStateUpdate;
      }

      var hasBailedOut = onHasBailedOut({
        prevState: prevState,
        newState: newState
      });
      var hasCallback = !isUndefined(callback);

      if (hasBailedOut) {
        if (hasCallback) {
          // State update has bailed out, but there is a "setState" callback to execute.
          // Execute the callback right away with the previous state.
          callback(prevState);
        }
      } else {
        update = {
          state: onStateUpdate({
            prevState: prevState,
            newState: newState
          })
        };

        if (hasCallback) {
          // There is a state update and a "setState" callback to execute.
          // Enqueue the callback to execute it later with the updated state in the effect when the state has been updated.
          callbacksQueueRef.current.enqueue(callback);
          update.rand = randomValueCallback();
        }
      }

      return update;
    };

    return setDerivedState(stateUpdate);
  }, [setDerivedState, randomValueCallback, callbacksQueueRef, onStateUpdate, onHasBailedOut]);
  return [state, setStateWithCallback];
};
/**
 * Hook to use a state with a `setState` function receiving a callback as its second parameter
 * called in an effect after the state change is performed.
 *
 * @param {*|Function} initialState The initial state or a lazy callback returning the initial state.
 * @return {Array} A tuple of two values, current state and callback to set state,
 *                 like the one returned by the "useState" hook.
 *
 *                 The callback to set state may receive an updater function which will receive
 *                 the previous state as argument and must return the next state.
 *
 *                 The callback to set state may also receive a callback as its second parameter,
 *                 which is called in an effect after the state change is performed.
 */

export default function useStateWithEffectCallback(initialState) {
  return useStateWithSetStateCallback({
    initialState: initialState,
    useState: useState,
    useEffect: useEffect
  });
}
//# sourceMappingURL=useStateWithEffectCallback.js.map