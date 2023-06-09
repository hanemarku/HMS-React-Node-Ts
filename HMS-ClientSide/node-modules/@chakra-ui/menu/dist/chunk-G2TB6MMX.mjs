import {
  useMenuStyles
} from "./chunk-Z6E7Q7NQ.mjs";

// src/menu-divider.tsx
import { chakra } from "@chakra-ui/system";
import { cx } from "@chakra-ui/shared-utils";
import { jsx } from "react/jsx-runtime";
var MenuDivider = (props) => {
  const { className, ...rest } = props;
  const styles = useMenuStyles();
  return /* @__PURE__ */ jsx(
    chakra.hr,
    {
      "aria-orientation": "horizontal",
      className: cx("chakra-menu__divider", className),
      ...rest,
      __css: styles.divider
    }
  );
};
MenuDivider.displayName = "MenuDivider";

export {
  MenuDivider
};
