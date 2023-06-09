"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHour = void 0;
var get_user_locale_1 = __importDefault(require("get-user-locale"));
var formatHour = function (locale, hour) {
    return hour.toLocaleString(locale || (0, get_user_locale_1.default)());
};
exports.formatHour = formatHour;
