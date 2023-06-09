import {
  useTableStyles
} from "./chunk-B3MS3L3D.mjs";

// src/td.tsx
import { chakra, forwardRef } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var Td = forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles();
    return /* @__PURE__ */ jsx(
      chakra.td,
      {
        ...rest,
        ref,
        __css: styles.td,
        "data-is-numeric": isNumeric
      }
    );
  }
);

export {
  Td
};
