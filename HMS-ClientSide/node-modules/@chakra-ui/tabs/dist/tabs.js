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

// src/tabs.tsx
var tabs_exports = {};
__export(tabs_exports, {
  Tabs: () => Tabs,
  useTabsStyles: () => useTabsStyles
});
module.exports = __toCommonJS(tabs_exports);
var import_react_context2 = require("@chakra-ui/react-context");
var import_system = require("@chakra-ui/system");
var import_shared_utils2 = require("@chakra-ui/shared-utils");
var import_react2 = require("react");

// src/use-tabs.ts
var import_clickable = require("@chakra-ui/clickable");
var import_descendant = require("@chakra-ui/descendant");
var import_react_context = require("@chakra-ui/react-context");
var import_react_use_safe_layout_effect = require("@chakra-ui/react-use-safe-layout-effect");
var import_react_use_controllable_state = require("@chakra-ui/react-use-controllable-state");
var import_react_children_utils = require("@chakra-ui/react-children-utils");
var import_react_use_merge_refs = require("@chakra-ui/react-use-merge-refs");
var import_lazy_utils = require("@chakra-ui/lazy-utils");
var import_shared_utils = require("@chakra-ui/shared-utils");
var import_react = require("react");
var [
  TabsDescendantsProvider,
  useTabsDescendantsContext,
  useTabsDescendants,
  useTabsDescendant
] = (0, import_descendant.createDescendantContext)();
function useTabs(props) {
  var _a;
  const {
    defaultIndex,
    onChange,
    index,
    isManual,
    isLazy,
    lazyBehavior = "unmount",
    orientation = "horizontal",
    direction = "ltr",
    ...htmlProps
  } = props;
  const [focusedIndex, setFocusedIndex] = (0, import_react.useState)(defaultIndex != null ? defaultIndex : 0);
  const [selectedIndex, setSelectedIndex] = (0, import_react_use_controllable_state.useControllableState)({
    defaultValue: defaultIndex != null ? defaultIndex : 0,
    value: index,
    onChange
  });
  (0, import_react.useEffect)(() => {
    if (index != null) {
      setFocusedIndex(index);
    }
  }, [index]);
  const descendants = useTabsDescendants();
  const uuid = (0, import_react.useId)();
  const uid = (_a = props.id) != null ? _a : uuid;
  const id = `tabs-${uid}`;
  return {
    id,
    selectedIndex,
    focusedIndex,
    setSelectedIndex,
    setFocusedIndex,
    isManual,
    isLazy,
    lazyBehavior,
    orientation,
    descendants,
    direction,
    htmlProps
  };
}
var [TabsProvider, useTabsContext] = (0, import_react_context.createContext)({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
var [TabPanelProvider, useTabPanelContext] = (0, import_react_context.createContext)({});

// src/tabs.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var [TabsStylesProvider, useTabsStyles] = (0, import_react_context2.createContext)({
  name: `TabsStylesContext`,
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
});
var Tabs = (0, import_system.forwardRef)(function Tabs2(props, ref) {
  const styles = (0, import_system.useMultiStyleConfig)("Tabs", props);
  const { children, className, ...rest } = (0, import_system.omitThemingProps)(props);
  const { htmlProps, descendants, ...ctx } = useTabs(rest);
  const context = (0, import_react2.useMemo)(() => ctx, [ctx]);
  const { isFitted: _, ...rootProps } = htmlProps;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsDescendantsProvider, { value: descendants, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsProvider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsStylesProvider, { value: styles, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_system.chakra.div,
    {
      className: (0, import_shared_utils2.cx)("chakra-tabs", className),
      ref,
      ...rootProps,
      __css: styles.root,
      children
    }
  ) }) }) });
});
Tabs.displayName = "Tabs";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tabs,
  useTabsStyles
});
