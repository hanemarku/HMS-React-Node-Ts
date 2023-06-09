(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define("MomentUtl", ["moment"], factory);
	else if(typeof exports === 'object')
		exports["MomentUtl"] = factory(require("moment"));
	else
		root["MomentUtl"] = factory(root["moment"]);
})((typeof self !== 'undefined' ? self : (typeof global !== 'undefined' ? global : this)), function(__WEBPACK_EXTERNAL_MODULE_moment__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./res/locales.js":
/*!************************!*\
  !*** ./res/locales.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_FALLBACK_LOCALE": () => (/* binding */ DEFAULT_FALLBACK_LOCALE),
/* harmony export */   "allSupportedLocales": () => (/* binding */ allSupportedLocales),
/* harmony export */   "allSupportedLocalesObj": () => (/* binding */ allSupportedLocalesObj)
/* harmony export */ });
/**
 * This file was automatically built by "moment-utl" or it has been recreated
 * with the "npx moment-utl-locales" command to use the locales of the "moment" package
 * used by the client code.
 */

/**
 * @type {string}
 */
var DEFAULT_FALLBACK_LOCALE = "en";
/**
 * @type {string[]}
 */

var allSupportedLocales = ["af", "ar", "ar-dz", "ar-kw", "ar-ly", "ar-ma", "ar-sa", "ar-tn", "az", "be", "bg", "bm", "bn", "bn-bd", "bo", "br", "bs", "ca", "cs", "cv", "cy", "da", "de", "de-at", "de-ch", "dv", "el", "en", "en-au", "en-ca", "en-gb", "en-ie", "en-il", "en-in", "en-nz", "en-sg", "eo", "es", "es-do", "es-mx", "es-us", "et", "eu", "fa", "fi", "fil", "fo", "fr", "fr-ca", "fr-ch", "fy", "ga", "gd", "gl", "gom-deva", "gom-latn", "gu", "he", "hi", "hr", "hu", "hy-am", "id", "is", "it", "it-ch", "ja", "jv", "ka", "kk", "km", "kn", "ko", "ku", "ky", "lb", "lo", "lt", "lv", "me", "mi", "mk", "ml", "mn", "mr", "ms", "ms-my", "mt", "my", "nb", "ne", "nl", "nl-be", "nn", "oc-lnc", "pa-in", "pl", "pt", "pt-br", "ro", "ru", "sd", "se", "si", "sk", "sl", "sq", "sr", "sr-cyrl", "ss", "sv", "sw", "ta", "te", "tet", "tg", "th", "tk", "tl-ph", "tlh", "tr", "tzl", "tzm", "tzm-latn", "ug-cn", "uk", "ur", "uz", "uz-latn", "vi", "x-pseudo", "yo", "zh-cn", "zh-hk", "zh-mo", "zh-tw"];
/**
 * @type {Object}
 */

var allSupportedLocalesObj = {
  "af": 1,
  "ar": 2,
  "ar-dz": 3,
  "ar-kw": 4,
  "ar-ly": 5,
  "ar-ma": 6,
  "ar-sa": 7,
  "ar-tn": 8,
  "az": 9,
  "be": 10,
  "bg": 11,
  "bm": 12,
  "bn": 13,
  "bn-bd": 14,
  "bo": 15,
  "br": 16,
  "bs": 17,
  "ca": 18,
  "cs": 19,
  "cv": 20,
  "cy": 21,
  "da": 22,
  "de": 23,
  "de-at": 24,
  "de-ch": 25,
  "dv": 26,
  "el": 27,
  "en": 28,
  "en-au": 29,
  "en-ca": 30,
  "en-gb": 31,
  "en-ie": 32,
  "en-il": 33,
  "en-in": 34,
  "en-nz": 35,
  "en-sg": 36,
  "eo": 37,
  "es": 38,
  "es-do": 39,
  "es-mx": 40,
  "es-us": 41,
  "et": 42,
  "eu": 43,
  "fa": 44,
  "fi": 45,
  "fil": 46,
  "fo": 47,
  "fr": 48,
  "fr-ca": 49,
  "fr-ch": 50,
  "fy": 51,
  "ga": 52,
  "gd": 53,
  "gl": 54,
  "gom-deva": 55,
  "gom-latn": 56,
  "gu": 57,
  "he": 58,
  "hi": 59,
  "hr": 60,
  "hu": 61,
  "hy-am": 62,
  "id": 63,
  "is": 64,
  "it": 65,
  "it-ch": 66,
  "ja": 67,
  "jv": 68,
  "ka": 69,
  "kk": 70,
  "km": 71,
  "kn": 72,
  "ko": 73,
  "ku": 74,
  "ky": 75,
  "lb": 76,
  "lo": 77,
  "lt": 78,
  "lv": 79,
  "me": 80,
  "mi": 81,
  "mk": 82,
  "ml": 83,
  "mn": 84,
  "mr": 85,
  "ms": 86,
  "ms-my": 87,
  "mt": 88,
  "my": 89,
  "nb": 90,
  "ne": 91,
  "nl": 92,
  "nl-be": 93,
  "nn": 94,
  "oc-lnc": 95,
  "pa-in": 96,
  "pl": 97,
  "pt": 98,
  "pt-br": 99,
  "ro": 100,
  "ru": 101,
  "sd": 102,
  "se": 103,
  "si": 104,
  "sk": 105,
  "sl": 106,
  "sq": 107,
  "sr": 108,
  "sr-cyrl": 109,
  "ss": 110,
  "sv": 111,
  "sw": 112,
  "ta": 113,
  "te": 114,
  "tet": 115,
  "tg": 116,
  "th": 117,
  "tk": 118,
  "tl-ph": 119,
  "tlh": 120,
  "tr": 121,
  "tzl": 122,
  "tzm": 123,
  "tzm-latn": 124,
  "ug-cn": 125,
  "uk": 126,
  "ur": 127,
  "uz": 128,
  "uz-latn": 129,
  "vi": 130,
  "x-pseudo": 131,
  "yo": 132,
  "zh-cn": 133,
  "zh-hk": 134,
  "zh-mo": 135,
  "zh-tw": 136
};


/***/ }),

/***/ "./src/allSupportedLocales.js":
/*!************************************!*\
  !*** ./src/allSupportedLocales.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allSupportedLocales)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _res_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../res/locales */ "./res/locales.js");


/*
 * Copyright (c) 2021 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Returns all the supported locales by Moment, without the need
 * to having them being loaded into Moment.
 *
 * @return {string[]} An array of all the supported locales where each value is a string
 *                    identifying a locale.
 */

function allSupportedLocales() {
  return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_res_locales__WEBPACK_IMPORTED_MODULE_1__.allSupportedLocales);
}

/***/ }),

/***/ "./src/allSupportedLocalesMap.js":
/*!***************************************!*\
  !*** ./src/allSupportedLocalesMap.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allSupportedLocalesMap)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _res_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../res/locales */ "./res/locales.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Returns a map of all the supported locales by Moment, without the need
 * to having them being loaded into Moment.
 *
 * @return {Object} An object where each key is a string identifying a locale
 *                  and the corresponding value is a unique int identifying the locale
 *                  starting from 1.
 */

function allSupportedLocalesMap() {
  return _objectSpread({}, _res_locales__WEBPACK_IMPORTED_MODULE_1__.allSupportedLocalesObj);
}

/***/ }),

/***/ "./src/defaultFallbackLocale.js":
/*!**************************************!*\
  !*** ./src/defaultFallbackLocale.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultFallbackLocale)
/* harmony export */ });
/* harmony import */ var _res_locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../res/locales */ "./res/locales.js");
/*
 * Copyright (c) 2021 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Returns the default fallback locale.
 * This will be USA's English, i.e. "en".
 *
 * @return {string} The default fallback locale.
 */

function defaultFallbackLocale() {
  return _res_locales__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_FALLBACK_LOCALE;
}

/***/ }),

/***/ "./src/firstDateOfCurrentMonth.js":
/*!****************************************!*\
  !*** ./src/firstDateOfCurrentMonth.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ firstDateOfCurrentMonth)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright (c) 2021 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Returns the first date of the current month.
 *
 * @param {string} format The format string for the date.
 * @return {string} The first date of the current month.
 */

function firstDateOfCurrentMonth() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "YYYY-MM-DD";
  return moment__WEBPACK_IMPORTED_MODULE_0___default()().date(1).format(format);
}

/***/ }),

/***/ "./src/getWeekDays.js":
/*!****************************!*\
  !*** ./src/getWeekDays.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeekDays)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright (c) 2021 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Returns the days of the week in which a given date or today's date falls in.
 *
 * @param {Moment|Date|string|number|undefined} [date] The date to use for which to return the days of the week in which the date falls in.
 *                                                     If not given, today's date is assumed.
 * @return {Date[]} The days of the week.
 */

function getWeekDays() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
  date = moment__WEBPACK_IMPORTED_MODULE_0___default()(date).startOf("week").toDate();
  var days = [date];

  for (var i = 1; i < 7; i += 1) {
    days.push(moment__WEBPACK_IMPORTED_MODULE_0___default()(date).add(i, "days").toDate());
  }

  return days;
}

/***/ }),

/***/ "./src/getWeekRange.js":
/*!*****************************!*\
  !*** ./src/getWeekRange.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeekRange)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright (c) 2021 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Returns the range of the week in which a given date or today's date falls in.
 *
 * @param {Moment|Date|string|number|undefined} [date] The date to use for which to return the range of the week in which the date falls in.
 *                                                     If not given, today's date is assumed.
 * @return {Object} An object with two properties: "from" containing the initial day of the week (Date instance) and "to" containing the final day of the week (Date instance).
 */

function getWeekRange() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
  return {
    from: moment__WEBPACK_IMPORTED_MODULE_0___default()(date).startOf("week").toDate(),
    to: moment__WEBPACK_IMPORTED_MODULE_0___default()(date).endOf("week").toDate()
  };
}

/***/ }),

/***/ "./src/importLocale.js":
/*!*****************************!*\
  !*** ./src/importLocale.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ importLocale)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toMomentLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toMomentLocale */ "./src/toMomentLocale.js");
/* harmony import */ var _res_locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../res/locales */ "./res/locales.js");




/*
 * Copyright (c) 2021 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


/**
 * Imports a Moment locale asynchronously (using dynamic imports).
 *
 * @param {string|*} locale The locale to import. A value which is not a string may be passed and it will be normalized to an empty string
 *                          which will be treated as an unknown locale resolving to the Moment's default locale (USA's English, i.e. "en").
 * @param {(normalizedLocale: string, locale: string|*) => *} [unknownLocaleCallback] A callback called with the Moment's default locale (USA's English, i.e. "en")
 *                                                                                    if the given locale is unknown as its first parameter and the given unknown locale
 *                                                                                    as its second parameter.
 *                                                                                    This callback will be called only when the given locale is not a locale
 *                                                                                    known to Moment and it's not the Moment's default locale (USA's English, i.e. "en").
 *                                                                                    If a locale is unknown, the callback is called before resolving
 *                                                                                    the returned promise and the promise will resolve with the Moment's default locale
 *                                                                                    (USA's English, i.e. "en").
 * @return {Promise} A promise which, if fulfilled, resolves with the normalized locale when the given locale has been imported
 *                   successfully or rejects with an error if the given locale cannot be imported
 *                   (e.g. the locale chunk filename is not found or there is a network error).
 *                   If the locale is unknown, then the returned promise doesn't reject.
 */

function importLocale(_x) {
  return _importLocale.apply(this, arguments);
}

function _importLocale() {
  _importLocale = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(locale) {
    var unknownLocaleCallback,
        _toMomentLocale,
        _toMomentLocale2,
        normalizedLocale,
        isKnown,
        promise,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            unknownLocaleCallback = _args.length > 1 && _args[1] !== undefined ? _args[1] : void 0;
            _toMomentLocale = (0,_toMomentLocale__WEBPACK_IMPORTED_MODULE_3__["default"])(locale), _toMomentLocale2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_toMomentLocale, 2), normalizedLocale = _toMomentLocale2[0], isKnown = _toMomentLocale2[1];
            promise = Promise.resolve();

            if (isKnown) {
              if (normalizedLocale !== _res_locales__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_FALLBACK_LOCALE) {
                promise = __webpack_require__("./node_modules/moment/locale lazy recursive ^\\.\\/.*$")("./".concat(normalizedLocale));
              } else {// Moment does not bundle its default locale in a separate file,
                // so there's nothing to do here.
              }
            } else {
              typeof unknownLocaleCallback === "function" && unknownLocaleCallback(normalizedLocale, locale);
            }

            _context.next = 6;
            return promise;

          case 6:
            return _context.abrupt("return", normalizedLocale);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _importLocale.apply(this, arguments);
}

/***/ }),

/***/ "./src/toMomentLocale.js":
/*!*******************************!*\
  !*** ./src/toMomentLocale.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toMomentLocale)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _allSupportedLocalesMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allSupportedLocalesMap */ "./src/allSupportedLocalesMap.js");
/* harmony import */ var _res_locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res/locales */ "./res/locales.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


/**
 * @type {string}
 */

var NORMALIZED_LOCALE_DESIGNATORS_SEPARATOR = "-";
/**
 * Normalizes a locale.
 *
 * @param {string} locale The locale.
 * @return {string} The normalized locale.
 */

var normalizeLocale = function normalizeLocale(locale) {
  return locale.replace("_", NORMALIZED_LOCALE_DESIGNATORS_SEPARATOR).toLowerCase();
};
/**
 * Converts a string representing a locale to a Moment locale.
 *
 * This function reformats an incoming locale (e.g. "ar_KW" to "ar-kw")
 * checking if it's supported by Moment and falling back to language code only (e.g. "ar"),
 * then falling back to the Moment's default locale (USA's English, i.e. "en").
 *
 * @param {string|*} locale A string representing a locale. A value which is not a string may be passed and it will be normalized to an empty string
 *                          and the returned locale will be the Moment's default locale (USA's English, i.e. "en").
 * @return {Array} A tuple where the first element is a string containing the normalized
 *                 Moment locale for the given "locale" parameter and the second element
 *                 is a boolean indicating whether the locale is known or not
 *                 (if "true", the given locale is known and was looked up; if "false",
 *                 it means that the given locale was not looked up and is unknown).
 *                 When the given locale is unknown, the returned array will contain
 *                 the Moment's default locale as its first element (USA's English, i.e. "en").
 */


function toMomentLocale(locale) {
  var _objectSpread2;

  var normalizedLocale = normalizeLocale(typeof locale !== "string" ? "" : locale);
  var defaultNormalizedLocale = _res_locales__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_FALLBACK_LOCALE;
  var localesToTry = [normalizedLocale, normalizedLocale.split(NORMALIZED_LOCALE_DESIGNATORS_SEPARATOR)[0]];

  var allLocalesMap = _objectSpread(_objectSpread({}, (0,_allSupportedLocalesMap__WEBPACK_IMPORTED_MODULE_1__["default"])()), {}, (_objectSpread2 = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, defaultNormalizedLocale, -1), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, defaultNormalizedLocale.split(NORMALIZED_LOCALE_DESIGNATORS_SEPARATOR)[0], -1), _objectSpread2));

  for (var _i = 0, _localesToTry = localesToTry; _i < _localesToTry.length; _i++) {
    var localeToTry = _localesToTry[_i];

    if (typeof allLocalesMap[localeToTry] !== "undefined") {
      return [localeToTry, true];
    }
  }

  return [defaultNormalizedLocale, false];
}

/***/ }),

/***/ "./node_modules/moment/locale lazy recursive ^\\.\\/.*$":
/*!********************************************************************!*\
  !*** ./node_modules/moment/locale/ lazy ^\.\/.*$ namespace object ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": [
		"./node_modules/moment/locale/af.js",
		"node_modules_moment_locale_af_js"
	],
	"./af.js": [
		"./node_modules/moment/locale/af.js",
		"node_modules_moment_locale_af_js"
	],
	"./ar": [
		"./node_modules/moment/locale/ar.js",
		"node_modules_moment_locale_ar_js"
	],
	"./ar-dz": [
		"./node_modules/moment/locale/ar-dz.js",
		"node_modules_moment_locale_ar-dz_js"
	],
	"./ar-dz.js": [
		"./node_modules/moment/locale/ar-dz.js",
		"node_modules_moment_locale_ar-dz_js"
	],
	"./ar-kw": [
		"./node_modules/moment/locale/ar-kw.js",
		"node_modules_moment_locale_ar-kw_js"
	],
	"./ar-kw.js": [
		"./node_modules/moment/locale/ar-kw.js",
		"node_modules_moment_locale_ar-kw_js"
	],
	"./ar-ly": [
		"./node_modules/moment/locale/ar-ly.js",
		"node_modules_moment_locale_ar-ly_js"
	],
	"./ar-ly.js": [
		"./node_modules/moment/locale/ar-ly.js",
		"node_modules_moment_locale_ar-ly_js"
	],
	"./ar-ma": [
		"./node_modules/moment/locale/ar-ma.js",
		"node_modules_moment_locale_ar-ma_js"
	],
	"./ar-ma.js": [
		"./node_modules/moment/locale/ar-ma.js",
		"node_modules_moment_locale_ar-ma_js"
	],
	"./ar-sa": [
		"./node_modules/moment/locale/ar-sa.js",
		"node_modules_moment_locale_ar-sa_js"
	],
	"./ar-sa.js": [
		"./node_modules/moment/locale/ar-sa.js",
		"node_modules_moment_locale_ar-sa_js"
	],
	"./ar-tn": [
		"./node_modules/moment/locale/ar-tn.js",
		"node_modules_moment_locale_ar-tn_js"
	],
	"./ar-tn.js": [
		"./node_modules/moment/locale/ar-tn.js",
		"node_modules_moment_locale_ar-tn_js"
	],
	"./ar.js": [
		"./node_modules/moment/locale/ar.js",
		"node_modules_moment_locale_ar_js"
	],
	"./az": [
		"./node_modules/moment/locale/az.js",
		"node_modules_moment_locale_az_js"
	],
	"./az.js": [
		"./node_modules/moment/locale/az.js",
		"node_modules_moment_locale_az_js"
	],
	"./be": [
		"./node_modules/moment/locale/be.js",
		"node_modules_moment_locale_be_js"
	],
	"./be.js": [
		"./node_modules/moment/locale/be.js",
		"node_modules_moment_locale_be_js"
	],
	"./bg": [
		"./node_modules/moment/locale/bg.js",
		"node_modules_moment_locale_bg_js"
	],
	"./bg.js": [
		"./node_modules/moment/locale/bg.js",
		"node_modules_moment_locale_bg_js"
	],
	"./bm": [
		"./node_modules/moment/locale/bm.js",
		"node_modules_moment_locale_bm_js"
	],
	"./bm.js": [
		"./node_modules/moment/locale/bm.js",
		"node_modules_moment_locale_bm_js"
	],
	"./bn": [
		"./node_modules/moment/locale/bn.js",
		"node_modules_moment_locale_bn_js"
	],
	"./bn-bd": [
		"./node_modules/moment/locale/bn-bd.js",
		"node_modules_moment_locale_bn-bd_js"
	],
	"./bn-bd.js": [
		"./node_modules/moment/locale/bn-bd.js",
		"node_modules_moment_locale_bn-bd_js"
	],
	"./bn.js": [
		"./node_modules/moment/locale/bn.js",
		"node_modules_moment_locale_bn_js"
	],
	"./bo": [
		"./node_modules/moment/locale/bo.js",
		"node_modules_moment_locale_bo_js"
	],
	"./bo.js": [
		"./node_modules/moment/locale/bo.js",
		"node_modules_moment_locale_bo_js"
	],
	"./br": [
		"./node_modules/moment/locale/br.js",
		"node_modules_moment_locale_br_js"
	],
	"./br.js": [
		"./node_modules/moment/locale/br.js",
		"node_modules_moment_locale_br_js"
	],
	"./bs": [
		"./node_modules/moment/locale/bs.js",
		"node_modules_moment_locale_bs_js"
	],
	"./bs.js": [
		"./node_modules/moment/locale/bs.js",
		"node_modules_moment_locale_bs_js"
	],
	"./ca": [
		"./node_modules/moment/locale/ca.js",
		"node_modules_moment_locale_ca_js"
	],
	"./ca.js": [
		"./node_modules/moment/locale/ca.js",
		"node_modules_moment_locale_ca_js"
	],
	"./cs": [
		"./node_modules/moment/locale/cs.js",
		"node_modules_moment_locale_cs_js"
	],
	"./cs.js": [
		"./node_modules/moment/locale/cs.js",
		"node_modules_moment_locale_cs_js"
	],
	"./cv": [
		"./node_modules/moment/locale/cv.js",
		"node_modules_moment_locale_cv_js"
	],
	"./cv.js": [
		"./node_modules/moment/locale/cv.js",
		"node_modules_moment_locale_cv_js"
	],
	"./cy": [
		"./node_modules/moment/locale/cy.js",
		"node_modules_moment_locale_cy_js"
	],
	"./cy.js": [
		"./node_modules/moment/locale/cy.js",
		"node_modules_moment_locale_cy_js"
	],
	"./da": [
		"./node_modules/moment/locale/da.js",
		"node_modules_moment_locale_da_js"
	],
	"./da.js": [
		"./node_modules/moment/locale/da.js",
		"node_modules_moment_locale_da_js"
	],
	"./de": [
		"./node_modules/moment/locale/de.js",
		"node_modules_moment_locale_de_js"
	],
	"./de-at": [
		"./node_modules/moment/locale/de-at.js",
		"node_modules_moment_locale_de-at_js"
	],
	"./de-at.js": [
		"./node_modules/moment/locale/de-at.js",
		"node_modules_moment_locale_de-at_js"
	],
	"./de-ch": [
		"./node_modules/moment/locale/de-ch.js",
		"node_modules_moment_locale_de-ch_js"
	],
	"./de-ch.js": [
		"./node_modules/moment/locale/de-ch.js",
		"node_modules_moment_locale_de-ch_js"
	],
	"./de.js": [
		"./node_modules/moment/locale/de.js",
		"node_modules_moment_locale_de_js"
	],
	"./dv": [
		"./node_modules/moment/locale/dv.js",
		"node_modules_moment_locale_dv_js"
	],
	"./dv.js": [
		"./node_modules/moment/locale/dv.js",
		"node_modules_moment_locale_dv_js"
	],
	"./el": [
		"./node_modules/moment/locale/el.js",
		"node_modules_moment_locale_el_js"
	],
	"./el.js": [
		"./node_modules/moment/locale/el.js",
		"node_modules_moment_locale_el_js"
	],
	"./en-au": [
		"./node_modules/moment/locale/en-au.js",
		"node_modules_moment_locale_en-au_js"
	],
	"./en-au.js": [
		"./node_modules/moment/locale/en-au.js",
		"node_modules_moment_locale_en-au_js"
	],
	"./en-ca": [
		"./node_modules/moment/locale/en-ca.js",
		"node_modules_moment_locale_en-ca_js"
	],
	"./en-ca.js": [
		"./node_modules/moment/locale/en-ca.js",
		"node_modules_moment_locale_en-ca_js"
	],
	"./en-gb": [
		"./node_modules/moment/locale/en-gb.js",
		"node_modules_moment_locale_en-gb_js"
	],
	"./en-gb.js": [
		"./node_modules/moment/locale/en-gb.js",
		"node_modules_moment_locale_en-gb_js"
	],
	"./en-ie": [
		"./node_modules/moment/locale/en-ie.js",
		"node_modules_moment_locale_en-ie_js"
	],
	"./en-ie.js": [
		"./node_modules/moment/locale/en-ie.js",
		"node_modules_moment_locale_en-ie_js"
	],
	"./en-il": [
		"./node_modules/moment/locale/en-il.js",
		"node_modules_moment_locale_en-il_js"
	],
	"./en-il.js": [
		"./node_modules/moment/locale/en-il.js",
		"node_modules_moment_locale_en-il_js"
	],
	"./en-in": [
		"./node_modules/moment/locale/en-in.js",
		"node_modules_moment_locale_en-in_js"
	],
	"./en-in.js": [
		"./node_modules/moment/locale/en-in.js",
		"node_modules_moment_locale_en-in_js"
	],
	"./en-nz": [
		"./node_modules/moment/locale/en-nz.js",
		"node_modules_moment_locale_en-nz_js"
	],
	"./en-nz.js": [
		"./node_modules/moment/locale/en-nz.js",
		"node_modules_moment_locale_en-nz_js"
	],
	"./en-sg": [
		"./node_modules/moment/locale/en-sg.js",
		"node_modules_moment_locale_en-sg_js"
	],
	"./en-sg.js": [
		"./node_modules/moment/locale/en-sg.js",
		"node_modules_moment_locale_en-sg_js"
	],
	"./eo": [
		"./node_modules/moment/locale/eo.js",
		"node_modules_moment_locale_eo_js"
	],
	"./eo.js": [
		"./node_modules/moment/locale/eo.js",
		"node_modules_moment_locale_eo_js"
	],
	"./es": [
		"./node_modules/moment/locale/es.js",
		"node_modules_moment_locale_es_js"
	],
	"./es-do": [
		"./node_modules/moment/locale/es-do.js",
		"node_modules_moment_locale_es-do_js"
	],
	"./es-do.js": [
		"./node_modules/moment/locale/es-do.js",
		"node_modules_moment_locale_es-do_js"
	],
	"./es-mx": [
		"./node_modules/moment/locale/es-mx.js",
		"node_modules_moment_locale_es-mx_js"
	],
	"./es-mx.js": [
		"./node_modules/moment/locale/es-mx.js",
		"node_modules_moment_locale_es-mx_js"
	],
	"./es-us": [
		"./node_modules/moment/locale/es-us.js",
		"node_modules_moment_locale_es-us_js"
	],
	"./es-us.js": [
		"./node_modules/moment/locale/es-us.js",
		"node_modules_moment_locale_es-us_js"
	],
	"./es.js": [
		"./node_modules/moment/locale/es.js",
		"node_modules_moment_locale_es_js"
	],
	"./et": [
		"./node_modules/moment/locale/et.js",
		"node_modules_moment_locale_et_js"
	],
	"./et.js": [
		"./node_modules/moment/locale/et.js",
		"node_modules_moment_locale_et_js"
	],
	"./eu": [
		"./node_modules/moment/locale/eu.js",
		"node_modules_moment_locale_eu_js"
	],
	"./eu.js": [
		"./node_modules/moment/locale/eu.js",
		"node_modules_moment_locale_eu_js"
	],
	"./fa": [
		"./node_modules/moment/locale/fa.js",
		"node_modules_moment_locale_fa_js"
	],
	"./fa.js": [
		"./node_modules/moment/locale/fa.js",
		"node_modules_moment_locale_fa_js"
	],
	"./fi": [
		"./node_modules/moment/locale/fi.js",
		"node_modules_moment_locale_fi_js"
	],
	"./fi.js": [
		"./node_modules/moment/locale/fi.js",
		"node_modules_moment_locale_fi_js"
	],
	"./fil": [
		"./node_modules/moment/locale/fil.js",
		"node_modules_moment_locale_fil_js"
	],
	"./fil.js": [
		"./node_modules/moment/locale/fil.js",
		"node_modules_moment_locale_fil_js"
	],
	"./fo": [
		"./node_modules/moment/locale/fo.js",
		"node_modules_moment_locale_fo_js"
	],
	"./fo.js": [
		"./node_modules/moment/locale/fo.js",
		"node_modules_moment_locale_fo_js"
	],
	"./fr": [
		"./node_modules/moment/locale/fr.js",
		"node_modules_moment_locale_fr_js"
	],
	"./fr-ca": [
		"./node_modules/moment/locale/fr-ca.js",
		"node_modules_moment_locale_fr-ca_js"
	],
	"./fr-ca.js": [
		"./node_modules/moment/locale/fr-ca.js",
		"node_modules_moment_locale_fr-ca_js"
	],
	"./fr-ch": [
		"./node_modules/moment/locale/fr-ch.js",
		"node_modules_moment_locale_fr-ch_js"
	],
	"./fr-ch.js": [
		"./node_modules/moment/locale/fr-ch.js",
		"node_modules_moment_locale_fr-ch_js"
	],
	"./fr.js": [
		"./node_modules/moment/locale/fr.js",
		"node_modules_moment_locale_fr_js"
	],
	"./fy": [
		"./node_modules/moment/locale/fy.js",
		"node_modules_moment_locale_fy_js"
	],
	"./fy.js": [
		"./node_modules/moment/locale/fy.js",
		"node_modules_moment_locale_fy_js"
	],
	"./ga": [
		"./node_modules/moment/locale/ga.js",
		"node_modules_moment_locale_ga_js"
	],
	"./ga.js": [
		"./node_modules/moment/locale/ga.js",
		"node_modules_moment_locale_ga_js"
	],
	"./gd": [
		"./node_modules/moment/locale/gd.js",
		"node_modules_moment_locale_gd_js"
	],
	"./gd.js": [
		"./node_modules/moment/locale/gd.js",
		"node_modules_moment_locale_gd_js"
	],
	"./gl": [
		"./node_modules/moment/locale/gl.js",
		"node_modules_moment_locale_gl_js"
	],
	"./gl.js": [
		"./node_modules/moment/locale/gl.js",
		"node_modules_moment_locale_gl_js"
	],
	"./gom-deva": [
		"./node_modules/moment/locale/gom-deva.js",
		"node_modules_moment_locale_gom-deva_js"
	],
	"./gom-deva.js": [
		"./node_modules/moment/locale/gom-deva.js",
		"node_modules_moment_locale_gom-deva_js"
	],
	"./gom-latn": [
		"./node_modules/moment/locale/gom-latn.js",
		"node_modules_moment_locale_gom-latn_js"
	],
	"./gom-latn.js": [
		"./node_modules/moment/locale/gom-latn.js",
		"node_modules_moment_locale_gom-latn_js"
	],
	"./gu": [
		"./node_modules/moment/locale/gu.js",
		"node_modules_moment_locale_gu_js"
	],
	"./gu.js": [
		"./node_modules/moment/locale/gu.js",
		"node_modules_moment_locale_gu_js"
	],
	"./he": [
		"./node_modules/moment/locale/he.js",
		"node_modules_moment_locale_he_js"
	],
	"./he.js": [
		"./node_modules/moment/locale/he.js",
		"node_modules_moment_locale_he_js"
	],
	"./hi": [
		"./node_modules/moment/locale/hi.js",
		"node_modules_moment_locale_hi_js"
	],
	"./hi.js": [
		"./node_modules/moment/locale/hi.js",
		"node_modules_moment_locale_hi_js"
	],
	"./hr": [
		"./node_modules/moment/locale/hr.js",
		"node_modules_moment_locale_hr_js"
	],
	"./hr.js": [
		"./node_modules/moment/locale/hr.js",
		"node_modules_moment_locale_hr_js"
	],
	"./hu": [
		"./node_modules/moment/locale/hu.js",
		"node_modules_moment_locale_hu_js"
	],
	"./hu.js": [
		"./node_modules/moment/locale/hu.js",
		"node_modules_moment_locale_hu_js"
	],
	"./hy-am": [
		"./node_modules/moment/locale/hy-am.js",
		"node_modules_moment_locale_hy-am_js"
	],
	"./hy-am.js": [
		"./node_modules/moment/locale/hy-am.js",
		"node_modules_moment_locale_hy-am_js"
	],
	"./id": [
		"./node_modules/moment/locale/id.js",
		"node_modules_moment_locale_id_js"
	],
	"./id.js": [
		"./node_modules/moment/locale/id.js",
		"node_modules_moment_locale_id_js"
	],
	"./is": [
		"./node_modules/moment/locale/is.js",
		"node_modules_moment_locale_is_js"
	],
	"./is.js": [
		"./node_modules/moment/locale/is.js",
		"node_modules_moment_locale_is_js"
	],
	"./it": [
		"./node_modules/moment/locale/it.js",
		"node_modules_moment_locale_it_js"
	],
	"./it-ch": [
		"./node_modules/moment/locale/it-ch.js",
		"node_modules_moment_locale_it-ch_js"
	],
	"./it-ch.js": [
		"./node_modules/moment/locale/it-ch.js",
		"node_modules_moment_locale_it-ch_js"
	],
	"./it.js": [
		"./node_modules/moment/locale/it.js",
		"node_modules_moment_locale_it_js"
	],
	"./ja": [
		"./node_modules/moment/locale/ja.js",
		"node_modules_moment_locale_ja_js"
	],
	"./ja.js": [
		"./node_modules/moment/locale/ja.js",
		"node_modules_moment_locale_ja_js"
	],
	"./jv": [
		"./node_modules/moment/locale/jv.js",
		"node_modules_moment_locale_jv_js"
	],
	"./jv.js": [
		"./node_modules/moment/locale/jv.js",
		"node_modules_moment_locale_jv_js"
	],
	"./ka": [
		"./node_modules/moment/locale/ka.js",
		"node_modules_moment_locale_ka_js"
	],
	"./ka.js": [
		"./node_modules/moment/locale/ka.js",
		"node_modules_moment_locale_ka_js"
	],
	"./kk": [
		"./node_modules/moment/locale/kk.js",
		"node_modules_moment_locale_kk_js"
	],
	"./kk.js": [
		"./node_modules/moment/locale/kk.js",
		"node_modules_moment_locale_kk_js"
	],
	"./km": [
		"./node_modules/moment/locale/km.js",
		"node_modules_moment_locale_km_js"
	],
	"./km.js": [
		"./node_modules/moment/locale/km.js",
		"node_modules_moment_locale_km_js"
	],
	"./kn": [
		"./node_modules/moment/locale/kn.js",
		"node_modules_moment_locale_kn_js"
	],
	"./kn.js": [
		"./node_modules/moment/locale/kn.js",
		"node_modules_moment_locale_kn_js"
	],
	"./ko": [
		"./node_modules/moment/locale/ko.js",
		"node_modules_moment_locale_ko_js"
	],
	"./ko.js": [
		"./node_modules/moment/locale/ko.js",
		"node_modules_moment_locale_ko_js"
	],
	"./ku": [
		"./node_modules/moment/locale/ku.js",
		"node_modules_moment_locale_ku_js"
	],
	"./ku.js": [
		"./node_modules/moment/locale/ku.js",
		"node_modules_moment_locale_ku_js"
	],
	"./ky": [
		"./node_modules/moment/locale/ky.js",
		"node_modules_moment_locale_ky_js"
	],
	"./ky.js": [
		"./node_modules/moment/locale/ky.js",
		"node_modules_moment_locale_ky_js"
	],
	"./lb": [
		"./node_modules/moment/locale/lb.js",
		"node_modules_moment_locale_lb_js"
	],
	"./lb.js": [
		"./node_modules/moment/locale/lb.js",
		"node_modules_moment_locale_lb_js"
	],
	"./lo": [
		"./node_modules/moment/locale/lo.js",
		"node_modules_moment_locale_lo_js"
	],
	"./lo.js": [
		"./node_modules/moment/locale/lo.js",
		"node_modules_moment_locale_lo_js"
	],
	"./lt": [
		"./node_modules/moment/locale/lt.js",
		"node_modules_moment_locale_lt_js"
	],
	"./lt.js": [
		"./node_modules/moment/locale/lt.js",
		"node_modules_moment_locale_lt_js"
	],
	"./lv": [
		"./node_modules/moment/locale/lv.js",
		"node_modules_moment_locale_lv_js"
	],
	"./lv.js": [
		"./node_modules/moment/locale/lv.js",
		"node_modules_moment_locale_lv_js"
	],
	"./me": [
		"./node_modules/moment/locale/me.js",
		"node_modules_moment_locale_me_js"
	],
	"./me.js": [
		"./node_modules/moment/locale/me.js",
		"node_modules_moment_locale_me_js"
	],
	"./mi": [
		"./node_modules/moment/locale/mi.js",
		"node_modules_moment_locale_mi_js"
	],
	"./mi.js": [
		"./node_modules/moment/locale/mi.js",
		"node_modules_moment_locale_mi_js"
	],
	"./mk": [
		"./node_modules/moment/locale/mk.js",
		"node_modules_moment_locale_mk_js"
	],
	"./mk.js": [
		"./node_modules/moment/locale/mk.js",
		"node_modules_moment_locale_mk_js"
	],
	"./ml": [
		"./node_modules/moment/locale/ml.js",
		"node_modules_moment_locale_ml_js"
	],
	"./ml.js": [
		"./node_modules/moment/locale/ml.js",
		"node_modules_moment_locale_ml_js"
	],
	"./mn": [
		"./node_modules/moment/locale/mn.js",
		"node_modules_moment_locale_mn_js"
	],
	"./mn.js": [
		"./node_modules/moment/locale/mn.js",
		"node_modules_moment_locale_mn_js"
	],
	"./mr": [
		"./node_modules/moment/locale/mr.js",
		"node_modules_moment_locale_mr_js"
	],
	"./mr.js": [
		"./node_modules/moment/locale/mr.js",
		"node_modules_moment_locale_mr_js"
	],
	"./ms": [
		"./node_modules/moment/locale/ms.js",
		"node_modules_moment_locale_ms_js"
	],
	"./ms-my": [
		"./node_modules/moment/locale/ms-my.js",
		"node_modules_moment_locale_ms-my_js"
	],
	"./ms-my.js": [
		"./node_modules/moment/locale/ms-my.js",
		"node_modules_moment_locale_ms-my_js"
	],
	"./ms.js": [
		"./node_modules/moment/locale/ms.js",
		"node_modules_moment_locale_ms_js"
	],
	"./mt": [
		"./node_modules/moment/locale/mt.js",
		"node_modules_moment_locale_mt_js"
	],
	"./mt.js": [
		"./node_modules/moment/locale/mt.js",
		"node_modules_moment_locale_mt_js"
	],
	"./my": [
		"./node_modules/moment/locale/my.js",
		"node_modules_moment_locale_my_js"
	],
	"./my.js": [
		"./node_modules/moment/locale/my.js",
		"node_modules_moment_locale_my_js"
	],
	"./nb": [
		"./node_modules/moment/locale/nb.js",
		"node_modules_moment_locale_nb_js"
	],
	"./nb.js": [
		"./node_modules/moment/locale/nb.js",
		"node_modules_moment_locale_nb_js"
	],
	"./ne": [
		"./node_modules/moment/locale/ne.js",
		"node_modules_moment_locale_ne_js"
	],
	"./ne.js": [
		"./node_modules/moment/locale/ne.js",
		"node_modules_moment_locale_ne_js"
	],
	"./nl": [
		"./node_modules/moment/locale/nl.js",
		"node_modules_moment_locale_nl_js"
	],
	"./nl-be": [
		"./node_modules/moment/locale/nl-be.js",
		"node_modules_moment_locale_nl-be_js"
	],
	"./nl-be.js": [
		"./node_modules/moment/locale/nl-be.js",
		"node_modules_moment_locale_nl-be_js"
	],
	"./nl.js": [
		"./node_modules/moment/locale/nl.js",
		"node_modules_moment_locale_nl_js"
	],
	"./nn": [
		"./node_modules/moment/locale/nn.js",
		"node_modules_moment_locale_nn_js"
	],
	"./nn.js": [
		"./node_modules/moment/locale/nn.js",
		"node_modules_moment_locale_nn_js"
	],
	"./oc-lnc": [
		"./node_modules/moment/locale/oc-lnc.js",
		"node_modules_moment_locale_oc-lnc_js"
	],
	"./oc-lnc.js": [
		"./node_modules/moment/locale/oc-lnc.js",
		"node_modules_moment_locale_oc-lnc_js"
	],
	"./pa-in": [
		"./node_modules/moment/locale/pa-in.js",
		"node_modules_moment_locale_pa-in_js"
	],
	"./pa-in.js": [
		"./node_modules/moment/locale/pa-in.js",
		"node_modules_moment_locale_pa-in_js"
	],
	"./pl": [
		"./node_modules/moment/locale/pl.js",
		"node_modules_moment_locale_pl_js"
	],
	"./pl.js": [
		"./node_modules/moment/locale/pl.js",
		"node_modules_moment_locale_pl_js"
	],
	"./pt": [
		"./node_modules/moment/locale/pt.js",
		"node_modules_moment_locale_pt_js"
	],
	"./pt-br": [
		"./node_modules/moment/locale/pt-br.js",
		"node_modules_moment_locale_pt-br_js"
	],
	"./pt-br.js": [
		"./node_modules/moment/locale/pt-br.js",
		"node_modules_moment_locale_pt-br_js"
	],
	"./pt.js": [
		"./node_modules/moment/locale/pt.js",
		"node_modules_moment_locale_pt_js"
	],
	"./ro": [
		"./node_modules/moment/locale/ro.js",
		"node_modules_moment_locale_ro_js"
	],
	"./ro.js": [
		"./node_modules/moment/locale/ro.js",
		"node_modules_moment_locale_ro_js"
	],
	"./ru": [
		"./node_modules/moment/locale/ru.js",
		"node_modules_moment_locale_ru_js"
	],
	"./ru.js": [
		"./node_modules/moment/locale/ru.js",
		"node_modules_moment_locale_ru_js"
	],
	"./sd": [
		"./node_modules/moment/locale/sd.js",
		"node_modules_moment_locale_sd_js"
	],
	"./sd.js": [
		"./node_modules/moment/locale/sd.js",
		"node_modules_moment_locale_sd_js"
	],
	"./se": [
		"./node_modules/moment/locale/se.js",
		"node_modules_moment_locale_se_js"
	],
	"./se.js": [
		"./node_modules/moment/locale/se.js",
		"node_modules_moment_locale_se_js"
	],
	"./si": [
		"./node_modules/moment/locale/si.js",
		"node_modules_moment_locale_si_js"
	],
	"./si.js": [
		"./node_modules/moment/locale/si.js",
		"node_modules_moment_locale_si_js"
	],
	"./sk": [
		"./node_modules/moment/locale/sk.js",
		"node_modules_moment_locale_sk_js"
	],
	"./sk.js": [
		"./node_modules/moment/locale/sk.js",
		"node_modules_moment_locale_sk_js"
	],
	"./sl": [
		"./node_modules/moment/locale/sl.js",
		"node_modules_moment_locale_sl_js"
	],
	"./sl.js": [
		"./node_modules/moment/locale/sl.js",
		"node_modules_moment_locale_sl_js"
	],
	"./sq": [
		"./node_modules/moment/locale/sq.js",
		"node_modules_moment_locale_sq_js"
	],
	"./sq.js": [
		"./node_modules/moment/locale/sq.js",
		"node_modules_moment_locale_sq_js"
	],
	"./sr": [
		"./node_modules/moment/locale/sr.js",
		"node_modules_moment_locale_sr_js"
	],
	"./sr-cyrl": [
		"./node_modules/moment/locale/sr-cyrl.js",
		"node_modules_moment_locale_sr-cyrl_js"
	],
	"./sr-cyrl.js": [
		"./node_modules/moment/locale/sr-cyrl.js",
		"node_modules_moment_locale_sr-cyrl_js"
	],
	"./sr.js": [
		"./node_modules/moment/locale/sr.js",
		"node_modules_moment_locale_sr_js"
	],
	"./ss": [
		"./node_modules/moment/locale/ss.js",
		"node_modules_moment_locale_ss_js"
	],
	"./ss.js": [
		"./node_modules/moment/locale/ss.js",
		"node_modules_moment_locale_ss_js"
	],
	"./sv": [
		"./node_modules/moment/locale/sv.js",
		"node_modules_moment_locale_sv_js"
	],
	"./sv.js": [
		"./node_modules/moment/locale/sv.js",
		"node_modules_moment_locale_sv_js"
	],
	"./sw": [
		"./node_modules/moment/locale/sw.js",
		"node_modules_moment_locale_sw_js"
	],
	"./sw.js": [
		"./node_modules/moment/locale/sw.js",
		"node_modules_moment_locale_sw_js"
	],
	"./ta": [
		"./node_modules/moment/locale/ta.js",
		"node_modules_moment_locale_ta_js"
	],
	"./ta.js": [
		"./node_modules/moment/locale/ta.js",
		"node_modules_moment_locale_ta_js"
	],
	"./te": [
		"./node_modules/moment/locale/te.js",
		"node_modules_moment_locale_te_js"
	],
	"./te.js": [
		"./node_modules/moment/locale/te.js",
		"node_modules_moment_locale_te_js"
	],
	"./tet": [
		"./node_modules/moment/locale/tet.js",
		"node_modules_moment_locale_tet_js"
	],
	"./tet.js": [
		"./node_modules/moment/locale/tet.js",
		"node_modules_moment_locale_tet_js"
	],
	"./tg": [
		"./node_modules/moment/locale/tg.js",
		"node_modules_moment_locale_tg_js"
	],
	"./tg.js": [
		"./node_modules/moment/locale/tg.js",
		"node_modules_moment_locale_tg_js"
	],
	"./th": [
		"./node_modules/moment/locale/th.js",
		"node_modules_moment_locale_th_js"
	],
	"./th.js": [
		"./node_modules/moment/locale/th.js",
		"node_modules_moment_locale_th_js"
	],
	"./tk": [
		"./node_modules/moment/locale/tk.js",
		"node_modules_moment_locale_tk_js"
	],
	"./tk.js": [
		"./node_modules/moment/locale/tk.js",
		"node_modules_moment_locale_tk_js"
	],
	"./tl-ph": [
		"./node_modules/moment/locale/tl-ph.js",
		"node_modules_moment_locale_tl-ph_js"
	],
	"./tl-ph.js": [
		"./node_modules/moment/locale/tl-ph.js",
		"node_modules_moment_locale_tl-ph_js"
	],
	"./tlh": [
		"./node_modules/moment/locale/tlh.js",
		"node_modules_moment_locale_tlh_js"
	],
	"./tlh.js": [
		"./node_modules/moment/locale/tlh.js",
		"node_modules_moment_locale_tlh_js"
	],
	"./tr": [
		"./node_modules/moment/locale/tr.js",
		"node_modules_moment_locale_tr_js"
	],
	"./tr.js": [
		"./node_modules/moment/locale/tr.js",
		"node_modules_moment_locale_tr_js"
	],
	"./tzl": [
		"./node_modules/moment/locale/tzl.js",
		"node_modules_moment_locale_tzl_js"
	],
	"./tzl.js": [
		"./node_modules/moment/locale/tzl.js",
		"node_modules_moment_locale_tzl_js"
	],
	"./tzm": [
		"./node_modules/moment/locale/tzm.js",
		"node_modules_moment_locale_tzm_js"
	],
	"./tzm-latn": [
		"./node_modules/moment/locale/tzm-latn.js",
		"node_modules_moment_locale_tzm-latn_js"
	],
	"./tzm-latn.js": [
		"./node_modules/moment/locale/tzm-latn.js",
		"node_modules_moment_locale_tzm-latn_js"
	],
	"./tzm.js": [
		"./node_modules/moment/locale/tzm.js",
		"node_modules_moment_locale_tzm_js"
	],
	"./ug-cn": [
		"./node_modules/moment/locale/ug-cn.js",
		"node_modules_moment_locale_ug-cn_js"
	],
	"./ug-cn.js": [
		"./node_modules/moment/locale/ug-cn.js",
		"node_modules_moment_locale_ug-cn_js"
	],
	"./uk": [
		"./node_modules/moment/locale/uk.js",
		"node_modules_moment_locale_uk_js"
	],
	"./uk.js": [
		"./node_modules/moment/locale/uk.js",
		"node_modules_moment_locale_uk_js"
	],
	"./ur": [
		"./node_modules/moment/locale/ur.js",
		"node_modules_moment_locale_ur_js"
	],
	"./ur.js": [
		"./node_modules/moment/locale/ur.js",
		"node_modules_moment_locale_ur_js"
	],
	"./uz": [
		"./node_modules/moment/locale/uz.js",
		"node_modules_moment_locale_uz_js"
	],
	"./uz-latn": [
		"./node_modules/moment/locale/uz-latn.js",
		"node_modules_moment_locale_uz-latn_js"
	],
	"./uz-latn.js": [
		"./node_modules/moment/locale/uz-latn.js",
		"node_modules_moment_locale_uz-latn_js"
	],
	"./uz.js": [
		"./node_modules/moment/locale/uz.js",
		"node_modules_moment_locale_uz_js"
	],
	"./vi": [
		"./node_modules/moment/locale/vi.js",
		"node_modules_moment_locale_vi_js"
	],
	"./vi.js": [
		"./node_modules/moment/locale/vi.js",
		"node_modules_moment_locale_vi_js"
	],
	"./x-pseudo": [
		"./node_modules/moment/locale/x-pseudo.js",
		"node_modules_moment_locale_x-pseudo_js"
	],
	"./x-pseudo.js": [
		"./node_modules/moment/locale/x-pseudo.js",
		"node_modules_moment_locale_x-pseudo_js"
	],
	"./yo": [
		"./node_modules/moment/locale/yo.js",
		"node_modules_moment_locale_yo_js"
	],
	"./yo.js": [
		"./node_modules/moment/locale/yo.js",
		"node_modules_moment_locale_yo_js"
	],
	"./zh-cn": [
		"./node_modules/moment/locale/zh-cn.js",
		"node_modules_moment_locale_zh-cn_js"
	],
	"./zh-cn.js": [
		"./node_modules/moment/locale/zh-cn.js",
		"node_modules_moment_locale_zh-cn_js"
	],
	"./zh-hk": [
		"./node_modules/moment/locale/zh-hk.js",
		"node_modules_moment_locale_zh-hk_js"
	],
	"./zh-hk.js": [
		"./node_modules/moment/locale/zh-hk.js",
		"node_modules_moment_locale_zh-hk_js"
	],
	"./zh-mo": [
		"./node_modules/moment/locale/zh-mo.js",
		"node_modules_moment_locale_zh-mo_js"
	],
	"./zh-mo.js": [
		"./node_modules/moment/locale/zh-mo.js",
		"node_modules_moment_locale_zh-mo_js"
	],
	"./zh-tw": [
		"./node_modules/moment/locale/zh-tw.js",
		"node_modules_moment_locale_zh-tw_js"
	],
	"./zh-tw.js": [
		"./node_modules/moment/locale/zh-tw.js",
		"node_modules_moment_locale_zh-tw_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./node_modules/moment/locale lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".moment-utl.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "MomentUtl:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = (typeof self !== 'undefined' ? self : (typeof global !== 'undefined' ? global : this))["webpackChunkMomentUtl"] = (typeof self !== 'undefined' ? self : (typeof global !== 'undefined' ? global : this))["webpackChunkMomentUtl"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "importLocale": () => (/* reexport safe */ _importLocale__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "allSupportedLocales": () => (/* reexport safe */ _allSupportedLocales__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "allSupportedLocalesMap": () => (/* reexport safe */ _allSupportedLocalesMap__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "toMomentLocale": () => (/* reexport safe */ _toMomentLocale__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "defaultFallbackLocale": () => (/* reexport safe */ _defaultFallbackLocale__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "firstDateOfCurrentMonth": () => (/* reexport safe */ _firstDateOfCurrentMonth__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "getWeekDays": () => (/* reexport safe */ _getWeekDays__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "getWeekRange": () => (/* reexport safe */ _getWeekRange__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _importLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importLocale */ "./src/importLocale.js");
/* harmony import */ var _allSupportedLocales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allSupportedLocales */ "./src/allSupportedLocales.js");
/* harmony import */ var _allSupportedLocalesMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allSupportedLocalesMap */ "./src/allSupportedLocalesMap.js");
/* harmony import */ var _toMomentLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toMomentLocale */ "./src/toMomentLocale.js");
/* harmony import */ var _defaultFallbackLocale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultFallbackLocale */ "./src/defaultFallbackLocale.js");
/* harmony import */ var _firstDateOfCurrentMonth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firstDateOfCurrentMonth */ "./src/firstDateOfCurrentMonth.js");
/* harmony import */ var _getWeekDays__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getWeekDays */ "./src/getWeekDays.js");
/* harmony import */ var _getWeekRange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getWeekRange */ "./src/getWeekRange.js");
/*
 * Copyright (c) 2021 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */








})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=moment-utl.js.map