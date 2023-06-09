"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseBreakpoints = exports.generateSpacingClassNames = exports.generateSizeClassNames = exports.generateGridStyles = exports.generateGridSizeStyles = exports.generateGridRowSpacingStyles = exports.generateGridOffsetStyles = exports.generateGridDirectionStyles = exports.generateGridColumnsStyles = exports.generateGridColumnSpacingStyles = exports.generateDirectionClasses = exports.filterBreakpointKeys = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
const filterBreakpointKeys = (breakpointsKeys, responsiveKeys) => breakpointsKeys.filter(key => responsiveKeys.includes(key));
exports.filterBreakpointKeys = filterBreakpointKeys;
const traverseBreakpoints = (breakpoints, responsive, iterator) => {
  const smallestBreakpoint = breakpoints.keys[0]; // the keys is sorted from smallest to largest by `createBreakpoints`.

  if (Array.isArray(responsive)) {
    responsive.forEach((breakpointValue, index) => {
      iterator((responsiveStyles, style) => {
        if (index <= breakpoints.keys.length - 1) {
          if (index === 0) {
            Object.assign(responsiveStyles, style);
          } else {
            responsiveStyles[breakpoints.up(breakpoints.keys[index])] = style;
          }
        }
      }, breakpointValue);
    });
  } else if (responsive && typeof responsive === 'object') {
    // prevent null
    // responsive could be a very big object, pick the smallest responsive values

    const keys = Object.keys(responsive).length > breakpoints.keys.length ? breakpoints.keys : filterBreakpointKeys(breakpoints.keys, Object.keys(responsive));
    keys.forEach(key => {
      if (breakpoints.keys.indexOf(key) !== -1) {
        // @ts-ignore already checked that responsive is an object
        const breakpointValue = responsive[key];
        if (breakpointValue !== undefined) {
          iterator((responsiveStyles, style) => {
            if (smallestBreakpoint === key) {
              Object.assign(responsiveStyles, style);
            } else {
              responsiveStyles[breakpoints.up(key)] = style;
            }
          }, breakpointValue);
        }
      }
    });
  } else if (typeof responsive === 'number' || typeof responsive === 'string') {
    iterator((responsiveStyles, style) => {
      Object.assign(responsiveStyles, style);
    }, responsive);
  }
};
exports.traverseBreakpoints = traverseBreakpoints;
const generateGridSizeStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.gridSize, (appendStyle, value) => {
    let style = {};
    if (value === true) {
      style = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    }
    if (value === 'auto') {
      style = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    }
    if (typeof value === 'number') {
      style = {
        flexGrow: 0,
        flexBasis: 'auto',
        width: `calc(100% * ${value} / var(--Grid-columns)${ownerState.nested && ownerState.container ? ` + var(--Grid-columnSpacing)` : ''})`
      };
    }
    appendStyle(styles, style);
  });
  return styles;
};
exports.generateGridSizeStyles = generateGridSizeStyles;
const generateGridOffsetStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.gridOffset, (appendStyle, value) => {
    let style = {};
    if (value === 'auto') {
      style = {
        marginLeft: 'auto'
      };
    }
    if (typeof value === 'number') {
      style = {
        marginLeft: value === 0 ? '0px' : `calc(100% * ${value} / var(--Grid-columns))`
      };
    }
    appendStyle(styles, style);
  });
  return styles;
};
exports.generateGridOffsetStyles = generateGridOffsetStyles;
const generateGridColumnsStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {
    '--Grid-columns': 12
  };
  traverseBreakpoints(theme.breakpoints, ownerState.columns, (appendStyle, value) => {
    appendStyle(styles, {
      '--Grid-columns': value
    });
  });
  return styles;
};
exports.generateGridColumnsStyles = generateGridColumnsStyles;
const generateGridRowSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.rowSpacing, (appendStyle, value) => {
    var _theme$spacing;
    appendStyle(styles, {
      '--Grid-rowSpacing': typeof value === 'string' ? value : (_theme$spacing = theme.spacing) == null ? void 0 : _theme$spacing.call(theme, value)
    });
  });
  return styles;
};
exports.generateGridRowSpacingStyles = generateGridRowSpacingStyles;
const generateGridColumnSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.columnSpacing, (appendStyle, value) => {
    var _theme$spacing2;
    appendStyle(styles, {
      '--Grid-columnSpacing': typeof value === 'string' ? value : (_theme$spacing2 = theme.spacing) == null ? void 0 : _theme$spacing2.call(theme, value)
    });
  });
  return styles;
};
exports.generateGridColumnSpacingStyles = generateGridColumnSpacingStyles;
const generateGridDirectionStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.direction, (appendStyle, value) => {
    appendStyle(styles, {
      flexDirection: value
    });
  });
  return styles;
};
exports.generateGridDirectionStyles = generateGridDirectionStyles;
const generateGridStyles = ({
  ownerState
}) => {
  return (0, _extends2.default)({
    minWidth: 0,
    boxSizing: 'border-box'
  }, ownerState.container ? (0, _extends2.default)({
    display: 'flex',
    flexWrap: 'wrap'
  }, ownerState.wrap && ownerState.wrap !== 'wrap' && {
    flexWrap: ownerState.wrap
  }, {
    margin: `calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2)`
  }, ownerState.disableEqualOverflow && {
    margin: `calc(var(--Grid-rowSpacing) * -1) 0px 0px calc(var(--Grid-columnSpacing) * -1)`
  }, ownerState.nested ? (0, _extends2.default)({
    padding: `calc(var(--Grid-nested-rowSpacing) / 2) calc(var(--Grid-nested-columnSpacing) / 2)`
  }, (ownerState.disableEqualOverflow || ownerState.parentDisableEqualOverflow) && {
    padding: `calc(var(--Grid-nested-rowSpacing)) 0px 0px calc(var(--Grid-nested-columnSpacing))`
  }) : {
    '--Grid-nested-rowSpacing': 'var(--Grid-rowSpacing)',
    '--Grid-nested-columnSpacing': 'var(--Grid-columnSpacing)'
  }) : (0, _extends2.default)({
    padding: `calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2)`
  }, ownerState.disableEqualOverflow && {
    padding: `calc(var(--Grid-rowSpacing)) 0px 0px calc(var(--Grid-columnSpacing))`
  }));
};
exports.generateGridStyles = generateGridStyles;
const generateSizeClassNames = gridSize => {
  const classNames = [];
  Object.entries(gridSize).forEach(([key, value]) => {
    if (value !== false && value !== undefined) {
      classNames.push(`grid-${key}-${String(value)}`);
    }
  });
  return classNames;
};
exports.generateSizeClassNames = generateSizeClassNames;
const generateSpacingClassNames = (spacing, smallestBreakpoint = 'xs') => {
  function isValidSpacing(val) {
    if (val === undefined) {
      return false;
    }
    return typeof val === 'string' && !Number.isNaN(Number(val)) || typeof val === 'number' && val > 0;
  }
  if (isValidSpacing(spacing)) {
    return [`spacing-${smallestBreakpoint}-${String(spacing)}`];
  }
  if (typeof spacing === 'object' && !Array.isArray(spacing)) {
    const classNames = [];
    Object.entries(spacing).forEach(([key, value]) => {
      if (isValidSpacing(value)) {
        classNames.push(`spacing-${key}-${String(value)}`);
      }
    });
    return classNames;
  }
  return [];
};
exports.generateSpacingClassNames = generateSpacingClassNames;
const generateDirectionClasses = direction => {
  if (direction === undefined) {
    return [];
  }
  if (typeof direction === 'object') {
    return Object.entries(direction).map(([key, value]) => `direction-${key}-${value}`);
  }
  return [`direction-xs-${String(direction)}`];
};
exports.generateDirectionClasses = generateDirectionClasses;