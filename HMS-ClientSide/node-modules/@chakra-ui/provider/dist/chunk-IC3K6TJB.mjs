// src/chakra-provider.tsx
import { CSSReset, CSSPolyfill } from "@chakra-ui/css-reset";
import { PortalManager } from "@chakra-ui/portal";
import {
  ColorModeProvider,
  GlobalStyle,
  ThemeProvider
} from "@chakra-ui/system";
import {
  EnvironmentProvider
} from "@chakra-ui/react-env";
import { jsx, jsxs } from "react/jsx-runtime";
var ChakraProvider = (props) => {
  const {
    children,
    colorModeManager,
    portalZIndex,
    resetCSS = true,
    theme = {},
    environment,
    cssVarsRoot,
    disableEnvironment
  } = props;
  const _children = /* @__PURE__ */ jsx(
    EnvironmentProvider,
    {
      environment,
      disabled: disableEnvironment,
      children
    }
  );
  return /* @__PURE__ */ jsx(ThemeProvider, { theme, cssVarsRoot, children: /* @__PURE__ */ jsxs(
    ColorModeProvider,
    {
      colorModeManager,
      options: theme.config,
      children: [
        resetCSS ? /* @__PURE__ */ jsx(CSSReset, {}) : /* @__PURE__ */ jsx(CSSPolyfill, {}),
        /* @__PURE__ */ jsx(GlobalStyle, {}),
        portalZIndex ? /* @__PURE__ */ jsx(PortalManager, { zIndex: portalZIndex, children: _children }) : _children
      ]
    }
  ) });
};

export {
  ChakraProvider
};
