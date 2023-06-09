// src/menu-icon.tsx
import { chakra } from "@chakra-ui/system";
import { cx } from "@chakra-ui/shared-utils";
import { Children, cloneElement, isValidElement } from "react";
import { jsx } from "react/jsx-runtime";
var MenuIcon = (props) => {
  const { className, children, ...rest } = props;
  const child = Children.only(children);
  const clone = isValidElement(child) ? cloneElement(child, {
    focusable: "false",
    "aria-hidden": true,
    className: cx("chakra-menu__icon", child.props.className)
  }) : null;
  const _className = cx("chakra-menu__icon-wrapper", className);
  return /* @__PURE__ */ jsx(
    chakra.span,
    {
      className: _className,
      ...rest,
      __css: {
        flexShrink: 0
      },
      children: clone
    }
  );
};
MenuIcon.displayName = "MenuIcon";

export {
  MenuIcon
};
