import {
  useCardStyles
} from "./chunk-4DHADF5X.mjs";

// src/card-header.tsx
import { cx } from "@chakra-ui/shared-utils";
import { forwardRef, chakra } from "@chakra-ui/system";
import { jsx } from "react/jsx-runtime";
var CardHeader = forwardRef(
  function CardHeader2(props, ref) {
    const { className, ...rest } = props;
    const styles = useCardStyles();
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__header", className),
        __css: styles.header,
        ...rest
      }
    );
  }
);

export {
  CardHeader
};
