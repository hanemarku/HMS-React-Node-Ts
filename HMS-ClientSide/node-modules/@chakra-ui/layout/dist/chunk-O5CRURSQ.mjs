import {
  StackItem
} from "./chunk-AMDSPU3E.mjs";
import {
  getDividerStyles,
  getStackStyles,
  selector
} from "./chunk-V4DIVZKN.mjs";

// src/stack/stack.tsx
import {
  chakra,
  forwardRef
} from "@chakra-ui/system";
import { cx } from "@chakra-ui/shared-utils";
import { getValidChildren } from "@chakra-ui/react-children-utils";
import { cloneElement, Fragment, useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Stack = forwardRef((props, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = "0.5rem",
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const direction = isInline ? "row" : directionProp != null ? directionProp : "column";
  const styles = useMemo(
    () => getStackStyles({ direction, spacing }),
    [direction, spacing]
  );
  const dividerStyle = useMemo(
    () => getDividerStyles({ spacing, direction }),
    [spacing, direction]
  );
  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;
  const clones = useMemo(() => {
    const validChildren = getValidChildren(children);
    return shouldUseChildren ? validChildren : validChildren.map((child, index) => {
      const key = typeof child.key !== "undefined" ? child.key : index;
      const isLast = index + 1 === validChildren.length;
      const wrappedChild = /* @__PURE__ */ jsx(StackItem, { children: child }, key);
      const _child = shouldWrapChildren ? wrappedChild : child;
      if (!hasDivider)
        return _child;
      const clonedDivider = cloneElement(
        divider,
        {
          __css: dividerStyle
        }
      );
      const _divider = isLast ? null : clonedDivider;
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        _child,
        _divider
      ] }, key);
    });
  }, [
    divider,
    dividerStyle,
    hasDivider,
    shouldUseChildren,
    shouldWrapChildren,
    children
  ]);
  const _className = cx("chakra-stack", className);
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: styles.flexDirection,
      flexWrap: wrap,
      className: _className,
      __css: hasDivider ? {} : { [selector]: styles[selector] },
      ...rest,
      children: clones
    }
  );
});
Stack.displayName = "Stack";

export {
  Stack
};
