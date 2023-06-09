'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('@emotion/cache');
var emotionElement = require('../../dist/emotion-element-20108edd.cjs.prod.js');
require('@babel/runtime/helpers/extends');
require('@emotion/weak-memoize');
require('hoist-non-react-statics');
require('../../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.prod.js');
require('@emotion/utils');
require('@emotion/serialize');
require('@emotion/use-insertion-effect-with-fallbacks');
var ReactJSXRuntime = require('react/jsx-runtime');

var Fragment = ReactJSXRuntime.Fragment;
function jsx(type, props, key) {
  if (!emotionElement.hasOwnProperty.call(props, 'css')) {
    return ReactJSXRuntime.jsx(type, props, key);
  }

  return ReactJSXRuntime.jsx(emotionElement.Emotion, emotionElement.createEmotionProps(type, props), key);
}
function jsxs(type, props, key) {
  if (!emotionElement.hasOwnProperty.call(props, 'css')) {
    return ReactJSXRuntime.jsxs(type, props, key);
  }

  return ReactJSXRuntime.jsxs(emotionElement.Emotion, emotionElement.createEmotionProps(type, props), key);
}

exports.Fragment = Fragment;
exports.jsx = jsx;
exports.jsxs = jsxs;
