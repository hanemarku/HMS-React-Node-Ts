import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import areArraysEqual from '../utils/areArraysEqual';

/**
 * Gets the current state. If the selectedValue is controlled,
 * the `value` prop is the source of truth instead of the internal state.
 */
function getControlledState(internalState, props) {
  if (props.value !== undefined) {
    return _extends({}, internalState, {
      selectedValue: props.value
    });
  }
  return internalState;
}
function areOptionsEqual(option1, option2, optionComparer) {
  if (option1 === option2) {
    return true;
  }
  if (option1 === null || option2 === null) {
    return false;
  }
  return optionComparer(option1, option2);
}

/**
 * Triggers change event handlers when reducer returns changed state.
 */
function useStateChangeDetection(nextState, internalPreviousState, propsRef, lastActionRef) {
  React.useEffect(() => {
    if (!propsRef.current || lastActionRef.current === null) {
      // Detect changes only if an action has been dispatched.
      return;
    }
    const previousState = getControlledState(internalPreviousState, propsRef.current);
    const {
      multiple,
      optionComparer
    } = propsRef.current;
    if (multiple) {
      const previousSelectedValues = previousState?.selectedValue ?? [];
      const nextSelectedValues = nextState.selectedValue;
      const onChange = propsRef.current.onChange;
      if (!areArraysEqual(nextSelectedValues, previousSelectedValues, optionComparer)) {
        onChange?.(lastActionRef.current.event, nextSelectedValues);
      }
    } else {
      const previousSelectedValue = previousState?.selectedValue;
      const nextSelectedValue = nextState.selectedValue;
      const onChange = propsRef.current.onChange;
      if (!areOptionsEqual(nextSelectedValue, previousSelectedValue, optionComparer)) {
        onChange?.(lastActionRef.current.event, nextSelectedValue);
      }
    }

    // Fires the highlightChange event when reducer returns changed `highlightedValue`.
    if (!areOptionsEqual(internalPreviousState.highlightedValue, nextState.highlightedValue, propsRef.current.optionComparer)) {
      propsRef.current?.onHighlightChange?.(lastActionRef.current.event, nextState.highlightedValue);
    }
    lastActionRef.current = null;
  }, [nextState.selectedValue, nextState.highlightedValue, internalPreviousState, propsRef, lastActionRef]);
}
export default function useControllableReducer(internalReducer, externalReducer, props) {
  const {
    value,
    defaultValue
  } = props;
  const propsRef = React.useRef(props);
  propsRef.current = props;
  const actionRef = React.useRef(null);
  const initialSelectedValue = (value === undefined ? defaultValue : value) ?? (props.multiple ? [] : null);
  const initalState = {
    highlightedValue: null,
    selectedValue: initialSelectedValue
  };
  const combinedReducer = React.useCallback((state, action) => {
    actionRef.current = action;
    if (externalReducer) {
      return externalReducer(getControlledState(state, propsRef.current), action);
    }
    return internalReducer(getControlledState(state, propsRef.current), action);
  }, [externalReducer, internalReducer, propsRef]);
  const [nextState, dispatch] = React.useReducer(combinedReducer, initalState);
  const previousState = React.useRef(initalState);
  React.useEffect(() => {
    previousState.current = nextState;
  }, [previousState, nextState]);
  useStateChangeDetection(nextState, previousState.current, propsRef, actionRef);
  return [getControlledState(nextState, propsRef.current), dispatch];
}