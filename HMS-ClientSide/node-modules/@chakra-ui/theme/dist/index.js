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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  baseTheme: () => baseTheme,
  default: () => src_default,
  isChakraTheme: () => isChakraTheme,
  requiredChakraThemeKeys: () => requiredChakraThemeKeys,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);

// src/components/accordion.ts
var import_anatomy = require("@chakra-ui/anatomy");
var import_styled_system = require("@chakra-ui/styled-system");
var { definePartsStyle, defineMultiStyleConfig } = (0, import_styled_system.createMultiStyleConfigHelpers)(import_anatomy.accordionAnatomy.keys);
var baseStyleContainer = (0, import_styled_system.defineStyle)({
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
});
var baseStyleButton = (0, import_styled_system.defineStyle)({
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
});
var baseStylePanel = (0, import_styled_system.defineStyle)({
  pt: "2",
  px: "4",
  pb: "5"
});
var baseStyleIcon = (0, import_styled_system.defineStyle)({
  fontSize: "1.25em"
});
var baseStyle = definePartsStyle({
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon
});
var accordionTheme = defineMultiStyleConfig({ baseStyle });

// src/components/alert.ts
var import_anatomy2 = require("@chakra-ui/anatomy");
var import_styled_system2 = require("@chakra-ui/styled-system");
var import_theme_tools = require("@chakra-ui/theme-tools");
var { definePartsStyle: definePartsStyle2, defineMultiStyleConfig: defineMultiStyleConfig2 } = (0, import_styled_system2.createMultiStyleConfigHelpers)(import_anatomy2.alertAnatomy.keys);
var $fg = (0, import_styled_system2.cssVar)("alert-fg");
var $bg = (0, import_styled_system2.cssVar)("alert-bg");
var baseStyle2 = definePartsStyle2({
  container: {
    bg: $bg.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function getBg(props) {
  const { theme: theme2, colorScheme: c } = props;
  const darkBg = (0, import_theme_tools.transparentize)(`${c}.200`, 0.16)(theme2);
  return {
    light: `colors.${c}.100`,
    dark: darkBg
  };
}
var variantSubtle = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg.variable]: bg.dark
      }
    }
  };
});
var variantLeftAccent = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg.variable]: bg.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $fg.reference
    }
  };
});
var variantTopAccent = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.500`,
      [$bg.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg.variable]: bg.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $fg.reference
    }
  };
});
var variantSolid = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      [$fg.variable]: `colors.white`,
      [$bg.variable]: `colors.${c}.500`,
      _dark: {
        [$fg.variable]: `colors.gray.900`,
        [$bg.variable]: `colors.${c}.200`
      },
      color: $fg.reference
    }
  };
});
var variants = {
  subtle: variantSubtle,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid
};
var alertTheme = defineMultiStyleConfig2({
  baseStyle: baseStyle2,
  variants,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
});

// src/components/avatar.ts
var import_anatomy3 = require("@chakra-ui/anatomy");
var import_styled_system3 = require("@chakra-ui/styled-system");
var import_theme_tools2 = require("@chakra-ui/theme-tools");

// src/foundations/spacing.ts
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};

// src/foundations/sizes.ts
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes = {
  ...spacing,
  ...largeSizes,
  container
};
var sizes_default = sizes;

// src/utils/run-if-fn.ts
var isFunction = (value) => typeof value === "function";
function runIfFn(valueOrFn, ...args) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

// src/components/avatar.ts
var { definePartsStyle: definePartsStyle3, defineMultiStyleConfig: defineMultiStyleConfig3 } = (0, import_styled_system3.createMultiStyleConfigHelpers)(import_anatomy3.avatarAnatomy.keys);
var $border = (0, import_styled_system3.cssVar)("avatar-border-color");
var $bg2 = (0, import_styled_system3.cssVar)("avatar-bg");
var baseStyleBadge = (0, import_styled_system3.defineStyle)({
  borderRadius: "full",
  border: "0.2em solid",
  [$border.variable]: "white",
  _dark: {
    [$border.variable]: "colors.gray.800"
  },
  borderColor: $border.reference
});
var baseStyleExcessLabel = (0, import_styled_system3.defineStyle)({
  [$bg2.variable]: "colors.gray.200",
  _dark: {
    [$bg2.variable]: "colors.whiteAlpha.400"
  },
  bgColor: $bg2.reference
});
var $avatarBg = (0, import_styled_system3.cssVar)("avatar-background");
var baseStyleContainer2 = (0, import_styled_system3.defineStyle)((props) => {
  const { name, theme: theme2 } = props;
  const bg = name ? (0, import_theme_tools2.randomColor)({ string: name }) : "colors.gray.400";
  const isBgDark = (0, import_theme_tools2.isDark)(bg)(theme2);
  let color = "white";
  if (!isBgDark)
    color = "gray.800";
  return {
    bg: $avatarBg.reference,
    "&:not([data-loaded])": {
      [$avatarBg.variable]: bg
    },
    color,
    [$border.variable]: "colors.white",
    _dark: {
      [$border.variable]: "colors.gray.800"
    },
    borderColor: $border.reference,
    verticalAlign: "top"
  };
});
var baseStyle3 = definePartsStyle3((props) => ({
  badge: runIfFn(baseStyleBadge, props),
  excessLabel: runIfFn(baseStyleExcessLabel, props),
  container: runIfFn(baseStyleContainer2, props)
}));
function getSize(size2) {
  const themeSize = size2 !== "100%" ? sizes_default[size2] : void 0;
  return definePartsStyle3({
    container: {
      width: size2,
      height: size2,
      fontSize: `calc(${themeSize != null ? themeSize : size2} / 2.5)`
    },
    excessLabel: {
      width: size2,
      height: size2
    },
    label: {
      fontSize: `calc(${themeSize != null ? themeSize : size2} / 2.5)`,
      lineHeight: size2 !== "100%" ? themeSize != null ? themeSize : size2 : void 0
    }
  });
}
var sizes2 = {
  "2xs": getSize(4),
  xs: getSize(6),
  sm: getSize(8),
  md: getSize(12),
  lg: getSize(16),
  xl: getSize(24),
  "2xl": getSize(32),
  full: getSize("100%")
};
var avatarTheme = defineMultiStyleConfig3({
  baseStyle: baseStyle3,
  sizes: sizes2,
  defaultProps: { size: "md" }
});

// src/components/badge.ts
var import_styled_system4 = require("@chakra-ui/styled-system");
var import_theme_tools3 = require("@chakra-ui/theme-tools");
var baseStyle4 = (0, import_styled_system4.defineStyle)({
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
});
var $bg3 = (0, import_styled_system4.cssVar)("badge-bg");
var $fg2 = (0, import_styled_system4.cssVar)("badge-color");
var variantSolid2 = (0, import_styled_system4.defineStyle)((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const dark = (0, import_theme_tools3.transparentize)(`${c}.500`, 0.6)(theme2);
  return {
    [$bg3.variable]: `colors.${c}.500`,
    [$fg2.variable]: `colors.white`,
    _dark: {
      [$bg3.variable]: dark,
      [$fg2.variable]: `colors.whiteAlpha.800`
    },
    bg: $bg3.reference,
    color: $fg2.reference
  };
});
var variantSubtle2 = (0, import_styled_system4.defineStyle)((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkBg = (0, import_theme_tools3.transparentize)(`${c}.200`, 0.16)(theme2);
  return {
    [$bg3.variable]: `colors.${c}.100`,
    [$fg2.variable]: `colors.${c}.800`,
    _dark: {
      [$bg3.variable]: darkBg,
      [$fg2.variable]: `colors.${c}.200`
    },
    bg: $bg3.reference,
    color: $fg2.reference
  };
});
var variantOutline = (0, import_styled_system4.defineStyle)((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkColor = (0, import_theme_tools3.transparentize)(`${c}.200`, 0.8)(theme2);
  return {
    [$fg2.variable]: `colors.${c}.500`,
    _dark: {
      [$fg2.variable]: darkColor
    },
    color: $fg2.reference,
    boxShadow: `inset 0 0 0px 1px ${$fg2.reference}`
  };
});
var variants2 = {
  solid: variantSolid2,
  subtle: variantSubtle2,
  outline: variantOutline
};
var badgeTheme = (0, import_styled_system4.defineStyleConfig)({
  baseStyle: baseStyle4,
  variants: variants2,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
});

// src/components/breadcrumb.ts
var import_anatomy4 = require("@chakra-ui/anatomy");
var import_styled_system5 = require("@chakra-ui/styled-system");
var { defineMultiStyleConfig: defineMultiStyleConfig4, definePartsStyle: definePartsStyle4 } = (0, import_styled_system5.createMultiStyleConfigHelpers)(import_anatomy4.breadcrumbAnatomy.keys);
var baseStyleLink = (0, import_styled_system5.defineStyle)({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var baseStyle5 = definePartsStyle4({
  link: baseStyleLink
});
var breadcrumbTheme = defineMultiStyleConfig4({
  baseStyle: baseStyle5
});

// src/components/button.ts
var import_styled_system6 = require("@chakra-ui/styled-system");
var import_theme_tools4 = require("@chakra-ui/theme-tools");
var baseStyle6 = (0, import_styled_system6.defineStyle)({
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
});
var variantGhost = (0, import_styled_system6.defineStyle)((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  if (c === "gray") {
    return {
      color: (0, import_theme_tools4.mode)(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: (0, import_theme_tools4.mode)(`gray.100`, `whiteAlpha.200`)(props)
      },
      _active: { bg: (0, import_theme_tools4.mode)(`gray.200`, `whiteAlpha.300`)(props) }
    };
  }
  const darkHoverBg = (0, import_theme_tools4.transparentize)(`${c}.200`, 0.12)(theme2);
  const darkActiveBg = (0, import_theme_tools4.transparentize)(`${c}.200`, 0.24)(theme2);
  return {
    color: (0, import_theme_tools4.mode)(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: (0, import_theme_tools4.mode)(`${c}.50`, darkHoverBg)(props)
    },
    _active: {
      bg: (0, import_theme_tools4.mode)(`${c}.100`, darkActiveBg)(props)
    }
  };
});
var variantOutline2 = (0, import_styled_system6.defineStyle)((props) => {
  const { colorScheme: c } = props;
  const borderColor = (0, import_theme_tools4.mode)(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...runIfFn(variantGhost, props)
  };
});
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid3 = (0, import_styled_system6.defineStyle)((props) => {
  var _a8;
  const { colorScheme: c } = props;
  if (c === "gray") {
    const bg2 = (0, import_theme_tools4.mode)(`gray.100`, `whiteAlpha.200`)(props);
    return {
      bg: bg2,
      _hover: {
        bg: (0, import_theme_tools4.mode)(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg: bg2
        }
      },
      _active: { bg: (0, import_theme_tools4.mode)(`gray.300`, `whiteAlpha.400`)(props) }
    };
  }
  const {
    bg = `${c}.500`,
    color = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`
  } = (_a8 = accessibleColorMap[c]) != null ? _a8 : {};
  const background = (0, import_theme_tools4.mode)(bg, `${c}.200`)(props);
  return {
    bg: background,
    color: (0, import_theme_tools4.mode)(color, `gray.800`)(props),
    _hover: {
      bg: (0, import_theme_tools4.mode)(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background
      }
    },
    _active: { bg: (0, import_theme_tools4.mode)(activeBg, `${c}.400`)(props) }
  };
});
var variantLink = (0, import_styled_system6.defineStyle)((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: (0, import_theme_tools4.mode)(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: (0, import_theme_tools4.mode)(`${c}.700`, `${c}.500`)(props)
    }
  };
});
var variantUnstyled = (0, import_styled_system6.defineStyle)({
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
});
var variants3 = {
  ghost: variantGhost,
  outline: variantOutline2,
  solid: variantSolid3,
  link: variantLink,
  unstyled: variantUnstyled
};
var sizes3 = {
  lg: (0, import_styled_system6.defineStyle)({
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  }),
  md: (0, import_styled_system6.defineStyle)({
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  }),
  sm: (0, import_styled_system6.defineStyle)({
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  }),
  xs: (0, import_styled_system6.defineStyle)({
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  })
};
var buttonTheme = (0, import_styled_system6.defineStyleConfig)({
  baseStyle: baseStyle6,
  variants: variants3,
  sizes: sizes3,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
});

// src/components/card.ts
var import_anatomy5 = require("@chakra-ui/anatomy");
var import_styled_system7 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle5, defineMultiStyleConfig: defineMultiStyleConfig5 } = (0, import_styled_system7.createMultiStyleConfigHelpers)(import_anatomy5.cardAnatomy.keys);
var $bg4 = (0, import_styled_system7.cssVar)("card-bg");
var $padding = (0, import_styled_system7.cssVar)("card-padding");
var $shadow = (0, import_styled_system7.cssVar)("card-shadow");
var $radius = (0, import_styled_system7.cssVar)("card-radius");
var $border2 = (0, import_styled_system7.cssVar)("card-border-width", "0");
var $borderColor = (0, import_styled_system7.cssVar)("card-border-color");
var baseStyle7 = definePartsStyle5({
  container: {
    [$bg4.variable]: "colors.chakra-body-bg",
    backgroundColor: $bg4.reference,
    boxShadow: $shadow.reference,
    borderRadius: $radius.reference,
    color: "chakra-body-text",
    borderWidth: $border2.reference,
    borderColor: $borderColor.reference
  },
  body: {
    padding: $padding.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: $padding.reference
  },
  footer: {
    padding: $padding.reference
  }
});
var sizes4 = {
  sm: definePartsStyle5({
    container: {
      [$radius.variable]: "radii.base",
      [$padding.variable]: "space.3"
    }
  }),
  md: definePartsStyle5({
    container: {
      [$radius.variable]: "radii.md",
      [$padding.variable]: "space.5"
    }
  }),
  lg: definePartsStyle5({
    container: {
      [$radius.variable]: "radii.xl",
      [$padding.variable]: "space.7"
    }
  })
};
var variants4 = {
  elevated: definePartsStyle5({
    container: {
      [$shadow.variable]: "shadows.base",
      _dark: {
        [$bg4.variable]: "colors.gray.700"
      }
    }
  }),
  outline: definePartsStyle5({
    container: {
      [$border2.variable]: "1px",
      [$borderColor.variable]: "colors.chakra-border-color"
    }
  }),
  filled: definePartsStyle5({
    container: {
      [$bg4.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [$padding.variable]: 0
    },
    header: {
      [$padding.variable]: 0
    },
    footer: {
      [$padding.variable]: 0
    }
  }
};
var cardTheme = defineMultiStyleConfig5({
  baseStyle: baseStyle7,
  variants: variants4,
  sizes: sizes4,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
});

// src/components/checkbox.ts
var import_anatomy6 = require("@chakra-ui/anatomy");
var import_styled_system8 = require("@chakra-ui/styled-system");
var import_theme_tools5 = require("@chakra-ui/theme-tools");
var { definePartsStyle: definePartsStyle6, defineMultiStyleConfig: defineMultiStyleConfig6 } = (0, import_styled_system8.createMultiStyleConfigHelpers)(import_anatomy6.checkboxAnatomy.keys);
var $size = (0, import_styled_system8.cssVar)("checkbox-size");
var baseStyleControl = (0, import_styled_system8.defineStyle)((props) => {
  const { colorScheme: c } = props;
  return {
    w: $size.reference,
    h: $size.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: (0, import_theme_tools5.mode)(`${c}.500`, `${c}.200`)(props),
      borderColor: (0, import_theme_tools5.mode)(`${c}.500`, `${c}.200`)(props),
      color: (0, import_theme_tools5.mode)("white", "gray.900")(props),
      _hover: {
        bg: (0, import_theme_tools5.mode)(`${c}.600`, `${c}.300`)(props),
        borderColor: (0, import_theme_tools5.mode)(`${c}.600`, `${c}.300`)(props)
      },
      _disabled: {
        borderColor: (0, import_theme_tools5.mode)("gray.200", "transparent")(props),
        bg: (0, import_theme_tools5.mode)("gray.200", "whiteAlpha.300")(props),
        color: (0, import_theme_tools5.mode)("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: (0, import_theme_tools5.mode)(`${c}.500`, `${c}.200`)(props),
      borderColor: (0, import_theme_tools5.mode)(`${c}.500`, `${c}.200`)(props),
      color: (0, import_theme_tools5.mode)("white", "gray.900")(props)
    },
    _disabled: {
      bg: (0, import_theme_tools5.mode)("gray.100", "whiteAlpha.100")(props),
      borderColor: (0, import_theme_tools5.mode)("gray.100", "transparent")(props)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: (0, import_theme_tools5.mode)("red.500", "red.300")(props)
    }
  };
});
var baseStyleContainer3 = (0, import_styled_system8.defineStyle)({
  _disabled: { cursor: "not-allowed" }
});
var baseStyleLabel = (0, import_styled_system8.defineStyle)({
  userSelect: "none",
  _disabled: { opacity: 0.4 }
});
var baseStyleIcon2 = (0, import_styled_system8.defineStyle)({
  transitionProperty: "transform",
  transitionDuration: "normal"
});
var baseStyle8 = definePartsStyle6((props) => ({
  icon: baseStyleIcon2,
  container: baseStyleContainer3,
  control: runIfFn(baseStyleControl, props),
  label: baseStyleLabel
}));
var sizes5 = {
  sm: definePartsStyle6({
    control: { [$size.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: definePartsStyle6({
    control: { [$size.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: definePartsStyle6({
    control: { [$size.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
};
var checkboxTheme = defineMultiStyleConfig6({
  baseStyle: baseStyle8,
  sizes: sizes5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// src/components/close-button.ts
var import_styled_system9 = require("@chakra-ui/styled-system");
var import_theme_tools6 = require("@chakra-ui/theme-tools");
var $size2 = (0, import_theme_tools6.cssVar)("close-button-size");
var $bg5 = (0, import_theme_tools6.cssVar)("close-button-bg");
var baseStyle9 = (0, import_styled_system9.defineStyle)({
  w: [$size2.reference],
  h: [$size2.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [$bg5.variable]: "colors.blackAlpha.100",
    _dark: {
      [$bg5.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg5.variable]: "colors.blackAlpha.200",
    _dark: {
      [$bg5.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: $bg5.reference
});
var sizes6 = {
  lg: (0, import_styled_system9.defineStyle)({
    [$size2.variable]: "sizes.10",
    fontSize: "md"
  }),
  md: (0, import_styled_system9.defineStyle)({
    [$size2.variable]: "sizes.8",
    fontSize: "xs"
  }),
  sm: (0, import_styled_system9.defineStyle)({
    [$size2.variable]: "sizes.6",
    fontSize: "2xs"
  })
};
var closeButtonTheme = (0, import_styled_system9.defineStyleConfig)({
  baseStyle: baseStyle9,
  sizes: sizes6,
  defaultProps: {
    size: "md"
  }
});

// src/components/code.ts
var import_styled_system10 = require("@chakra-ui/styled-system");
var { variants: variants5, defaultProps } = badgeTheme;
var baseStyle10 = (0, import_styled_system10.defineStyle)({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
});
var codeTheme = (0, import_styled_system10.defineStyleConfig)({
  baseStyle: baseStyle10,
  variants: variants5,
  defaultProps
});

// src/components/container.ts
var import_styled_system11 = require("@chakra-ui/styled-system");
var baseStyle11 = (0, import_styled_system11.defineStyle)({
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
});
var containerTheme = (0, import_styled_system11.defineStyleConfig)({
  baseStyle: baseStyle11
});

// src/components/divider.ts
var import_styled_system12 = require("@chakra-ui/styled-system");
var baseStyle12 = (0, import_styled_system12.defineStyle)({
  opacity: 0.6,
  borderColor: "inherit"
});
var variantSolid4 = (0, import_styled_system12.defineStyle)({
  borderStyle: "solid"
});
var variantDashed = (0, import_styled_system12.defineStyle)({
  borderStyle: "dashed"
});
var variants6 = {
  solid: variantSolid4,
  dashed: variantDashed
};
var dividerTheme = (0, import_styled_system12.defineStyleConfig)({
  baseStyle: baseStyle12,
  variants: variants6,
  defaultProps: {
    variant: "solid"
  }
});

// src/components/drawer.ts
var import_anatomy7 = require("@chakra-ui/anatomy");
var import_styled_system13 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle7, defineMultiStyleConfig: defineMultiStyleConfig7 } = (0, import_styled_system13.createMultiStyleConfigHelpers)(import_anatomy7.drawerAnatomy.keys);
var $bg6 = (0, import_styled_system13.cssVar)("drawer-bg");
var $bs = (0, import_styled_system13.cssVar)("drawer-box-shadow");
function getSize2(value) {
  if (value === "full") {
    return definePartsStyle7({
      dialog: { maxW: "100vw", h: "100vh" }
    });
  }
  return definePartsStyle7({
    dialog: { maxW: value }
  });
}
var baseStyleOverlay = (0, import_styled_system13.defineStyle)({
  bg: "blackAlpha.600",
  zIndex: "overlay"
});
var baseStyleDialogContainer = (0, import_styled_system13.defineStyle)({
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
});
var baseStyleDialog = (0, import_styled_system13.defineStyle)((props) => {
  const { isFullHeight } = props;
  return {
    ...isFullHeight && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [$bg6.variable]: "colors.white",
    [$bs.variable]: "shadows.lg",
    _dark: {
      [$bg6.variable]: "colors.gray.700",
      [$bs.variable]: "shadows.dark-lg"
    },
    bg: $bg6.reference,
    boxShadow: $bs.reference
  };
});
var baseStyleHeader = (0, import_styled_system13.defineStyle)({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton = (0, import_styled_system13.defineStyle)({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody = (0, import_styled_system13.defineStyle)({
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
});
var baseStyleFooter = (0, import_styled_system13.defineStyle)({
  px: "6",
  py: "4"
});
var baseStyle13 = definePartsStyle7((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: runIfFn(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter
}));
var sizes7 = {
  xs: getSize2("xs"),
  sm: getSize2("md"),
  md: getSize2("lg"),
  lg: getSize2("2xl"),
  xl: getSize2("4xl"),
  full: getSize2("full")
};
var drawerTheme = defineMultiStyleConfig7({
  baseStyle: baseStyle13,
  sizes: sizes7,
  defaultProps: {
    size: "xs"
  }
});

// src/components/editable.ts
var import_anatomy8 = require("@chakra-ui/anatomy");
var import_styled_system14 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle8, defineMultiStyleConfig: defineMultiStyleConfig8 } = (0, import_styled_system14.createMultiStyleConfigHelpers)(import_anatomy8.editableAnatomy.keys);
var baseStylePreview = (0, import_styled_system14.defineStyle)({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyleInput = (0, import_styled_system14.defineStyle)({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyleTextarea = (0, import_styled_system14.defineStyle)({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyle14 = definePartsStyle8({
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
});
var editableTheme = defineMultiStyleConfig8({
  baseStyle: baseStyle14
});

// src/components/form-control.ts
var import_anatomy9 = require("@chakra-ui/anatomy");
var import_styled_system15 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle9, defineMultiStyleConfig: defineMultiStyleConfig9 } = (0, import_styled_system15.createMultiStyleConfigHelpers)(import_anatomy9.formAnatomy.keys);
var $fg3 = (0, import_styled_system15.cssVar)("form-control-color");
var baseStyleRequiredIndicator = (0, import_styled_system15.defineStyle)({
  marginStart: "1",
  [$fg3.variable]: "colors.red.500",
  _dark: {
    [$fg3.variable]: "colors.red.300"
  },
  color: $fg3.reference
});
var baseStyleHelperText = (0, import_styled_system15.defineStyle)({
  mt: "2",
  [$fg3.variable]: "colors.gray.600",
  _dark: {
    [$fg3.variable]: "colors.whiteAlpha.600"
  },
  color: $fg3.reference,
  lineHeight: "normal",
  fontSize: "sm"
});
var baseStyle15 = definePartsStyle9({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText
});
var formTheme = defineMultiStyleConfig9({
  baseStyle: baseStyle15
});

// src/components/form-error.ts
var import_anatomy10 = require("@chakra-ui/anatomy");
var import_styled_system16 = require("@chakra-ui/styled-system");
var { definePartsStyle: definePartsStyle10, defineMultiStyleConfig: defineMultiStyleConfig10 } = (0, import_styled_system16.createMultiStyleConfigHelpers)(import_anatomy10.formErrorAnatomy.keys);
var $fg4 = (0, import_styled_system16.cssVar)("form-error-color");
var baseStyleText = (0, import_styled_system16.defineStyle)({
  [$fg4.variable]: `colors.red.500`,
  _dark: {
    [$fg4.variable]: `colors.red.300`
  },
  color: $fg4.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
});
var baseStyleIcon3 = (0, import_styled_system16.defineStyle)({
  marginEnd: "0.5em",
  [$fg4.variable]: `colors.red.500`,
  _dark: {
    [$fg4.variable]: `colors.red.300`
  },
  color: $fg4.reference
});
var baseStyle16 = definePartsStyle10({
  text: baseStyleText,
  icon: baseStyleIcon3
});
var formErrorTheme = defineMultiStyleConfig10({
  baseStyle: baseStyle16
});

// src/components/form-label.ts
var import_styled_system17 = require("@chakra-ui/styled-system");
var baseStyle17 = (0, import_styled_system17.defineStyle)({
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
});
var formLabelTheme = (0, import_styled_system17.defineStyleConfig)({
  baseStyle: baseStyle17
});

// src/components/heading.ts
var import_styled_system18 = require("@chakra-ui/styled-system");
var baseStyle18 = (0, import_styled_system18.defineStyle)({
  fontFamily: "heading",
  fontWeight: "bold"
});
var sizes8 = {
  "4xl": (0, import_styled_system18.defineStyle)({
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  }),
  "3xl": (0, import_styled_system18.defineStyle)({
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  }),
  "2xl": (0, import_styled_system18.defineStyle)({
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  }),
  xl: (0, import_styled_system18.defineStyle)({
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  lg: (0, import_styled_system18.defineStyle)({
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  md: (0, import_styled_system18.defineStyle)({
    fontSize: "xl",
    lineHeight: 1.2
  }),
  sm: (0, import_styled_system18.defineStyle)({
    fontSize: "md",
    lineHeight: 1.2
  }),
  xs: (0, import_styled_system18.defineStyle)({
    fontSize: "sm",
    lineHeight: 1.2
  })
};
var headingTheme = (0, import_styled_system18.defineStyleConfig)({
  baseStyle: baseStyle18,
  sizes: sizes8,
  defaultProps: {
    size: "xl"
  }
});

// src/components/input.ts
var import_anatomy11 = require("@chakra-ui/anatomy");
var import_styled_system19 = require("@chakra-ui/styled-system");
var import_theme_tools7 = require("@chakra-ui/theme-tools");
var { definePartsStyle: definePartsStyle11, defineMultiStyleConfig: defineMultiStyleConfig11 } = (0, import_styled_system19.createMultiStyleConfigHelpers)(import_anatomy11.inputAnatomy.keys);
var baseStyle19 = definePartsStyle11({
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
  lg: (0, import_styled_system19.defineStyle)({
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md"
  }),
  md: (0, import_styled_system19.defineStyle)({
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md"
  }),
  sm: (0, import_styled_system19.defineStyle)({
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm"
  }),
  xs: (0, import_styled_system19.defineStyle)({
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm"
  })
};
var sizes9 = {
  lg: definePartsStyle11({
    field: size.lg,
    addon: size.lg
  }),
  md: definePartsStyle11({
    field: size.md,
    addon: size.md
  }),
  sm: definePartsStyle11({
    field: size.sm,
    addon: size.sm
  }),
  xs: definePartsStyle11({
    field: size.xs,
    addon: size.xs
  })
};
function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || (0, import_theme_tools7.mode)("blue.500", "blue.300")(props),
    errorBorderColor: ec || (0, import_theme_tools7.mode)("red.500", "red.300")(props)
  };
}
var variantOutline3 = definePartsStyle11((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: (0, import_theme_tools7.mode)("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: (0, import_theme_tools7.getColor)(theme2, ec),
        boxShadow: `0 0 0 1px ${(0, import_theme_tools7.getColor)(theme2, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: (0, import_theme_tools7.getColor)(theme2, fc),
        boxShadow: `0 0 0 1px ${(0, import_theme_tools7.getColor)(theme2, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: (0, import_theme_tools7.mode)("inherit", "whiteAlpha.50")(props),
      bg: (0, import_theme_tools7.mode)("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled = definePartsStyle11((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: (0, import_theme_tools7.mode)("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: (0, import_theme_tools7.mode)("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: (0, import_theme_tools7.getColor)(theme2, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: (0, import_theme_tools7.getColor)(theme2, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: (0, import_theme_tools7.mode)("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle11((props) => {
  const { theme: theme2 } = props;
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
        borderColor: (0, import_theme_tools7.getColor)(theme2, ec),
        boxShadow: `0px 1px 0px 0px ${(0, import_theme_tools7.getColor)(theme2, ec)}`
      },
      _focusVisible: {
        borderColor: (0, import_theme_tools7.getColor)(theme2, fc),
        boxShadow: `0px 1px 0px 0px ${(0, import_theme_tools7.getColor)(theme2, fc)}`
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
var variantUnstyled2 = definePartsStyle11({
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
var variants7 = {
  outline: variantOutline3,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled2
};
var inputTheme = defineMultiStyleConfig11({
  baseStyle: baseStyle19,
  sizes: sizes9,
  variants: variants7,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// src/components/kbd.ts
var import_styled_system20 = require("@chakra-ui/styled-system");
var $bg7 = (0, import_styled_system20.cssVar)("kbd-bg");
var baseStyle20 = (0, import_styled_system20.defineStyle)({
  [$bg7.variable]: "colors.gray.100",
  _dark: {
    [$bg7.variable]: "colors.whiteAlpha.100"
  },
  bg: $bg7.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
});
var kbdTheme = (0, import_styled_system20.defineStyleConfig)({
  baseStyle: baseStyle20
});

// src/components/link.ts
var import_styled_system21 = require("@chakra-ui/styled-system");
var baseStyle21 = (0, import_styled_system21.defineStyle)({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var linkTheme = (0, import_styled_system21.defineStyleConfig)({
  baseStyle: baseStyle21
});

// src/components/list.ts
var import_anatomy12 = require("@chakra-ui/anatomy");
var import_styled_system22 = require("@chakra-ui/styled-system");
var { defineMultiStyleConfig: defineMultiStyleConfig12, definePartsStyle: definePartsStyle12 } = (0, import_styled_system22.createMultiStyleConfigHelpers)(import_anatomy12.listAnatomy.keys);
var baseStyleIcon4 = (0, import_styled_system22.defineStyle)({
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
});
var baseStyle22 = definePartsStyle12({
  icon: baseStyleIcon4
});
var listTheme = defineMultiStyleConfig12({
  baseStyle: baseStyle22
});

// src/components/menu.ts
var import_anatomy13 = require("@chakra-ui/anatomy");
var import_styled_system23 = require("@chakra-ui/styled-system");
var { defineMultiStyleConfig: defineMultiStyleConfig13, definePartsStyle: definePartsStyle13 } = (0, import_styled_system23.createMultiStyleConfigHelpers)(import_anatomy13.menuAnatomy.keys);
var $bg8 = (0, import_styled_system23.cssVar)("menu-bg");
var $shadow2 = (0, import_styled_system23.cssVar)("menu-shadow");
var baseStyleList = (0, import_styled_system23.defineStyle)({
  [$bg8.variable]: "#fff",
  [$shadow2.variable]: "shadows.sm",
  _dark: {
    [$bg8.variable]: "colors.gray.700",
    [$shadow2.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: $bg8.reference,
  boxShadow: $shadow2.reference
});
var baseStyleItem = (0, import_styled_system23.defineStyle)({
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [$bg8.variable]: "colors.gray.100",
    _dark: {
      [$bg8.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg8.variable]: "colors.gray.200",
    _dark: {
      [$bg8.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [$bg8.variable]: "colors.gray.100",
    _dark: {
      [$bg8.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: $bg8.reference
});
var baseStyleGroupTitle = (0, import_styled_system23.defineStyle)({
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
});
var baseStyleCommand = (0, import_styled_system23.defineStyle)({
  opacity: 0.6
});
var baseStyleDivider = (0, import_styled_system23.defineStyle)({
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
});
var baseStyleButton2 = (0, import_styled_system23.defineStyle)({
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyle23 = definePartsStyle13({
  button: baseStyleButton2,
  list: baseStyleList,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  divider: baseStyleDivider
});
var menuTheme = defineMultiStyleConfig13({
  baseStyle: baseStyle23
});

// src/components/modal.ts
var import_anatomy14 = require("@chakra-ui/anatomy");
var import_styled_system24 = require("@chakra-ui/styled-system");
var import_theme_tools8 = require("@chakra-ui/theme-tools");
var { defineMultiStyleConfig: defineMultiStyleConfig14, definePartsStyle: definePartsStyle14 } = (0, import_styled_system24.createMultiStyleConfigHelpers)(import_anatomy14.modalAnatomy.keys);
var baseStyleOverlay2 = (0, import_styled_system24.defineStyle)({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer2 = (0, import_styled_system24.defineStyle)((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
});
var baseStyleDialog2 = (0, import_styled_system24.defineStyle)((props) => {
  const { scrollBehavior } = props;
  return {
    borderRadius: "md",
    bg: (0, import_theme_tools8.mode)("white", "gray.700")(props),
    color: "inherit",
    my: "16",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    boxShadow: (0, import_theme_tools8.mode)("lg", "dark-lg")(props)
  };
});
var baseStyleHeader2 = (0, import_styled_system24.defineStyle)({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton2 = (0, import_styled_system24.defineStyle)({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody2 = (0, import_styled_system24.defineStyle)((props) => {
  const { scrollBehavior } = props;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
});
var baseStyleFooter2 = (0, import_styled_system24.defineStyle)({
  px: "6",
  py: "4"
});
var baseStyle24 = definePartsStyle14((props) => ({
  overlay: baseStyleOverlay2,
  dialogContainer: runIfFn(baseStyleDialogContainer2, props),
  dialog: runIfFn(baseStyleDialog2, props),
  header: baseStyleHeader2,
  closeButton: baseStyleCloseButton2,
  body: runIfFn(baseStyleBody2, props),
  footer: baseStyleFooter2
}));
function getSize3(value) {
  if (value === "full") {
    return definePartsStyle14({
      dialog: {
        maxW: "100vw",
        minH: "$100vh",
        my: "0",
        borderRadius: "0"
      }
    });
  }
  return definePartsStyle14({
    dialog: { maxW: value }
  });
}
var sizes10 = {
  xs: getSize3("xs"),
  sm: getSize3("sm"),
  md: getSize3("md"),
  lg: getSize3("lg"),
  xl: getSize3("xl"),
  "2xl": getSize3("2xl"),
  "3xl": getSize3("3xl"),
  "4xl": getSize3("4xl"),
  "5xl": getSize3("5xl"),
  "6xl": getSize3("6xl"),
  full: getSize3("full")
};
var modalTheme = defineMultiStyleConfig14({
  baseStyle: baseStyle24,
  sizes: sizes10,
  defaultProps: { size: "md" }
});

// src/components/number-input.ts
var import_anatomy15 = require("@chakra-ui/anatomy");
var import_styled_system25 = require("@chakra-ui/styled-system");
var import_theme_tools9 = require("@chakra-ui/theme-tools");

// src/foundations/typography.ts
var typography = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};
var typography_default = typography;

// src/components/number-input.ts
var { defineMultiStyleConfig: defineMultiStyleConfig15, definePartsStyle: definePartsStyle15 } = (0, import_styled_system25.createMultiStyleConfigHelpers)(import_anatomy15.numberInputAnatomy.keys);
var $stepperWidth = (0, import_theme_tools9.cssVar)("number-input-stepper-width");
var $inputPadding = (0, import_theme_tools9.cssVar)("number-input-input-padding");
var inputPaddingValue = (0, import_theme_tools9.calc)($stepperWidth).add("0.5rem").toString();
var $bg9 = (0, import_theme_tools9.cssVar)("number-input-bg");
var $fg5 = (0, import_theme_tools9.cssVar)("number-input-color");
var $border3 = (0, import_theme_tools9.cssVar)("number-input-border-color");
var baseStyleRoot = (0, import_styled_system25.defineStyle)({
  [$stepperWidth.variable]: "sizes.6",
  [$inputPadding.variable]: inputPaddingValue
});
var baseStyleField = (0, import_styled_system25.defineStyle)(
  (props) => {
    var _a8, _b5;
    return (_b5 = (_a8 = runIfFn(inputTheme.baseStyle, props)) == null ? void 0 : _a8.field) != null ? _b5 : {};
  }
);
var baseStyleStepperGroup = (0, import_styled_system25.defineStyle)({
  width: $stepperWidth.reference
});
var baseStyleStepper = (0, import_styled_system25.defineStyle)({
  borderStart: "1px solid",
  borderStartColor: $border3.reference,
  color: $fg5.reference,
  bg: $bg9.reference,
  [$fg5.variable]: "colors.chakra-body-text",
  [$border3.variable]: "colors.chakra-border-color",
  _dark: {
    [$fg5.variable]: "colors.whiteAlpha.800",
    [$border3.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [$bg9.variable]: "colors.gray.200",
    _dark: {
      [$bg9.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
});
var baseStyle25 = definePartsStyle15((props) => {
  var _a8;
  return {
    root: baseStyleRoot,
    field: (_a8 = runIfFn(baseStyleField, props)) != null ? _a8 : {},
    stepperGroup: baseStyleStepperGroup,
    stepper: baseStyleStepper
  };
});
function getSize4(size2) {
  var _a8, _b5, _c3;
  const sizeStyle = (_a8 = inputTheme.sizes) == null ? void 0 : _a8[size2];
  const radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  const _fontSize = (_c3 = (_b5 = sizeStyle.field) == null ? void 0 : _b5.fontSize) != null ? _c3 : "md";
  const fontSize = typography_default.fontSizes[_fontSize];
  return definePartsStyle15({
    field: {
      ...sizeStyle.field,
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: (0, import_theme_tools9.calc)(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var sizes11 = {
  xs: getSize4("xs"),
  sm: getSize4("sm"),
  md: getSize4("md"),
  lg: getSize4("lg")
};
var numberInputTheme = defineMultiStyleConfig15({
  baseStyle: baseStyle25,
  sizes: sizes11,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});

// src/components/pin-input.ts
var import_styled_system26 = require("@chakra-ui/styled-system");
var _a;
var baseStyle26 = (0, import_styled_system26.defineStyle)({
  ...(_a = inputTheme.baseStyle) == null ? void 0 : _a.field,
  textAlign: "center"
});
var sizes12 = {
  lg: (0, import_styled_system26.defineStyle)({
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  }),
  md: (0, import_styled_system26.defineStyle)({
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  }),
  sm: (0, import_styled_system26.defineStyle)({
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  }),
  xs: (0, import_styled_system26.defineStyle)({
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  })
};
var _a2, _b;
var variants8 = {
  outline: (0, import_styled_system26.defineStyle)(
    (props) => {
      var _a8, _b5, _c3;
      return (_c3 = (_b5 = runIfFn((_a8 = inputTheme.variants) == null ? void 0 : _a8.outline, props)) == null ? void 0 : _b5.field) != null ? _c3 : {};
    }
  ),
  flushed: (0, import_styled_system26.defineStyle)(
    (props) => {
      var _a8, _b5, _c3;
      return (_c3 = (_b5 = runIfFn((_a8 = inputTheme.variants) == null ? void 0 : _a8.flushed, props)) == null ? void 0 : _b5.field) != null ? _c3 : {};
    }
  ),
  filled: (0, import_styled_system26.defineStyle)(
    (props) => {
      var _a8, _b5, _c3;
      return (_c3 = (_b5 = runIfFn((_a8 = inputTheme.variants) == null ? void 0 : _a8.filled, props)) == null ? void 0 : _b5.field) != null ? _c3 : {};
    }
  ),
  unstyled: (_b = (_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled.field) != null ? _b : {}
};
var pinInputTheme = (0, import_styled_system26.defineStyleConfig)({
  baseStyle: baseStyle26,
  sizes: sizes12,
  variants: variants8,
  defaultProps: inputTheme.defaultProps
});

// src/components/popover.ts
var import_anatomy16 = require("@chakra-ui/anatomy");
var import_styled_system27 = require("@chakra-ui/styled-system");
var import_theme_tools10 = require("@chakra-ui/theme-tools");
var { defineMultiStyleConfig: defineMultiStyleConfig16, definePartsStyle: definePartsStyle16 } = (0, import_styled_system27.createMultiStyleConfigHelpers)(import_anatomy16.popoverAnatomy.keys);
var $popperBg = (0, import_theme_tools10.cssVar)("popper-bg");
var $arrowBg = (0, import_theme_tools10.cssVar)("popper-arrow-bg");
var $arrowShadowColor = (0, import_theme_tools10.cssVar)("popper-arrow-shadow-color");
var baseStylePopper = (0, import_styled_system27.defineStyle)({ zIndex: 10 });
var baseStyleContent = (0, import_styled_system27.defineStyle)({
  [$popperBg.variable]: `colors.white`,
  bg: $popperBg.reference,
  [$arrowBg.variable]: $popperBg.reference,
  [$arrowShadowColor.variable]: `colors.gray.200`,
  _dark: {
    [$popperBg.variable]: `colors.gray.700`,
    [$arrowShadowColor.variable]: `colors.whiteAlpha.300`
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
});
var baseStyleHeader3 = (0, import_styled_system27.defineStyle)({
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
});
var baseStyleBody3 = (0, import_styled_system27.defineStyle)({
  px: 3,
  py: 2
});
var baseStyleFooter3 = (0, import_styled_system27.defineStyle)({
  px: 3,
  py: 2,
  borderTopWidth: "1px"
});
var baseStyleCloseButton3 = (0, import_styled_system27.defineStyle)({
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
});
var baseStyle27 = definePartsStyle16({
  popper: baseStylePopper,
  content: baseStyleContent,
  header: baseStyleHeader3,
  body: baseStyleBody3,
  footer: baseStyleFooter3,
  closeButton: baseStyleCloseButton3
});
var popoverTheme = defineMultiStyleConfig16({
  baseStyle: baseStyle27
});

// src/components/progress.ts
var import_anatomy17 = require("@chakra-ui/anatomy");
var import_styled_system28 = require("@chakra-ui/styled-system");
var import_theme_tools11 = require("@chakra-ui/theme-tools");
var { defineMultiStyleConfig: defineMultiStyleConfig17, definePartsStyle: definePartsStyle17 } = (0, import_styled_system28.createMultiStyleConfigHelpers)(import_anatomy17.progressAnatomy.keys);
var filledStyle = (0, import_styled_system28.defineStyle)((props) => {
  const { colorScheme: c, theme: t, isIndeterminate, hasStripe } = props;
  const stripeStyle = (0, import_theme_tools11.mode)(
    (0, import_theme_tools11.generateStripe)(),
    (0, import_theme_tools11.generateStripe)("1rem", "rgba(0,0,0,0.1)")
  )(props);
  const bgColor = (0, import_theme_tools11.mode)(`${c}.500`, `${c}.200`)(props);
  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${(0, import_theme_tools11.getColor)(t, bgColor)} 50%,
    transparent 100%
  )`;
  const addStripe = !isIndeterminate && hasStripe;
  return {
    ...addStripe && stripeStyle,
    ...isIndeterminate ? { bgImage: gradient } : { bgColor }
  };
});
var baseStyleLabel2 = (0, import_styled_system28.defineStyle)({
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
});
var baseStyleTrack = (0, import_styled_system28.defineStyle)((props) => {
  return {
    bg: (0, import_theme_tools11.mode)("gray.100", "whiteAlpha.300")(props)
  };
});
var baseStyleFilledTrack = (0, import_styled_system28.defineStyle)((props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "slow",
    ...filledStyle(props)
  };
});
var baseStyle28 = definePartsStyle17((props) => ({
  label: baseStyleLabel2,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack(props)
}));
var sizes13 = {
  xs: definePartsStyle17({
    track: { h: "1" }
  }),
  sm: definePartsStyle17({
    track: { h: "2" }
  }),
  md: definePartsStyle17({
    track: { h: "3" }
  }),
  lg: definePartsStyle17({
    track: { h: "4" }
  })
};
var progressTheme = defineMultiStyleConfig17({
  sizes: sizes13,
  baseStyle: baseStyle28,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// src/components/radio.ts
var import_anatomy18 = require("@chakra-ui/anatomy");
var import_styled_system29 = require("@chakra-ui/styled-system");
var { defineMultiStyleConfig: defineMultiStyleConfig18, definePartsStyle: definePartsStyle18 } = (0, import_styled_system29.createMultiStyleConfigHelpers)(import_anatomy18.radioAnatomy.keys);
var baseStyleControl2 = (0, import_styled_system29.defineStyle)((props) => {
  var _a8;
  const controlStyle = (_a8 = runIfFn(checkboxTheme.baseStyle, props)) == null ? void 0 : _a8.control;
  return {
    ...controlStyle,
    borderRadius: "full",
    _checked: {
      ...controlStyle == null ? void 0 : controlStyle["_checked"],
      _before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
});
var baseStyle29 = definePartsStyle18((props) => {
  var _a8, _b5, _c3, _d3;
  return {
    label: (_b5 = (_a8 = checkboxTheme).baseStyle) == null ? void 0 : _b5.call(_a8, props).label,
    container: (_d3 = (_c3 = checkboxTheme).baseStyle) == null ? void 0 : _d3.call(_c3, props).container,
    control: baseStyleControl2(props)
  };
});
var sizes14 = {
  md: definePartsStyle18({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: definePartsStyle18({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: definePartsStyle18({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
};
var radioTheme = defineMultiStyleConfig18({
  baseStyle: baseStyle29,
  sizes: sizes14,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// src/components/select.ts
var import_anatomy19 = require("@chakra-ui/anatomy");
var import_styled_system30 = require("@chakra-ui/styled-system");
var { defineMultiStyleConfig: defineMultiStyleConfig19, definePartsStyle: definePartsStyle19 } = (0, import_styled_system30.createMultiStyleConfigHelpers)(import_anatomy19.selectAnatomy.keys);
var $bg10 = (0, import_styled_system30.cssVar)("select-bg");
var _a3;
var baseStyleField2 = (0, import_styled_system30.defineStyle)({
  ...(_a3 = inputTheme.baseStyle) == null ? void 0 : _a3.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: $bg10.reference,
  [$bg10.variable]: "colors.white",
  _dark: {
    [$bg10.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: $bg10.reference
  }
});
var baseStyleIcon5 = (0, import_styled_system30.defineStyle)({
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
});
var baseStyle30 = definePartsStyle19({
  field: baseStyleField2,
  icon: baseStyleIcon5
});
var iconSpacing = (0, import_styled_system30.defineStyle)({
  paddingInlineEnd: "8"
});
var _a4, _b2, _c, _d, _e, _f, _g, _h;
var sizes15 = {
  lg: {
    ...(_a4 = inputTheme.sizes) == null ? void 0 : _a4.lg,
    field: {
      ...(_b2 = inputTheme.sizes) == null ? void 0 : _b2.lg.field,
      ...iconSpacing
    }
  },
  md: {
    ...(_c = inputTheme.sizes) == null ? void 0 : _c.md,
    field: {
      ...(_d = inputTheme.sizes) == null ? void 0 : _d.md.field,
      ...iconSpacing
    }
  },
  sm: {
    ...(_e = inputTheme.sizes) == null ? void 0 : _e.sm,
    field: {
      ...(_f = inputTheme.sizes) == null ? void 0 : _f.sm.field,
      ...iconSpacing
    }
  },
  xs: {
    ...(_g = inputTheme.sizes) == null ? void 0 : _g.xs,
    field: {
      ...(_h = inputTheme.sizes) == null ? void 0 : _h.xs.field,
      ...iconSpacing
    },
    icon: {
      insetEnd: "1"
    }
  }
};
var selectTheme = defineMultiStyleConfig19({
  baseStyle: baseStyle30,
  sizes: sizes15,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});

// src/components/skeleton.ts
var import_styled_system31 = require("@chakra-ui/styled-system");
var $startColor = (0, import_styled_system31.cssVar)("skeleton-start-color");
var $endColor = (0, import_styled_system31.cssVar)("skeleton-end-color");
var baseStyle31 = (0, import_styled_system31.defineStyle)({
  [$startColor.variable]: "colors.gray.100",
  [$endColor.variable]: "colors.gray.400",
  _dark: {
    [$startColor.variable]: "colors.gray.800",
    [$endColor.variable]: "colors.gray.600"
  },
  background: $startColor.reference,
  borderColor: $endColor.reference,
  opacity: 0.7,
  borderRadius: "sm"
});
var skeletonTheme = (0, import_styled_system31.defineStyleConfig)({
  baseStyle: baseStyle31
});

// src/components/skip-link.ts
var import_styled_system32 = require("@chakra-ui/styled-system");
var $bg11 = (0, import_styled_system32.cssVar)("skip-link-bg");
var baseStyle32 = (0, import_styled_system32.defineStyle)({
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [$bg11.variable]: "colors.white",
    _dark: {
      [$bg11.variable]: "colors.gray.700"
    },
    bg: $bg11.reference
  }
});
var skipLinkTheme = (0, import_styled_system32.defineStyleConfig)({
  baseStyle: baseStyle32
});

// src/components/slider.ts
var import_anatomy20 = require("@chakra-ui/anatomy");
var import_styled_system33 = require("@chakra-ui/styled-system");
var import_theme_tools12 = require("@chakra-ui/theme-tools");
var { defineMultiStyleConfig: defineMultiStyleConfig20, definePartsStyle: definePartsStyle20 } = (0, import_styled_system33.createMultiStyleConfigHelpers)(import_anatomy20.sliderAnatomy.keys);
var $thumbSize = (0, import_styled_system33.cssVar)("slider-thumb-size");
var $trackSize = (0, import_styled_system33.cssVar)("slider-track-size");
var $bg12 = (0, import_styled_system33.cssVar)("slider-bg");
var baseStyleContainer4 = (0, import_styled_system33.defineStyle)((props) => {
  const { orientation } = props;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...(0, import_theme_tools12.orient)({
      orientation,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
});
var baseStyleTrack2 = (0, import_styled_system33.defineStyle)((props) => {
  const orientationStyles = (0, import_theme_tools12.orient)({
    orientation: props.orientation,
    horizontal: { h: $trackSize.reference },
    vertical: { w: $trackSize.reference }
  });
  return {
    ...orientationStyles,
    overflow: "hidden",
    borderRadius: "sm",
    [$bg12.variable]: "colors.gray.200",
    _dark: {
      [$bg12.variable]: "colors.whiteAlpha.200"
    },
    _disabled: {
      [$bg12.variable]: "colors.gray.300",
      _dark: {
        [$bg12.variable]: "colors.whiteAlpha.300"
      }
    },
    bg: $bg12.reference
  };
});
var baseStyleThumb = (0, import_styled_system33.defineStyle)((props) => {
  const { orientation } = props;
  const orientationStyle = (0, import_theme_tools12.orient)({
    orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`
      }
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`
      }
    }
  });
  return {
    ...orientationStyle,
    w: $thumbSize.reference,
    h: $thumbSize.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
});
var baseStyleFilledTrack2 = (0, import_styled_system33.defineStyle)((props) => {
  const { colorScheme: c } = props;
  return {
    width: "inherit",
    height: "inherit",
    [$bg12.variable]: `colors.${c}.500`,
    _dark: {
      [$bg12.variable]: `colors.${c}.200`
    },
    bg: $bg12.reference
  };
});
var baseStyle33 = definePartsStyle20((props) => ({
  container: baseStyleContainer4(props),
  track: baseStyleTrack2(props),
  thumb: baseStyleThumb(props),
  filledTrack: baseStyleFilledTrack2(props)
}));
var sizeLg = definePartsStyle20({
  container: {
    [$thumbSize.variable]: `sizes.4`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeMd = definePartsStyle20({
  container: {
    [$thumbSize.variable]: `sizes.3.5`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeSm = definePartsStyle20({
  container: {
    [$thumbSize.variable]: `sizes.2.5`,
    [$trackSize.variable]: `sizes.0.5`
  }
});
var sizes16 = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var sliderTheme = defineMultiStyleConfig20({
  baseStyle: baseStyle33,
  sizes: sizes16,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// src/components/spinner.ts
var import_styled_system34 = require("@chakra-ui/styled-system");
var import_theme_tools13 = require("@chakra-ui/theme-tools");
var $size3 = (0, import_theme_tools13.cssVar)("spinner-size");
var baseStyle34 = (0, import_styled_system34.defineStyle)({
  width: [$size3.reference],
  height: [$size3.reference]
});
var sizes17 = {
  xs: (0, import_styled_system34.defineStyle)({
    [$size3.variable]: "sizes.3"
  }),
  sm: (0, import_styled_system34.defineStyle)({
    [$size3.variable]: "sizes.4"
  }),
  md: (0, import_styled_system34.defineStyle)({
    [$size3.variable]: "sizes.6"
  }),
  lg: (0, import_styled_system34.defineStyle)({
    [$size3.variable]: "sizes.8"
  }),
  xl: (0, import_styled_system34.defineStyle)({
    [$size3.variable]: "sizes.12"
  })
};
var spinnerTheme = (0, import_styled_system34.defineStyleConfig)({
  baseStyle: baseStyle34,
  sizes: sizes17,
  defaultProps: {
    size: "md"
  }
});

// src/components/stat.ts
var import_anatomy21 = require("@chakra-ui/anatomy");
var import_styled_system35 = require("@chakra-ui/styled-system");
var { defineMultiStyleConfig: defineMultiStyleConfig21, definePartsStyle: definePartsStyle21 } = (0, import_styled_system35.createMultiStyleConfigHelpers)(import_anatomy21.statAnatomy.keys);
var baseStyleLabel3 = (0, import_styled_system35.defineStyle)({
  fontWeight: "medium"
});
var baseStyleHelpText = (0, import_styled_system35.defineStyle)({
  opacity: 0.8,
  marginBottom: "2"
});
var baseStyleNumber = (0, import_styled_system35.defineStyle)({
  verticalAlign: "baseline",
  fontWeight: "semibold"
});
var baseStyleIcon6 = (0, import_styled_system35.defineStyle)({
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
});
var baseStyle35 = definePartsStyle21({
  container: {},
  label: baseStyleLabel3,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon6
});
var sizes18 = {
  md: definePartsStyle21({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
};
var statTheme = defineMultiStyleConfig21({
  baseStyle: baseStyle35,
  sizes: sizes18,
  defaultProps: {
    size: "md"
  }
});

// src/components/switch.ts
var import_anatomy22 = require("@chakra-ui/anatomy");
var import_styled_system36 = require("@chakra-ui/styled-system");
var import_theme_tools14 = require("@chakra-ui/theme-tools");
var { defineMultiStyleConfig: defineMultiStyleConfig22, definePartsStyle: definePartsStyle22 } = (0, import_styled_system36.createMultiStyleConfigHelpers)(import_anatomy22.switchAnatomy.keys);
var $width = (0, import_theme_tools14.cssVar)("switch-track-width");
var $height = (0, import_theme_tools14.cssVar)("switch-track-height");
var $diff = (0, import_theme_tools14.cssVar)("switch-track-diff");
var diffValue = import_theme_tools14.calc.subtract($width, $height);
var $translateX = (0, import_theme_tools14.cssVar)("switch-thumb-x");
var $bg13 = (0, import_theme_tools14.cssVar)("switch-bg");
var baseStyleTrack3 = (0, import_styled_system36.defineStyle)((props) => {
  const { colorScheme: c } = props;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [$bg13.variable]: "colors.gray.300",
    _dark: {
      [$bg13.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [$bg13.variable]: `colors.${c}.500`,
      _dark: {
        [$bg13.variable]: `colors.${c}.200`
      }
    },
    bg: $bg13.reference
  };
});
var baseStyleThumb2 = (0, import_styled_system36.defineStyle)({
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`
  }
});
var baseStyle36 = definePartsStyle22((props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: (0, import_theme_tools14.calc)($diff).negate().toString()
    }
  },
  track: baseStyleTrack3(props),
  thumb: baseStyleThumb2
}));
var sizes19 = {
  sm: definePartsStyle22({
    container: {
      [$width.variable]: "1.375rem",
      [$height.variable]: "sizes.3"
    }
  }),
  md: definePartsStyle22({
    container: {
      [$width.variable]: "1.875rem",
      [$height.variable]: "sizes.4"
    }
  }),
  lg: definePartsStyle22({
    container: {
      [$width.variable]: "2.875rem",
      [$height.variable]: "sizes.6"
    }
  })
};
var switchTheme = defineMultiStyleConfig22({
  baseStyle: baseStyle36,
  sizes: sizes19,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// src/components/table.ts
var import_anatomy23 = require("@chakra-ui/anatomy");
var import_styled_system37 = require("@chakra-ui/styled-system");
var import_theme_tools15 = require("@chakra-ui/theme-tools");
var { defineMultiStyleConfig: defineMultiStyleConfig23, definePartsStyle: definePartsStyle23 } = (0, import_styled_system37.createMultiStyleConfigHelpers)(import_anatomy23.tableAnatomy.keys);
var baseStyle37 = definePartsStyle23({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
});
var numericStyles = (0, import_styled_system37.defineStyle)({
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
});
var variantSimple = definePartsStyle23((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: (0, import_theme_tools15.mode)("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: (0, import_theme_tools15.mode)(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: (0, import_theme_tools15.mode)(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: (0, import_theme_tools15.mode)("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variantStripe = definePartsStyle23((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: (0, import_theme_tools15.mode)("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: (0, import_theme_tools15.mode)(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: (0, import_theme_tools15.mode)(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: (0, import_theme_tools15.mode)("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: (0, import_theme_tools15.mode)(`${c}.100`, `${c}.700`)(props)
          },
          td: {
            background: (0, import_theme_tools15.mode)(`${c}.100`, `${c}.700`)(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variants9 = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: (0, import_styled_system37.defineStyle)({})
};
var sizes20 = {
  sm: definePartsStyle23({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: definePartsStyle23({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: definePartsStyle23({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
};
var tableTheme = defineMultiStyleConfig23({
  baseStyle: baseStyle37,
  variants: variants9,
  sizes: sizes20,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
});

// src/components/tabs.ts
var import_anatomy24 = require("@chakra-ui/anatomy");
var import_styled_system38 = require("@chakra-ui/styled-system");
var import_theme_tools16 = require("@chakra-ui/theme-tools");
var $fg6 = (0, import_styled_system38.cssVar)("tabs-color");
var $bg14 = (0, import_styled_system38.cssVar)("tabs-bg");
var $border4 = (0, import_styled_system38.cssVar)("tabs-border-color");
var { defineMultiStyleConfig: defineMultiStyleConfig24, definePartsStyle: definePartsStyle24 } = (0, import_styled_system38.createMultiStyleConfigHelpers)(import_anatomy24.tabsAnatomy.keys);
var baseStyleRoot2 = (0, import_styled_system38.defineStyle)((props) => {
  const { orientation } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
});
var baseStyleTab = (0, import_styled_system38.defineStyle)((props) => {
  const { isFitted } = props;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
});
var baseStyleTablist = (0, import_styled_system38.defineStyle)((props) => {
  const { align = "start", orientation } = props;
  const alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
});
var baseStyleTabpanel = (0, import_styled_system38.defineStyle)({
  p: 4
});
var baseStyle38 = definePartsStyle24((props) => ({
  root: baseStyleRoot2(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel
}));
var sizes21 = {
  sm: definePartsStyle24({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: definePartsStyle24({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: definePartsStyle24({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
};
var variantLine = definePartsStyle24((props) => {
  const { colorScheme: c, orientation } = props;
  const isVertical = orientation === "vertical";
  const borderProp = orientation === "vertical" ? "borderStart" : "borderBottom";
  const marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        [$fg6.variable]: `colors.${c}.600`,
        _dark: {
          [$fg6.variable]: `colors.${c}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [$bg14.variable]: "colors.gray.200",
        _dark: {
          [$bg14.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: $fg6.reference,
      bg: $bg14.reference
    }
  };
});
var variantEnclosed = definePartsStyle24((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [$border4.variable]: "transparent",
      _selected: {
        [$fg6.variable]: `colors.${c}.600`,
        [$border4.variable]: `colors.white`,
        _dark: {
          [$fg6.variable]: `colors.${c}.300`,
          [$border4.variable]: `colors.gray.800`
        },
        borderColor: "inherit",
        borderBottomColor: $border4.reference
      },
      color: $fg6.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantEnclosedColored = definePartsStyle24((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [$bg14.variable]: "colors.gray.50",
      _dark: {
        [$bg14.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [$bg14.variable]: "colors.white",
        [$fg6.variable]: `colors.${c}.600`,
        _dark: {
          [$bg14.variable]: "colors.gray.800",
          [$fg6.variable]: `colors.${c}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: $fg6.reference,
      bg: $bg14.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantSoftRounded = definePartsStyle24((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: (0, import_theme_tools16.getColor)(theme2, `${c}.700`),
        bg: (0, import_theme_tools16.getColor)(theme2, `${c}.100`)
      }
    }
  };
});
var variantSolidRounded = definePartsStyle24((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [$fg6.variable]: "colors.gray.600",
      _dark: {
        [$fg6.variable]: "inherit"
      },
      _selected: {
        [$fg6.variable]: "colors.white",
        [$bg14.variable]: `colors.${c}.600`,
        _dark: {
          [$fg6.variable]: "colors.gray.800",
          [$bg14.variable]: `colors.${c}.300`
        }
      },
      color: $fg6.reference,
      bg: $bg14.reference
    }
  };
});
var variantUnstyled3 = definePartsStyle24({});
var variants10 = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled3
};
var tabsTheme = defineMultiStyleConfig24({
  baseStyle: baseStyle38,
  sizes: sizes21,
  variants: variants10,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
});

// src/components/tag.ts
var import_anatomy25 = require("@chakra-ui/anatomy");
var import_styled_system39 = require("@chakra-ui/styled-system");
var { defineMultiStyleConfig: defineMultiStyleConfig25, definePartsStyle: definePartsStyle25 } = (0, import_styled_system39.createMultiStyleConfigHelpers)(import_anatomy25.tagAnatomy.keys);
var baseStyleContainer5 = (0, import_styled_system39.defineStyle)({
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  borderRadius: "md",
  _focusVisible: {
    boxShadow: "outline"
  }
});
var baseStyleLabel4 = (0, import_styled_system39.defineStyle)({
  lineHeight: 1.2,
  overflow: "visible"
});
var baseStyleCloseButton4 = (0, import_styled_system39.defineStyle)({
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
});
var baseStyle39 = definePartsStyle25({
  container: baseStyleContainer5,
  label: baseStyleLabel4,
  closeButton: baseStyleCloseButton4
});
var sizes22 = {
  sm: definePartsStyle25({
    container: {
      minH: "5",
      minW: "5",
      fontSize: "xs",
      px: "2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: definePartsStyle25({
    container: {
      minH: "6",
      minW: "6",
      fontSize: "sm",
      px: "2"
    }
  }),
  lg: definePartsStyle25({
    container: {
      minH: "8",
      minW: "8",
      fontSize: "md",
      px: "3"
    }
  })
};
var variants11 = {
  subtle: definePartsStyle25((props) => {
    var _a8;
    return {
      container: (_a8 = badgeTheme.variants) == null ? void 0 : _a8.subtle(props)
    };
  }),
  solid: definePartsStyle25((props) => {
    var _a8;
    return {
      container: (_a8 = badgeTheme.variants) == null ? void 0 : _a8.solid(props)
    };
  }),
  outline: definePartsStyle25((props) => {
    var _a8;
    return {
      container: (_a8 = badgeTheme.variants) == null ? void 0 : _a8.outline(props)
    };
  })
};
var tagTheme = defineMultiStyleConfig25({
  variants: variants11,
  baseStyle: baseStyle39,
  sizes: sizes22,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});

// src/components/textarea.ts
var import_styled_system40 = require("@chakra-ui/styled-system");
var _a5;
var baseStyle40 = (0, import_styled_system40.defineStyle)({
  ...(_a5 = inputTheme.baseStyle) == null ? void 0 : _a5.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
});
var _a6, _b3;
var variants12 = {
  outline: (0, import_styled_system40.defineStyle)(
    (props) => {
      var _a8, _b5;
      return (_b5 = (_a8 = inputTheme.variants) == null ? void 0 : _a8.outline(props).field) != null ? _b5 : {};
    }
  ),
  flushed: (0, import_styled_system40.defineStyle)(
    (props) => {
      var _a8, _b5;
      return (_b5 = (_a8 = inputTheme.variants) == null ? void 0 : _a8.flushed(props).field) != null ? _b5 : {};
    }
  ),
  filled: (0, import_styled_system40.defineStyle)(
    (props) => {
      var _a8, _b5;
      return (_b5 = (_a8 = inputTheme.variants) == null ? void 0 : _a8.filled(props).field) != null ? _b5 : {};
    }
  ),
  unstyled: (_b3 = (_a6 = inputTheme.variants) == null ? void 0 : _a6.unstyled.field) != null ? _b3 : {}
};
var _a7, _b4, _c2, _d2, _e2, _f2, _g2, _h2;
var sizes23 = {
  xs: (_b4 = (_a7 = inputTheme.sizes) == null ? void 0 : _a7.xs.field) != null ? _b4 : {},
  sm: (_d2 = (_c2 = inputTheme.sizes) == null ? void 0 : _c2.sm.field) != null ? _d2 : {},
  md: (_f2 = (_e2 = inputTheme.sizes) == null ? void 0 : _e2.md.field) != null ? _f2 : {},
  lg: (_h2 = (_g2 = inputTheme.sizes) == null ? void 0 : _g2.lg.field) != null ? _h2 : {}
};
var textareaTheme = (0, import_styled_system40.defineStyleConfig)({
  baseStyle: baseStyle40,
  sizes: sizes23,
  variants: variants12,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// src/components/tooltip.ts
var import_styled_system41 = require("@chakra-ui/styled-system");
var import_theme_tools17 = require("@chakra-ui/theme-tools");
var $bg15 = (0, import_theme_tools17.cssVar)("tooltip-bg");
var $fg7 = (0, import_theme_tools17.cssVar)("tooltip-fg");
var $arrowBg2 = (0, import_theme_tools17.cssVar)("popper-arrow-bg");
var baseStyle41 = (0, import_styled_system41.defineStyle)({
  bg: $bg15.reference,
  color: $fg7.reference,
  [$bg15.variable]: "colors.gray.700",
  [$fg7.variable]: "colors.whiteAlpha.900",
  _dark: {
    [$bg15.variable]: "colors.gray.300",
    [$fg7.variable]: "colors.gray.900"
  },
  [$arrowBg2.variable]: $bg15.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
});
var tooltipTheme = (0, import_styled_system41.defineStyleConfig)({
  baseStyle: baseStyle41
});

// src/components/index.ts
var components = {
  Accordion: accordionTheme,
  Alert: alertTheme,
  Avatar: avatarTheme,
  Badge: badgeTheme,
  Breadcrumb: breadcrumbTheme,
  Button: buttonTheme,
  Checkbox: checkboxTheme,
  CloseButton: closeButtonTheme,
  Code: codeTheme,
  Container: containerTheme,
  Divider: dividerTheme,
  Drawer: drawerTheme,
  Editable: editableTheme,
  Form: formTheme,
  FormError: formErrorTheme,
  FormLabel: formLabelTheme,
  Heading: headingTheme,
  Input: inputTheme,
  Kbd: kbdTheme,
  Link: linkTheme,
  List: listTheme,
  Menu: menuTheme,
  Modal: modalTheme,
  NumberInput: numberInputTheme,
  PinInput: pinInputTheme,
  Popover: popoverTheme,
  Progress: progressTheme,
  Radio: radioTheme,
  Select: selectTheme,
  Skeleton: skeletonTheme,
  SkipLink: skipLinkTheme,
  Slider: sliderTheme,
  Spinner: spinnerTheme,
  Stat: statTheme,
  Switch: switchTheme,
  Table: tableTheme,
  Tabs: tabsTheme,
  Tag: tagTheme,
  Textarea: textareaTheme,
  Tooltip: tooltipTheme,
  Card: cardTheme
};

// src/foundations/borders.ts
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};
var borders_default = borders;

// src/foundations/breakpoints.ts
var breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
};
var breakpoints_default = breakpoints;

// src/foundations/colors.ts
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};
var colors_default = colors;

// src/foundations/radius.ts
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var radius_default = radii;

// src/foundations/shadows.ts
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
var shadows_default = shadows;

// src/foundations/transition.ts
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};
var transition_default = transition;

// src/foundations/z-index.ts
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var z_index_default = zIndices;

// src/foundations/blur.ts
var blur = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};
var blur_default = blur;

// src/foundations/index.ts
var foundations = {
  breakpoints: breakpoints_default,
  zIndices: z_index_default,
  radii: radius_default,
  blur: blur_default,
  colors: colors_default,
  ...typography_default,
  sizes: sizes_default,
  shadows: shadows_default,
  space: spacing,
  borders: borders_default,
  transition: transition_default
};

// src/semantic-tokens.ts
var semanticTokens = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
};

// src/styles.ts
var styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
      wordWrap: "break-word"
    }
  }
};

// src/utils/is-chakra-theme.ts
var import_shared_utils = require("@chakra-ui/shared-utils");
var requiredChakraThemeKeys = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function isChakraTheme(unit) {
  if (!(0, import_shared_utils.isObject)(unit)) {
    return false;
  }
  return requiredChakraThemeKeys.every(
    (propertyName) => Object.prototype.hasOwnProperty.call(unit, propertyName)
  );
}

// src/index.ts
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = {
  semanticTokens,
  direction,
  ...foundations,
  components,
  styles,
  config
};
var src_default = theme;
var baseTheme = {
  semanticTokens,
  direction,
  components: {},
  ...foundations,
  styles,
  config
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  baseTheme,
  isChakraTheme,
  requiredChakraThemeKeys,
  theme
});
