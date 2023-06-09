import {
  useStatStyles
} from "./chunk-RQ72AXHY.mjs";

// src/stat-number.tsx
import { cx } from "@chakra-ui/shared-utils";
import { chakra, forwardRef } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var StatNumber = forwardRef(function StatNumber2(props, ref) {
  const styles = useStatStyles();
  return /* @__PURE__ */ jsx(
    chakra.dd,
    {
      ref,
      ...props,
      className: cx("chakra-stat__number", props.className),
      __css: {
        ...styles.number,
        fontFeatureSettings: "pnum",
        fontVariantNumeric: "proportional-nums"
      }
    }
  );
});
StatNumber.displayName = "StatNumber";

export {
  StatNumber
};
