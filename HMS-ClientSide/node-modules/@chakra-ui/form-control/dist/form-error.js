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

// src/form-error.tsx
var form_error_exports = {};
__export(form_error_exports, {
  FormErrorIcon: () => FormErrorIcon,
  FormErrorMessage: () => FormErrorMessage,
  useFormErrorStyles: () => useFormErrorStyles
});
module.exports = __toCommonJS(form_error_exports);
var import_icon = require("@chakra-ui/icon");
var import_react_context2 = require("@chakra-ui/react-context");
var import_system2 = require("@chakra-ui/system");
var import_shared_utils2 = require("@chakra-ui/shared-utils");

// src/form-control.tsx
var import_react_context = require("@chakra-ui/react-context");
var import_react_use_merge_refs = require("@chakra-ui/react-use-merge-refs");
var import_system = require("@chakra-ui/system");
var import_shared_utils = require("@chakra-ui/shared-utils");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var [FormControlStylesProvider, useFormControlStyles] = (0, import_react_context.createContext)({
  name: `FormControlStylesContext`,
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
});
var [FormControlProvider, useFormControlContext] = (0, import_react_context.createContext)({
  strict: false,
  name: "FormControlContext"
});
function useFormControlProvider(props) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  const uuid = (0, import_react.useId)();
  const id = idProp || `field-${uuid}`;
  const labelId = `${id}-label`;
  const feedbackId = `${id}-feedback`;
  const helpTextId = `${id}-helptext`;
  const [hasFeedbackText, setHasFeedbackText] = (0, import_react.useState)(false);
  const [hasHelpText, setHasHelpText] = (0, import_react.useState)(false);
  const [isFocused, setFocus] = (0, import_react.useState)(false);
  const getHelpTextProps = (0, import_react.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: helpTextId,
      ...props2,
      ref: (0, import_react_use_merge_refs.mergeRefs)(forwardedRef, (node) => {
        if (!node)
          return;
        setHasHelpText(true);
      })
    }),
    [helpTextId]
  );
  const getLabelProps = (0, import_react.useCallback)(
    (props2 = {}, forwardedRef = null) => {
      var _a, _b;
      return {
        ...props2,
        ref: forwardedRef,
        "data-focus": (0, import_shared_utils.dataAttr)(isFocused),
        "data-disabled": (0, import_shared_utils.dataAttr)(isDisabled),
        "data-invalid": (0, import_shared_utils.dataAttr)(isInvalid),
        "data-readonly": (0, import_shared_utils.dataAttr)(isReadOnly),
        id: (_a = props2.id) != null ? _a : labelId,
        htmlFor: (_b = props2.htmlFor) != null ? _b : id
      };
    },
    [id, isDisabled, isFocused, isInvalid, isReadOnly, labelId]
  );
  const getErrorMessageProps = (0, import_react.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: feedbackId,
      ...props2,
      ref: (0, import_react_use_merge_refs.mergeRefs)(forwardedRef, (node) => {
        if (!node)
          return;
        setHasFeedbackText(true);
      }),
      "aria-live": "polite"
    }),
    [feedbackId]
  );
  const getRootProps = (0, import_react.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ...htmlProps,
      ref: forwardedRef,
      role: "group"
    }),
    [htmlProps]
  );
  const getRequiredIndicatorProps = (0, import_react.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      role: "presentation",
      "aria-hidden": true,
      children: props2.children || "*"
    }),
    []
  );
  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    isFocused: !!isFocused,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps
  };
}
var FormControl = (0, import_system.forwardRef)(
  function FormControl2(props, ref) {
    const styles = (0, import_system.useMultiStyleConfig)("Form", props);
    const ownProps = (0, import_system.omitThemingProps)(props);
    const {
      getRootProps,
      htmlProps: _,
      ...context
    } = useFormControlProvider(ownProps);
    const className = (0, import_shared_utils.cx)("chakra-form-control", props.className);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControlProvider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControlStylesProvider, { value: styles, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_system.chakra.div,
      {
        ...getRootProps({}, ref),
        className,
        __css: styles["container"]
      }
    ) }) });
  }
);
FormControl.displayName = "FormControl";
var FormHelperText = (0, import_system.forwardRef)(
  function FormHelperText2(props, ref) {
    const field = useFormControlContext();
    const styles = useFormControlStyles();
    const className = (0, import_shared_utils.cx)("chakra-form__helper-text", props.className);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_system.chakra.div,
      {
        ...field == null ? void 0 : field.getHelpTextProps(props, ref),
        __css: styles.helperText,
        className
      }
    );
  }
);
FormHelperText.displayName = "FormHelperText";

// src/form-error.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var [FormErrorStylesProvider, useFormErrorStyles] = (0, import_react_context2.createContext)({
  name: `FormErrorStylesContext`,
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
});
var FormErrorMessage = (0, import_system2.forwardRef)(
  (props, ref) => {
    const styles = (0, import_system2.useMultiStyleConfig)("FormError", props);
    const ownProps = (0, import_system2.omitThemingProps)(props);
    const field = useFormControlContext();
    if (!(field == null ? void 0 : field.isInvalid))
      return null;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormErrorStylesProvider, { value: styles, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_system2.chakra.div,
      {
        ...field == null ? void 0 : field.getErrorMessageProps(ownProps, ref),
        className: (0, import_shared_utils2.cx)("chakra-form__error-message", props.className),
        __css: {
          display: "flex",
          alignItems: "center",
          ...styles.text
        }
      }
    ) });
  }
);
FormErrorMessage.displayName = "FormErrorMessage";
var FormErrorIcon = (0, import_system2.forwardRef)((props, ref) => {
  const styles = useFormErrorStyles();
  const field = useFormControlContext();
  if (!(field == null ? void 0 : field.isInvalid))
    return null;
  const _className = (0, import_shared_utils2.cx)("chakra-form__error-icon", props.className);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_icon.Icon,
    {
      ref,
      "aria-hidden": true,
      ...props,
      __css: styles.icon,
      className: _className,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        }
      )
    }
  );
});
FormErrorIcon.displayName = "FormErrorIcon";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FormErrorIcon,
  FormErrorMessage,
  useFormErrorStyles
});
