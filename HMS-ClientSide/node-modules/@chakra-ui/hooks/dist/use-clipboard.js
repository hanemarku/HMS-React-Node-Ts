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

// src/use-clipboard.ts
var use_clipboard_exports = {};
__export(use_clipboard_exports, {
  useClipboard: () => useClipboard
});
module.exports = __toCommonJS(use_clipboard_exports);
var import_react = require("react");
var import_copy_to_clipboard = __toESM(require("copy-to-clipboard"));
function useClipboard(initialValue, optionsOrTimeout = {}) {
  const [hasCopied, setHasCopied] = (0, import_react.useState)(false);
  const [value, setValue] = (0, import_react.useState)(initialValue);
  const { timeout = 1500, ...copyOptions } = typeof optionsOrTimeout === "number" ? { timeout: optionsOrTimeout } : optionsOrTimeout;
  const onCopy = (0, import_react.useCallback)(() => {
    const didCopy = (0, import_copy_to_clipboard.default)(value, copyOptions);
    setHasCopied(didCopy);
  }, [value, copyOptions]);
  (0, import_react.useEffect)(() => {
    let timeoutId = null;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return { value, setValue, onCopy, hasCopied };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useClipboard
});
