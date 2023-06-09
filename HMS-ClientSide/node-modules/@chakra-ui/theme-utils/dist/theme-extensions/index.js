"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/theme-extensions/index.ts
var theme_extensions_exports = {};
__export(theme_extensions_exports, {
  withDefaultColorScheme: () => withDefaultColorScheme,
  withDefaultProps: () => withDefaultProps,
  withDefaultSize: () => withDefaultSize,
  withDefaultVariant: () => withDefaultVariant
});
module.exports = __toCommonJS(theme_extensions_exports);

// src/theme-extensions/with-default-color-scheme.ts
var import_shared_utils = require("@chakra-ui/shared-utils");

// src/extend-theme.ts
var import_theme = require("@chakra-ui/theme");
var import_lodash = __toESM(require("lodash.mergewith"));
function isFunction(value) {
  return typeof value === "function";
}
function pipe(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
var createExtendTheme = (theme2) => {
  return function extendTheme2(...extensions) {
    let overrides = [...extensions];
    let activeTheme = extensions[extensions.length - 1];
    if ((0, import_theme.isChakraTheme)(activeTheme) && overrides.length > 1) {
      overrides = overrides.slice(0, overrides.length - 1);
    } else {
      activeTheme = theme2;
    }
    return pipe(
      ...overrides.map(
        (extension) => (prevTheme) => isFunction(extension) ? extension(prevTheme) : mergeThemeOverride(prevTheme, extension)
      )
    )(activeTheme);
  };
};
var extendTheme = createExtendTheme(import_theme.theme);
var extendBaseTheme = createExtendTheme(import_theme.baseTheme);
function mergeThemeOverride(...overrides) {
  return (0, import_lodash.default)({}, ...overrides, mergeThemeCustomizer);
}
function mergeThemeCustomizer(source, override, key, object) {
  if ((isFunction(source) || isFunction(override)) && Object.prototype.hasOwnProperty.call(object, key)) {
    return (...args) => {
      const sourceValue = isFunction(source) ? source(...args) : source;
      const overrideValue = isFunction(override) ? override(...args) : override;
      return (0, import_lodash.default)({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  return void 0;
}

// src/theme-extensions/with-default-color-scheme.ts
function withDefaultColorScheme({
  colorScheme,
  components
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components)) {
      names = components;
    } else if ((0, import_shared_utils.isObject)(components)) {
      names = Object.keys(components);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withColorScheme = {
            defaultProps: {
              colorScheme
            }
          };
          return [componentName, withColorScheme];
        })
      )
    });
  };
}

// src/theme-extensions/with-default-size.ts
var import_shared_utils2 = require("@chakra-ui/shared-utils");
function withDefaultSize({
  size,
  components
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components)) {
      names = components;
    } else if ((0, import_shared_utils2.isObject)(components)) {
      names = Object.keys(components);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withSize = {
            defaultProps: {
              size
            }
          };
          return [componentName, withSize];
        })
      )
    });
  };
}

// src/theme-extensions/with-default-variant.ts
var import_shared_utils3 = require("@chakra-ui/shared-utils");
function withDefaultVariant({
  variant,
  components
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components)) {
      names = components;
    } else if ((0, import_shared_utils3.isObject)(components)) {
      names = Object.keys(components);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withVariant = {
            defaultProps: {
              variant
            }
          };
          return [componentName, withVariant];
        })
      )
    });
  };
}

// src/theme-extensions/with-default-props.ts
function pipe2(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
function withDefaultProps({
  defaultProps: { colorScheme, variant, size },
  components
}) {
  const identity = (t) => t;
  const fns = [
    colorScheme ? withDefaultColorScheme({ colorScheme, components }) : identity,
    size ? withDefaultSize({ size, components }) : identity,
    variant ? withDefaultVariant({ variant, components }) : identity
  ];
  return (theme2) => mergeThemeOverride(pipe2(...fns)(theme2));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
  withDefaultVariant
});
