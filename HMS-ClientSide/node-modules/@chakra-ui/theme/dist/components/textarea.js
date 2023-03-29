"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/textarea.ts
var textarea_exports = {};
__export(textarea_exports, {
  textareaTheme: () => textareaTheme
});
module.exports = __toCommonJS(textarea_exports);
var import_styled_system2 = require("@chakra-ui/styled-system");

// src/components/input.ts
var import_anatomy = require("@chakra-ui/anatomy");
var import_styled_system = require("@chakra-ui/styled-system");
var import_theme_tools = require("@chakra-ui/theme-tools");
var { definePartsStyle, defineMultiStyleConfig } = (0, import_styled_system.createMultiStyleConfigHelpers)(import_anatomy.inputAnatomy.keys);
var baseStyle = definePartsStyle({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
});
var size = {
  lg: (0, import_styled_system.defineStyle)({
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md"
  }),
  md: (0, import_styled_system.defineStyle)({
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md"
  }),
  sm: (0, import_styled_system.defineStyle)({
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm"
  }),
  xs: (0, import_styled_system.defineStyle)({
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm"
  })
};
var sizes = {
  lg: definePartsStyle({
    field: size.lg,
    addon: size.lg
  }),
  md: definePartsStyle({
    field: size.md,
    addon: size.md
  }),
  sm: definePartsStyle({
    field: size.sm,
    addon: size.sm
  }),
  xs: definePartsStyle({
    field: size.xs,
    addon: size.xs
  })
};
function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || (0, import_theme_tools.mode)("blue.500", "blue.300")(props),
    errorBorderColor: ec || (0, import_theme_tools.mode)("red.500", "red.300")(props)
  };
}
var variantOutline = definePartsStyle((props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: (0, import_theme_tools.mode)("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: (0, import_theme_tools.getColor)(theme, ec),
        boxShadow: `0 0 0 1px ${(0, import_theme_tools.getColor)(theme, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: (0, import_theme_tools.getColor)(theme, fc),
        boxShadow: `0 0 0 1px ${(0, import_theme_tools.getColor)(theme, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: (0, import_theme_tools.mode)("inherit", "whiteAlpha.50")(props),
      bg: (0, import_theme_tools.mode)("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled = definePartsStyle((props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: (0, import_theme_tools.mode)("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: (0, import_theme_tools.mode)("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: (0, import_theme_tools.getColor)(theme, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: (0, import_theme_tools.getColor)(theme, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: (0, import_theme_tools.mode)("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle((props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: (0, import_theme_tools.getColor)(theme, ec),
        boxShadow: `0px 1px 0px 0px ${(0, import_theme_tools.getColor)(theme, ec)}`
      },
      _focusVisible: {
        borderColor: (0, import_theme_tools.getColor)(theme, fc),
        boxShadow: `0px 1px 0px 0px ${(0, import_theme_tools.getColor)(theme, fc)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
});
var variantUnstyled = definePartsStyle({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
});
var variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled
};
var inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// src/components/textarea.ts
var _a;
var baseStyle2 = (0, import_styled_system2.defineStyle)({
  ...(_a = inputTheme.baseStyle) == null ? void 0 : _a.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
});
var _a2, _b;
var variants2 = {
  outline: (0, import_styled_system2.defineStyle)(
    (props) => {
      var _a4, _b3;
      return (_b3 = (_a4 = inputTheme.variants) == null ? void 0 : _a4.outline(props).field) != null ? _b3 : {};
    }
  ),
  flushed: (0, import_styled_system2.defineStyle)(
    (props) => {
      var _a4, _b3;
      return (_b3 = (_a4 = inputTheme.variants) == null ? void 0 : _a4.flushed(props).field) != null ? _b3 : {};
    }
  ),
  filled: (0, import_styled_system2.defineStyle)(
    (props) => {
      var _a4, _b3;
      return (_b3 = (_a4 = inputTheme.variants) == null ? void 0 : _a4.filled(props).field) != null ? _b3 : {};
    }
  ),
  unstyled: (_b = (_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled.field) != null ? _b : {}
};
var _a3, _b2, _c, _d, _e, _f, _g, _h;
var sizes2 = {
  xs: (_b2 = (_a3 = inputTheme.sizes) == null ? void 0 : _a3.xs.field) != null ? _b2 : {},
  sm: (_d = (_c = inputTheme.sizes) == null ? void 0 : _c.sm.field) != null ? _d : {},
  md: (_f = (_e = inputTheme.sizes) == null ? void 0 : _e.md.field) != null ? _f : {},
  lg: (_h = (_g = inputTheme.sizes) == null ? void 0 : _g.lg.field) != null ? _h : {}
};
var textareaTheme = (0, import_styled_system2.defineStyleConfig)({
  baseStyle: baseStyle2,
  sizes: sizes2,
  variants: variants2,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  textareaTheme
});
