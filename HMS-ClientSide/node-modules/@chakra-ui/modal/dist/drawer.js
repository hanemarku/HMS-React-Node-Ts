"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/drawer.tsx
var drawer_exports = {};
__export(drawer_exports, {
  Drawer: () => Drawer,
  DrawerBody: () => ModalBody,
  DrawerCloseButton: () => ModalCloseButton,
  DrawerFooter: () => ModalFooter,
  DrawerHeader: () => ModalHeader,
  DrawerOverlay: () => ModalOverlay,
  useDrawerContext: () => useDrawerContext
});
module.exports = __toCommonJS(drawer_exports);
var import_react_context2 = require("@chakra-ui/react-context");
var import_system7 = require("@chakra-ui/system");

// src/modal.tsx
var import_portal = require("@chakra-ui/portal");
var import_react_context = require("@chakra-ui/react-context");
var import_system = require("@chakra-ui/system");
var import_framer_motion = require("framer-motion");

// src/use-modal.ts
var import_shared_utils = require("@chakra-ui/shared-utils");
var import_react_use_merge_refs = require("@chakra-ui/react-use-merge-refs");
var import_aria_hidden = require("aria-hidden");
var import_react2 = require("react");

// src/modal-manager.ts
var import_react = require("react");
var ModalManager = class {
  constructor() {
    __publicField(this, "modals");
    this.modals = /* @__PURE__ */ new Map();
  }
  add(modal) {
    this.modals.set(modal, this.modals.size + 1);
    return this.modals.size;
  }
  remove(modal) {
    this.modals.delete(modal);
  }
  isTopModal(modal) {
    if (!modal)
      return false;
    return this.modals.get(modal) === this.modals.size;
  }
};
var manager = new ModalManager();
function useModalManager(ref, isOpen) {
  const [index, setIndex] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const node = ref.current;
    if (!node)
      return;
    if (isOpen) {
      const index2 = manager.add(node);
      setIndex(index2);
    }
    return () => {
      manager.remove(node);
      setIndex(0);
    };
  }, [isOpen, ref]);
  return index;
}

// src/use-modal.ts
function useModal(props) {
  const {
    isOpen,
    onClose,
    id,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    useInert = true,
    onOverlayClick: onOverlayClickProp,
    onEsc
  } = props;
  const dialogRef = (0, import_react2.useRef)(null);
  const overlayRef = (0, import_react2.useRef)(null);
  const [dialogId, headerId, bodyId] = useIds(
    id,
    `chakra-modal`,
    `chakra-modal--header`,
    `chakra-modal--body`
  );
  useAriaHidden(dialogRef, isOpen && useInert);
  useModalManager(dialogRef, isOpen);
  const mouseDownTarget = (0, import_react2.useRef)(null);
  const onMouseDown = (0, import_react2.useCallback)((event) => {
    mouseDownTarget.current = event.target;
  }, []);
  const onKeyDown = (0, import_react2.useCallback)(
    (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        if (closeOnEsc) {
          onClose == null ? void 0 : onClose();
        }
        onEsc == null ? void 0 : onEsc();
      }
    },
    [closeOnEsc, onClose, onEsc]
  );
  const [headerMounted, setHeaderMounted] = (0, import_react2.useState)(false);
  const [bodyMounted, setBodyMounted] = (0, import_react2.useState)(false);
  const getDialogProps = (0, import_react2.useCallback)(
    (props2 = {}, ref = null) => ({
      role: "dialog",
      ...props2,
      ref: (0, import_react_use_merge_refs.mergeRefs)(ref, dialogRef),
      id: dialogId,
      tabIndex: -1,
      "aria-modal": true,
      "aria-labelledby": headerMounted ? headerId : void 0,
      "aria-describedby": bodyMounted ? bodyId : void 0,
      onClick: (0, import_shared_utils.callAllHandlers)(
        props2.onClick,
        (event) => event.stopPropagation()
      )
    }),
    [bodyId, bodyMounted, dialogId, headerId, headerMounted]
  );
  const onOverlayClick = (0, import_react2.useCallback)(
    (event) => {
      event.stopPropagation();
      if (mouseDownTarget.current !== event.target)
        return;
      if (!manager.isTopModal(dialogRef.current))
        return;
      if (closeOnOverlayClick) {
        onClose == null ? void 0 : onClose();
      }
      onOverlayClickProp == null ? void 0 : onOverlayClickProp();
    },
    [onClose, closeOnOverlayClick, onOverlayClickProp]
  );
  const getDialogContainerProps = (0, import_react2.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: (0, import_react_use_merge_refs.mergeRefs)(ref, overlayRef),
      onClick: (0, import_shared_utils.callAllHandlers)(props2.onClick, onOverlayClick),
      onKeyDown: (0, import_shared_utils.callAllHandlers)(props2.onKeyDown, onKeyDown),
      onMouseDown: (0, import_shared_utils.callAllHandlers)(props2.onMouseDown, onMouseDown)
    }),
    [onKeyDown, onMouseDown, onOverlayClick]
  );
  return {
    isOpen,
    onClose,
    headerId,
    bodyId,
    setBodyMounted,
    setHeaderMounted,
    dialogRef,
    overlayRef,
    getDialogProps,
    getDialogContainerProps
  };
}
function useAriaHidden(ref, shouldHide) {
  const currentElement = ref.current;
  (0, import_react2.useEffect)(() => {
    if (!ref.current || !shouldHide)
      return void 0;
    return (0, import_aria_hidden.hideOthers)(ref.current);
  }, [shouldHide, ref, currentElement]);
}
function useIds(idProp, ...prefixes) {
  const reactId = (0, import_react2.useId)();
  const id = idProp || reactId;
  return (0, import_react2.useMemo)(() => {
    return prefixes.map((prefix) => `${prefix}-${id}`);
  }, [id, prefixes]);
}

// src/modal.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var [ModalStylesProvider, useModalStyles] = (0, import_react_context.createContext)({
  name: `ModalStylesContext`,
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
});
var [ModalContextProvider, useModalContext] = (0, import_react_context.createContext)({
  strict: true,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
});
var Modal = (props) => {
  const modalProps = {
    scrollBehavior: "outside",
    autoFocus: true,
    trapFocus: true,
    returnFocusOnClose: true,
    blockScrollOnMount: true,
    allowPinchZoom: false,
    motionPreset: "scale",
    lockFocusAcrossFrames: true,
    ...props
  };
  const {
    portalProps,
    children,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames,
    onCloseComplete
  } = modalProps;
  const styles = (0, import_system.useMultiStyleConfig)("Modal", modalProps);
  const modal = useModal(modalProps);
  const context = {
    ...modal,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalContextProvider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalStylesProvider, { value: styles, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_framer_motion.AnimatePresence, { onExitComplete: onCloseComplete, children: context.isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_portal.Portal, { ...portalProps, children }) }) }) });
};
Modal.displayName = "Modal";

// src/modal-body.tsx
var import_shared_utils2 = require("@chakra-ui/shared-utils");
var import_system2 = require("@chakra-ui/system");
var import_react3 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ModalBody = (0, import_system2.forwardRef)((props, ref) => {
  const { className, ...rest } = props;
  const { bodyId, setBodyMounted } = useModalContext();
  (0, import_react3.useEffect)(() => {
    setBodyMounted(true);
    return () => setBodyMounted(false);
  }, [setBodyMounted]);
  const _className = (0, import_shared_utils2.cx)("chakra-modal__body", className);
  const styles = useModalStyles();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_system2.chakra.div,
    {
      ref,
      className: _className,
      id: bodyId,
      ...rest,
      __css: styles.body
    }
  );
});
ModalBody.displayName = "ModalBody";

// src/modal-close-button.tsx
var import_close_button = require("@chakra-ui/close-button");
var import_shared_utils3 = require("@chakra-ui/shared-utils");
var import_system3 = require("@chakra-ui/system");
var import_jsx_runtime3 = require("react/jsx-runtime");
var ModalCloseButton = (0, import_system3.forwardRef)(
  (props, ref) => {
    const { onClick, className, ...rest } = props;
    const { onClose } = useModalContext();
    const _className = (0, import_shared_utils3.cx)("chakra-modal__close-btn", className);
    const styles = useModalStyles();
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_close_button.CloseButton,
      {
        ref,
        __css: styles.closeButton,
        className: _className,
        onClick: (0, import_shared_utils3.callAllHandlers)(onClick, (event) => {
          event.stopPropagation();
          onClose();
        }),
        ...rest
      }
    );
  }
);
ModalCloseButton.displayName = "ModalCloseButton";

// src/modal-footer.tsx
var import_shared_utils4 = require("@chakra-ui/shared-utils");
var import_system4 = require("@chakra-ui/system");
var import_jsx_runtime4 = require("react/jsx-runtime");
var ModalFooter = (0, import_system4.forwardRef)(
  (props, ref) => {
    const { className, ...rest } = props;
    const _className = (0, import_shared_utils4.cx)("chakra-modal__footer", className);
    const styles = useModalStyles();
    const footerStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...styles.footer
    };
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_system4.chakra.footer,
      {
        ref,
        ...rest,
        __css: footerStyles,
        className: _className
      }
    );
  }
);
ModalFooter.displayName = "ModalFooter";

// src/modal-header.tsx
var import_shared_utils5 = require("@chakra-ui/shared-utils");
var import_system5 = require("@chakra-ui/system");
var import_react4 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var ModalHeader = (0, import_system5.forwardRef)(
  (props, ref) => {
    const { className, ...rest } = props;
    const { headerId, setHeaderMounted } = useModalContext();
    (0, import_react4.useEffect)(() => {
      setHeaderMounted(true);
      return () => setHeaderMounted(false);
    }, [setHeaderMounted]);
    const _className = (0, import_shared_utils5.cx)("chakra-modal__header", className);
    const styles = useModalStyles();
    const headerStyles = {
      flex: 0,
      ...styles.header
    };
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_system5.chakra.header,
      {
        ref,
        className: _className,
        id: headerId,
        ...rest,
        __css: headerStyles
      }
    );
  }
);
ModalHeader.displayName = "ModalHeader";

// src/modal-overlay.tsx
var import_shared_utils6 = require("@chakra-ui/shared-utils");
var import_system6 = require("@chakra-ui/system");
var import_transition = require("@chakra-ui/transition");
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime6 = require("react/jsx-runtime");
var MotionDiv = (0, import_system6.chakra)(import_framer_motion2.motion.div);
var ModalOverlay = (0, import_system6.forwardRef)(
  (props, ref) => {
    const { className, transition, motionProps: _motionProps, ...rest } = props;
    const _className = (0, import_shared_utils6.cx)("chakra-modal__overlay", className);
    const styles = useModalStyles();
    const overlayStyle = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...styles.overlay
    };
    const { motionPreset } = useModalContext();
    const defaultMotionProps = motionPreset === "none" ? {} : import_transition.fadeConfig;
    const motionProps = _motionProps || defaultMotionProps;
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      MotionDiv,
      {
        ...motionProps,
        __css: overlayStyle,
        ref,
        className: _className,
        ...rest
      }
    );
  }
);
ModalOverlay.displayName = "ModalOverlay";

// src/drawer.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var [DrawerContextProvider, useDrawerContext] = (0, import_react_context2.createContext)();
var placementMap = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function getDrawerPlacement(placement, dir) {
  var _a, _b;
  if (!placement)
    return;
  return (_b = (_a = placementMap[placement]) == null ? void 0 : _a[dir]) != null ? _b : placement;
}
function Drawer(props) {
  var _a;
  const {
    isOpen,
    onClose,
    placement: placementProp = "right",
    children,
    ...rest
  } = props;
  const theme = (0, import_system7.useTheme)();
  const drawerStyleConfig = (_a = theme.components) == null ? void 0 : _a.Drawer;
  const placement = getDrawerPlacement(placementProp, theme.direction);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DrawerContextProvider, { value: { placement }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Modal,
    {
      isOpen,
      onClose,
      styleConfig: drawerStyleConfig,
      ...rest,
      children
    }
  ) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDrawerContext
});
