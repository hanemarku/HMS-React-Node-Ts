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

// src/popover-body.tsx
var popover_body_exports = {};
__export(popover_body_exports, {
  PopoverBody: () => PopoverBody
});
module.exports = __toCommonJS(popover_body_exports);
var import_system = require("@chakra-ui/system");
var import_shared_utils = require("@chakra-ui/shared-utils");

// src/popover-context.ts
var import_react_context = require("@chakra-ui/react-context");
var [PopoverProvider, usePopoverContext] = (0, import_react_context.createContext)({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
});
var [PopoverStylesProvider, usePopoverStyles] = (0, import_react_context.createContext)({
  name: `PopoverStylesContext`,
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
});

// src/popover-body.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var PopoverBody = (0, import_system.forwardRef)(
  function PopoverBody2(props, ref) {
    const { getBodyProps } = usePopoverContext();
    const styles = usePopoverStyles();
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_system.chakra.div,
      {
        ...getBodyProps(props, ref),
        className: (0, import_shared_utils.cx)("chakra-popover__body", props.className),
        __css: styles.body
      }
    );
  }
);
PopoverBody.displayName = "PopoverBody";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PopoverBody
});
