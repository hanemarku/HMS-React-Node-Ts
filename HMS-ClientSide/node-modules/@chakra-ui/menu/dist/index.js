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
  Menu: () => Menu,
  MenuButton: () => MenuButton,
  MenuCommand: () => MenuCommand,
  MenuDescendantsProvider: () => MenuDescendantsProvider,
  MenuDivider: () => MenuDivider,
  MenuGroup: () => MenuGroup,
  MenuIcon: () => MenuIcon,
  MenuItem: () => MenuItem,
  MenuItemOption: () => MenuItemOption,
  MenuList: () => MenuList,
  MenuOptionGroup: () => MenuOptionGroup,
  useMenu: () => useMenu,
  useMenuButton: () => useMenuButton,
  useMenuContext: () => useMenuContext,
  useMenuDescendant: () => useMenuDescendant,
  useMenuDescendants: () => useMenuDescendants,
  useMenuDescendantsContext: () => useMenuDescendantsContext,
  useMenuItem: () => useMenuItem,
  useMenuList: () => useMenuList,
  useMenuOption: () => useMenuOption,
  useMenuOptionGroup: () => useMenuOptionGroup,
  useMenuPositioner: () => useMenuPositioner,
  useMenuState: () => useMenuState,
  useMenuStyles: () => useMenuStyles
});
module.exports = __toCommonJS(src_exports);

// src/menu.tsx
var import_react_context2 = require("@chakra-ui/react-context");
var import_system = require("@chakra-ui/system");
var import_shared_utils2 = require("@chakra-ui/shared-utils");
var import_react3 = require("react");

// src/use-menu.ts
var import_clickable = require("@chakra-ui/clickable");
var import_descendant = require("@chakra-ui/descendant");
var import_react_use_focus_effect = require("@chakra-ui/react-use-focus-effect");
var import_popper = require("@chakra-ui/popper");
var import_react_use_disclosure = require("@chakra-ui/react-use-disclosure");
var import_react_use_outside_click = require("@chakra-ui/react-use-outside-click");
var import_react_use_animation_state = require("@chakra-ui/react-use-animation-state");
var import_react_context = require("@chakra-ui/react-context");
var import_react_children_utils = require("@chakra-ui/react-children-utils");
var import_react_use_controllable_state = require("@chakra-ui/react-use-controllable-state");
var import_react_use_update_effect = require("@chakra-ui/react-use-update-effect");
var import_react_use_merge_refs = require("@chakra-ui/react-use-merge-refs");
var import_shared_utils = require("@chakra-ui/shared-utils");
var import_lazy_utils = require("@chakra-ui/lazy-utils");
var import_react2 = require("react");

// src/use-shortcut.ts
var import_react = require("react");
function isPrintableCharacter(event) {
  const { key } = event;
  return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}
function useShortcut(props = {}) {
  const { timeout = 300, preventDefault = () => true } = props;
  const [keys, setKeys] = (0, import_react.useState)([]);
  const timeoutRef = (0, import_react.useRef)();
  const flush = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  const clearKeysAfterDelay = () => {
    flush();
    timeoutRef.current = setTimeout(() => {
      setKeys([]);
      timeoutRef.current = null;
    }, timeout);
  };
  (0, import_react.useEffect)(() => flush, []);
  function onKeyDown(fn) {
    return (event) => {
      if (event.key === "Backspace") {
        const keysCopy = [...keys];
        keysCopy.pop();
        setKeys(keysCopy);
        return;
      }
      if (isPrintableCharacter(event)) {
        const keysCopy = keys.concat(event.key);
        if (preventDefault(event)) {
          event.preventDefault();
          event.stopPropagation();
        }
        setKeys(keysCopy);
        fn(keysCopy.join(""));
        clearKeysAfterDelay();
      }
    };
  }
  return onKeyDown;
}

// src/get-next-item-from-search.ts
function getNextItemFromSearch(items, searchString, itemToString, currentItem) {
  if (searchString == null) {
    return currentItem;
  }
  if (!currentItem) {
    const foundItem = items.find(
      (item) => itemToString(item).toLowerCase().startsWith(searchString.toLowerCase())
    );
    return foundItem;
  }
  const matchingItems = items.filter(
    (item) => itemToString(item).toLowerCase().startsWith(searchString.toLowerCase())
  );
  if (matchingItems.length > 0) {
    let nextIndex;
    if (matchingItems.includes(currentItem)) {
      const currentIndex = matchingItems.indexOf(currentItem);
      nextIndex = currentIndex + 1;
      if (nextIndex === matchingItems.length) {
        nextIndex = 0;
      }
      return matchingItems[nextIndex];
    }
    nextIndex = items.indexOf(matchingItems[0]);
    return items[nextIndex];
  }
  return currentItem;
}

// src/use-menu.ts
var [
  MenuDescendantsProvider,
  useMenuDescendantsContext,
  useMenuDescendants,
  useMenuDescendant
] = (0, import_descendant.createDescendantContext)();
var [MenuProvider, useMenuContext] = (0, import_react_context.createContext)({
  strict: false,
  name: "MenuContext"
});
function useIds(idProp, ...prefixes) {
  const reactId = (0, import_react2.useId)();
  const id = idProp || reactId;
  return (0, import_react2.useMemo)(() => {
    return prefixes.map((prefix) => `${prefix}-${id}`);
  }, [id, prefixes]);
}
function getOwnerDocument(node) {
  var _a;
  return (_a = node == null ? void 0 : node.ownerDocument) != null ? _a : document;
}
function isActiveElement(element) {
  const doc = getOwnerDocument(element);
  return doc.activeElement === element;
}
function useMenu(props = {}) {
  const {
    id,
    closeOnSelect = true,
    closeOnBlur = true,
    initialFocusRef,
    autoSelect = true,
    isLazy,
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenProp,
    placement = "bottom-start",
    lazyBehavior = "unmount",
    direction,
    computePositionOnMount = false,
    ...popperProps
  } = props;
  const menuRef = (0, import_react2.useRef)(null);
  const buttonRef = (0, import_react2.useRef)(null);
  const descendants = useMenuDescendants();
  const focusMenu = (0, import_react2.useCallback)(() => {
    requestAnimationFrame(() => {
      var _a;
      (_a = menuRef.current) == null ? void 0 : _a.focus({ preventScroll: false });
    });
  }, []);
  const focusFirstItem = (0, import_react2.useCallback)(() => {
    const id2 = setTimeout(() => {
      var _a;
      if (initialFocusRef) {
        (_a = initialFocusRef.current) == null ? void 0 : _a.focus();
      } else {
        const first = descendants.firstEnabled();
        if (first)
          setFocusedIndex(first.index);
      }
    });
    timeoutIds.current.add(id2);
  }, [descendants, initialFocusRef]);
  const focusLastItem = (0, import_react2.useCallback)(() => {
    const id2 = setTimeout(() => {
      const last = descendants.lastEnabled();
      if (last)
        setFocusedIndex(last.index);
    });
    timeoutIds.current.add(id2);
  }, [descendants]);
  const onOpenInternal = (0, import_react2.useCallback)(() => {
    onOpenProp == null ? void 0 : onOpenProp();
    if (autoSelect) {
      focusFirstItem();
    } else {
      focusMenu();
    }
  }, [autoSelect, focusFirstItem, focusMenu, onOpenProp]);
  const { isOpen, onOpen, onClose, onToggle } = (0, import_react_use_disclosure.useDisclosure)({
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenInternal
  });
  (0, import_react_use_outside_click.useOutsideClick)({
    enabled: isOpen && closeOnBlur,
    ref: menuRef,
    handler: (event) => {
      var _a;
      if (!((_a = buttonRef.current) == null ? void 0 : _a.contains(event.target))) {
        onClose();
      }
    }
  });
  const popper = (0, import_popper.usePopper)({
    ...popperProps,
    enabled: isOpen || computePositionOnMount,
    placement,
    direction
  });
  const [focusedIndex, setFocusedIndex] = (0, import_react2.useState)(-1);
  (0, import_react_use_update_effect.useUpdateEffect)(() => {
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen]);
  (0, import_react_use_focus_effect.useFocusOnHide)(menuRef, {
    focusRef: buttonRef,
    visible: isOpen,
    shouldFocus: true
  });
  const animationState = (0, import_react_use_animation_state.useAnimationState)({ isOpen, ref: menuRef });
  const [buttonId, menuId] = useIds(id, `menu-button`, `menu-list`);
  const openAndFocusMenu = (0, import_react2.useCallback)(() => {
    onOpen();
    focusMenu();
  }, [onOpen, focusMenu]);
  const timeoutIds = (0, import_react2.useRef)(/* @__PURE__ */ new Set([]));
  useUnmountEffect(() => {
    timeoutIds.current.forEach((id2) => clearTimeout(id2));
    timeoutIds.current.clear();
  });
  const openAndFocusFirstItem = (0, import_react2.useCallback)(() => {
    onOpen();
    focusFirstItem();
  }, [focusFirstItem, onOpen]);
  const openAndFocusLastItem = (0, import_react2.useCallback)(() => {
    onOpen();
    focusLastItem();
  }, [onOpen, focusLastItem]);
  const refocus = (0, import_react2.useCallback)(() => {
    var _a, _b;
    const doc = getOwnerDocument(menuRef.current);
    const hasFocusWithin = (_a = menuRef.current) == null ? void 0 : _a.contains(doc.activeElement);
    const shouldRefocus = isOpen && !hasFocusWithin;
    if (!shouldRefocus)
      return;
    const node = (_b = descendants.item(focusedIndex)) == null ? void 0 : _b.node;
    node == null ? void 0 : node.focus();
  }, [isOpen, focusedIndex, descendants]);
  return {
    openAndFocusMenu,
    openAndFocusFirstItem,
    openAndFocusLastItem,
    onTransitionEnd: refocus,
    unstable__animationState: animationState,
    descendants,
    popper,
    buttonId,
    menuId,
    forceUpdate: popper.forceUpdate,
    orientation: "vertical",
    isOpen,
    onToggle,
    onOpen,
    onClose,
    menuRef,
    buttonRef,
    focusedIndex,
    closeOnSelect,
    closeOnBlur,
    autoSelect,
    setFocusedIndex,
    isLazy,
    lazyBehavior,
    initialFocusRef
  };
}
function useMenuButton(props = {}, externalRef = null) {
  const menu = useMenuContext();
  const { onToggle, popper, openAndFocusFirstItem, openAndFocusLastItem } = menu;
  const onKeyDown = (0, import_react2.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Enter: openAndFocusFirstItem,
        ArrowDown: openAndFocusFirstItem,
        ArrowUp: openAndFocusLastItem
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
      }
    },
    [openAndFocusFirstItem, openAndFocusLastItem]
  );
  return {
    ...props,
    ref: (0, import_react_use_merge_refs.mergeRefs)(menu.buttonRef, externalRef, popper.referenceRef),
    id: menu.buttonId,
    "data-active": (0, import_shared_utils.dataAttr)(menu.isOpen),
    "aria-expanded": menu.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": menu.menuId,
    onClick: (0, import_shared_utils.callAllHandlers)(props.onClick, onToggle),
    onKeyDown: (0, import_shared_utils.callAllHandlers)(props.onKeyDown, onKeyDown)
  };
}
function isTargetMenuItem(target) {
  var _a;
  return isHTMLElement(target) && !!((_a = target == null ? void 0 : target.getAttribute("role")) == null ? void 0 : _a.startsWith("menuitem"));
}
function useMenuList(props = {}, ref = null) {
  const menu = useMenuContext();
  if (!menu) {
    throw new Error(
      `useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>`
    );
  }
  const {
    focusedIndex,
    setFocusedIndex,
    menuRef,
    isOpen,
    onClose,
    menuId,
    isLazy,
    lazyBehavior,
    unstable__animationState: animated
  } = menu;
  const descendants = useMenuDescendantsContext();
  const createTypeaheadHandler = useShortcut({
    preventDefault: (event) => event.key !== " " && isTargetMenuItem(event.target)
  });
  const onKeyDown = (0, import_react2.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Tab: (event2) => event2.preventDefault(),
        Escape: onClose,
        ArrowDown: () => {
          const next = descendants.nextEnabled(focusedIndex);
          if (next)
            setFocusedIndex(next.index);
        },
        ArrowUp: () => {
          const prev = descendants.prevEnabled(focusedIndex);
          if (prev)
            setFocusedIndex(prev.index);
        }
      };
      const fn = keyMap[eventKey];
      if (fn) {
        event.preventDefault();
        fn(event);
        return;
      }
      const onTypeahead = createTypeaheadHandler((character) => {
        const nextItem = getNextItemFromSearch(
          descendants.values(),
          character,
          (item) => {
            var _a, _b;
            return (_b = (_a = item == null ? void 0 : item.node) == null ? void 0 : _a.textContent) != null ? _b : "";
          },
          descendants.item(focusedIndex)
        );
        if (nextItem) {
          const index = descendants.indexOf(nextItem.node);
          setFocusedIndex(index);
        }
      });
      if (isTargetMenuItem(event.target)) {
        onTypeahead(event);
      }
    },
    [
      descendants,
      focusedIndex,
      createTypeaheadHandler,
      onClose,
      setFocusedIndex
    ]
  );
  const hasBeenOpened = (0, import_react2.useRef)(false);
  if (isOpen) {
    hasBeenOpened.current = true;
  }
  const shouldRenderChildren = (0, import_lazy_utils.lazyDisclosure)({
    wasSelected: hasBeenOpened.current,
    enabled: isLazy,
    mode: lazyBehavior,
    isSelected: animated.present
  });
  return {
    ...props,
    ref: (0, import_react_use_merge_refs.mergeRefs)(menuRef, ref),
    children: shouldRenderChildren ? props.children : null,
    tabIndex: -1,
    role: "menu",
    id: menuId,
    style: {
      ...props.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: (0, import_shared_utils.callAllHandlers)(props.onKeyDown, onKeyDown)
  };
}
function useMenuPositioner(props = {}) {
  const { popper, isOpen } = useMenuContext();
  return popper.getPopperProps({
    ...props,
    style: {
      visibility: isOpen ? "visible" : "hidden",
      ...props.style
    }
  });
}
function useMenuItem(props = {}, externalRef = null) {
  const {
    onMouseEnter: onMouseEnterProp,
    onMouseMove: onMouseMoveProp,
    onMouseLeave: onMouseLeaveProp,
    onClick: onClickProp,
    onFocus: onFocusProp,
    isDisabled,
    isFocusable,
    closeOnSelect,
    type: typeProp,
    ...htmlProps
  } = props;
  const menu = useMenuContext();
  const {
    setFocusedIndex,
    focusedIndex,
    closeOnSelect: menuCloseOnSelect,
    onClose,
    menuRef,
    isOpen,
    menuId
  } = menu;
  const ref = (0, import_react2.useRef)(null);
  const id = `${menuId}-menuitem-${(0, import_react2.useId)()}`;
  const { index, register } = useMenuDescendant({
    disabled: isDisabled && !isFocusable
  });
  const onMouseEnter = (0, import_react2.useCallback)(
    (event) => {
      onMouseEnterProp == null ? void 0 : onMouseEnterProp(event);
      if (isDisabled)
        return;
      setFocusedIndex(index);
    },
    [setFocusedIndex, index, isDisabled, onMouseEnterProp]
  );
  const onMouseMove = (0, import_react2.useCallback)(
    (event) => {
      onMouseMoveProp == null ? void 0 : onMouseMoveProp(event);
      if (ref.current && !isActiveElement(ref.current)) {
        onMouseEnter(event);
      }
    },
    [onMouseEnter, onMouseMoveProp]
  );
  const onMouseLeave = (0, import_react2.useCallback)(
    (event) => {
      onMouseLeaveProp == null ? void 0 : onMouseLeaveProp(event);
      if (isDisabled)
        return;
      setFocusedIndex(-1);
    },
    [setFocusedIndex, isDisabled, onMouseLeaveProp]
  );
  const onClick = (0, import_react2.useCallback)(
    (event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (!isTargetMenuItem(event.currentTarget))
        return;
      if (closeOnSelect != null ? closeOnSelect : menuCloseOnSelect) {
        onClose();
      }
    },
    [onClose, onClickProp, menuCloseOnSelect, closeOnSelect]
  );
  const onFocus = (0, import_react2.useCallback)(
    (event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      setFocusedIndex(index);
    },
    [setFocusedIndex, onFocusProp, index]
  );
  const isFocused = index === focusedIndex;
  const trulyDisabled = isDisabled && !isFocusable;
  (0, import_react_use_update_effect.useUpdateEffect)(() => {
    if (!isOpen)
      return;
    if (isFocused && !trulyDisabled && ref.current) {
      requestAnimationFrame(() => {
        var _a;
        (_a = ref.current) == null ? void 0 : _a.focus();
      });
    } else if (menuRef.current && !isActiveElement(menuRef.current)) {
      menuRef.current.focus();
    }
  }, [isFocused, trulyDisabled, menuRef, isOpen]);
  const clickableProps = (0, import_clickable.useClickable)({
    onClick,
    onFocus,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    ref: (0, import_react_use_merge_refs.mergeRefs)(register, ref, externalRef),
    isDisabled,
    isFocusable
  });
  return {
    ...htmlProps,
    ...clickableProps,
    type: typeProp != null ? typeProp : clickableProps.type,
    id,
    role: "menuitem",
    tabIndex: isFocused ? 0 : -1
  };
}
function useMenuOption(props = {}, ref = null) {
  const { type = "radio", isChecked, ...rest } = props;
  const ownProps = useMenuItem(rest, ref);
  return {
    ...ownProps,
    role: `menuitem${type}`,
    "aria-checked": isChecked
  };
}
function useMenuOptionGroup(props = {}) {
  const {
    children,
    type = "radio",
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
    ...htmlProps
  } = props;
  const isRadio = type === "radio";
  const fallback = isRadio ? "" : [];
  const [value, setValue] = (0, import_react_use_controllable_state.useControllableState)({
    defaultValue: defaultValue != null ? defaultValue : fallback,
    value: valueProp,
    onChange: onChangeProp
  });
  const onChange = (0, import_react2.useCallback)(
    (selectedValue) => {
      if (type === "radio" && typeof value === "string") {
        setValue(selectedValue);
      }
      if (type === "checkbox" && Array.isArray(value)) {
        const nextValue = value.includes(selectedValue) ? value.filter((item) => item !== selectedValue) : value.concat(selectedValue);
        setValue(nextValue);
      }
    },
    [value, setValue, type]
  );
  const validChildren = (0, import_react_children_utils.getValidChildren)(children);
  const clones = validChildren.map((child) => {
    if (child.type.id !== "MenuItemOption")
      return child;
    const onClick = (event) => {
      var _a, _b;
      onChange(child.props.value);
      (_b = (_a = child.props).onClick) == null ? void 0 : _b.call(_a, event);
    };
    const isChecked = type === "radio" ? child.props.value === value : value.includes(child.props.value);
    return (0, import_react2.cloneElement)(child, {
      type,
      onClick,
      isChecked
    });
  });
  return {
    ...htmlProps,
    children: clones
  };
}
function useMenuState() {
  const { isOpen, onClose } = useMenuContext();
  return { isOpen, onClose };
}
function isHTMLElement(el) {
  var _a;
  if (!isElement(el))
    return false;
  const win = (_a = el.ownerDocument.defaultView) != null ? _a : window;
  return el instanceof win.HTMLElement;
}
function isElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function useUnmountEffect(fn, deps = []) {
  return (0, import_react2.useEffect)(
    () => () => fn(),
    deps
  );
}

// src/menu.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var [MenuStylesProvider, useMenuStyles] = (0, import_react_context2.createContext)({
  name: `MenuStylesContext`,
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
});
var Menu = (props) => {
  const { children } = props;
  const styles = (0, import_system.useMultiStyleConfig)("Menu", props);
  const ownProps = (0, import_system.omitThemingProps)(props);
  const { direction } = (0, import_system.useTheme)();
  const { descendants, ...ctx } = useMenu({ ...ownProps, direction });
  const context = (0, import_react3.useMemo)(() => ctx, [ctx]);
  const { isOpen, onClose, forceUpdate } = context;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuDescendantsProvider, { value: descendants, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuProvider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuStylesProvider, { value: styles, children: (0, import_shared_utils2.runIfFn)(children, { isOpen, onClose, forceUpdate }) }) }) });
};
Menu.displayName = "Menu";

// src/menu-button.tsx
var import_system2 = require("@chakra-ui/system");
var import_shared_utils3 = require("@chakra-ui/shared-utils");
var import_jsx_runtime2 = require("react/jsx-runtime");
var StyledMenuButton = (0, import_system2.forwardRef)((props, ref) => {
  const styles = useMenuStyles();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_system2.chakra.button,
    {
      ref,
      ...props,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...styles.button
      }
    }
  );
});
var MenuButton = (0, import_system2.forwardRef)(
  (props, ref) => {
    const { children, as: As, ...rest } = props;
    const buttonProps = useMenuButton(rest, ref);
    const Element = As || StyledMenuButton;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Element,
      {
        ...buttonProps,
        className: (0, import_shared_utils3.cx)("chakra-menu__menu-button", props.className),
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_system2.chakra.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: props.children
          }
        )
      }
    );
  }
);
MenuButton.displayName = "MenuButton";

// src/menu-command.tsx
var import_system3 = require("@chakra-ui/system");
var import_jsx_runtime3 = require("react/jsx-runtime");
var MenuCommand = (0, import_system3.forwardRef)(
  (props, ref) => {
    const styles = useMenuStyles();
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_system3.chakra.span,
      {
        ref,
        ...props,
        __css: styles.command,
        className: "chakra-menu__command"
      }
    );
  }
);
MenuCommand.displayName = "MenuCommand";

// src/menu-divider.tsx
var import_system4 = require("@chakra-ui/system");
var import_shared_utils4 = require("@chakra-ui/shared-utils");
var import_jsx_runtime4 = require("react/jsx-runtime");
var MenuDivider = (props) => {
  const { className, ...rest } = props;
  const styles = useMenuStyles();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_system4.chakra.hr,
    {
      "aria-orientation": "horizontal",
      className: (0, import_shared_utils4.cx)("chakra-menu__divider", className),
      ...rest,
      __css: styles.divider
    }
  );
};
MenuDivider.displayName = "MenuDivider";

// src/menu-group.tsx
var import_system5 = require("@chakra-ui/system");
var import_shared_utils5 = require("@chakra-ui/shared-utils");
var import_jsx_runtime5 = require("react/jsx-runtime");
var MenuGroup = (0, import_system5.forwardRef)((props, ref) => {
  const { title, children, className, ...rest } = props;
  const _className = (0, import_shared_utils5.cx)("chakra-menu__group__title", className);
  const styles = useMenuStyles();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { ref, className: "chakra-menu__group", role: "group", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_system5.chakra.p, { className: _className, ...rest, __css: styles.groupTitle, children: title }),
    children
  ] });
});
MenuGroup.displayName = "MenuGroup";

// src/menu-icon.tsx
var import_system6 = require("@chakra-ui/system");
var import_shared_utils6 = require("@chakra-ui/shared-utils");
var import_react4 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var MenuIcon = (props) => {
  const { className, children, ...rest } = props;
  const child = import_react4.Children.only(children);
  const clone = (0, import_react4.isValidElement)(child) ? (0, import_react4.cloneElement)(child, {
    focusable: "false",
    "aria-hidden": true,
    className: (0, import_shared_utils6.cx)("chakra-menu__icon", child.props.className)
  }) : null;
  const _className = (0, import_shared_utils6.cx)("chakra-menu__icon-wrapper", className);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_system6.chakra.span,
    {
      className: _className,
      ...rest,
      __css: {
        flexShrink: 0
      },
      children: clone
    }
  );
};
MenuIcon.displayName = "MenuIcon";

// src/menu-item.tsx
var import_system8 = require("@chakra-ui/system");
var import_shared_utils7 = require("@chakra-ui/shared-utils");

// src/styled-menu-item.tsx
var import_system7 = require("@chakra-ui/system");
var import_react5 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var StyledMenuItem = (0, import_system7.forwardRef)(
  (props, ref) => {
    const { type, ...rest } = props;
    const styles = useMenuStyles();
    const btnType = rest.as || type ? type != null ? type : void 0 : "button";
    const buttonStyles = (0, import_react5.useMemo)(
      () => ({
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        ...styles.item
      }),
      [styles.item]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_system7.chakra.button, { ref, type: btnType, ...rest, __css: buttonStyles });
  }
);

// src/menu-item.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var MenuItem = (0, import_system8.forwardRef)((props, ref) => {
  const {
    icon,
    iconSpacing = "0.75rem",
    command,
    commandSpacing = "0.75rem",
    children,
    ...rest
  } = props;
  const menuitemProps = useMenuItem(rest, ref);
  const shouldWrap = icon || command;
  const _children = shouldWrap ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { style: { pointerEvents: "none", flex: 1 }, children }) : children;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    StyledMenuItem,
    {
      ...menuitemProps,
      className: (0, import_shared_utils7.cx)("chakra-menu__menuitem", menuitemProps.className),
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(MenuIcon, { fontSize: "0.8em", marginEnd: iconSpacing, children: icon }),
        _children,
        command && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(MenuCommand, { marginStart: commandSpacing, children: command })
      ]
    }
  );
});
MenuItem.displayName = "MenuItem";

// src/menu-item-option.tsx
var import_system9 = require("@chakra-ui/system");
var import_shared_utils8 = require("@chakra-ui/shared-utils");
var import_jsx_runtime9 = require("react/jsx-runtime");
var CheckIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) });
var MenuItemOption = (0, import_system9.forwardRef)(
  (props, ref) => {
    const { icon, iconSpacing = "0.75rem", ...rest } = props;
    const optionProps = useMenuOption(rest, ref);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      StyledMenuItem,
      {
        ...optionProps,
        className: (0, import_shared_utils8.cx)("chakra-menu__menuitem-option", rest.className),
        children: [
          icon !== null && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            MenuIcon,
            {
              fontSize: "0.8em",
              marginEnd: iconSpacing,
              opacity: props.isChecked ? 1 : 0,
              children: icon || /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CheckIcon, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: { flex: 1 }, children: optionProps.children })
        ]
      }
    );
  }
);
MenuItemOption.id = "MenuItemOption";
MenuItemOption.displayName = "MenuItemOption";

// src/menu-list.tsx
var import_shared_utils9 = require("@chakra-ui/shared-utils");
var import_system10 = require("@chakra-ui/system");
var import_framer_motion = require("framer-motion");
var import_jsx_runtime10 = require("react/jsx-runtime");
var motionVariants = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    transitionEnd: {
      visibility: "hidden"
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut"
    }
  }
};
var MenuTransition = (0, import_system10.chakra)(import_framer_motion.motion.div);
var MenuList = (0, import_system10.forwardRef)(function MenuList2(props, ref) {
  var _a, _b;
  const { rootProps, motionProps, ...rest } = props;
  const {
    isOpen,
    onTransitionEnd,
    unstable__animationState: animated
  } = useMenuContext();
  const listProps = useMenuList(rest, ref);
  const positionerProps = useMenuPositioner(rootProps);
  const styles = useMenuStyles();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_system10.chakra.div,
    {
      ...positionerProps,
      __css: { zIndex: (_b = props.zIndex) != null ? _b : (_a = styles.list) == null ? void 0 : _a.zIndex },
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        MenuTransition,
        {
          variants: motionVariants,
          initial: false,
          animate: isOpen ? "enter" : "exit",
          __css: { outline: 0, ...styles.list },
          ...motionProps,
          className: (0, import_shared_utils9.cx)("chakra-menu__menu-list", listProps.className),
          ...listProps,
          onUpdate: onTransitionEnd,
          onAnimationComplete: (0, import_shared_utils9.callAll)(
            animated.onComplete,
            listProps.onAnimationComplete
          )
        }
      )
    }
  );
});
MenuList.displayName = "MenuList";

// src/menu-option-group.tsx
var import_shared_utils10 = require("@chakra-ui/shared-utils");
var import_jsx_runtime11 = require("react/jsx-runtime");
var MenuOptionGroup = (props) => {
  const { className, title, ...rest } = props;
  const ownProps = useMenuOptionGroup(rest);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    MenuGroup,
    {
      title,
      className: (0, import_shared_utils10.cx)("chakra-menu__option-group", className),
      ...ownProps
    }
  );
};
MenuOptionGroup.displayName = "MenuOptionGroup";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Menu,
  MenuButton,
  MenuCommand,
  MenuDescendantsProvider,
  MenuDivider,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useMenu,
  useMenuButton,
  useMenuContext,
  useMenuDescendant,
  useMenuDescendants,
  useMenuDescendantsContext,
  useMenuItem,
  useMenuList,
  useMenuOption,
  useMenuOptionGroup,
  useMenuPositioner,
  useMenuState,
  useMenuStyles
});
