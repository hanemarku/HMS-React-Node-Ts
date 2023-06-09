"use strict";
/**
 * Utils
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getISOLocalDateTime = exports.getISOLocalDate = exports.getISOLocalMonth = exports.getHoursMinutesSeconds = exports.getHoursMinutes = exports.getDaysInMonth = exports.getDayRange = exports.getNextDayEnd = exports.getPreviousDayEnd = exports.getDayEnd = exports.getNextDayStart = exports.getPreviousDayStart = exports.getDayStart = exports.getMonthRange = exports.getNextMonthEnd = exports.getPreviousMonthEnd = exports.getMonthEnd = exports.getNextMonthStart = exports.getPreviousMonthStart = exports.getMonthStart = exports.getYearRange = exports.getNextYearEnd = exports.getPreviousYearEnd = exports.getYearEnd = exports.getNextYearStart = exports.getPreviousYearStart = exports.getYearStart = exports.getDecadeRange = exports.getNextDecadeEnd = exports.getPreviousDecadeEnd = exports.getDecadeEnd = exports.getNextDecadeStart = exports.getPreviousDecadeStart = exports.getDecadeStart = exports.getCenturyRange = exports.getNextCenturyEnd = exports.getPreviousCenturyEnd = exports.getCenturyEnd = exports.getNextCenturyStart = exports.getPreviousCenturyStart = exports.getCenturyStart = exports.getSeconds = exports.getMinutes = exports.getHours = exports.getDate = exports.getMonthHuman = exports.getMonth = exports.getYear = void 0;
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborInternal(date, offset) {
        if (offset === void 0) { offset = defaultOffset; }
        var previousPeriod = getPeriod(date) + offset;
        return getEdgeOfPeriod(previousPeriod);
    };
}
function makeGetEnd(getBeginOfNextPeriod) {
    return function makeGetEndInternal(date) {
        return new Date(getBeginOfNextPeriod(date).getTime() - 1);
    };
}
function makeGetRange(functions) {
    return function makeGetRangeInternal(date) {
        return functions.map(function (fn) { return fn(date); });
    };
}
/**
 * Simple getters - getting a property of a given point in time
 */
/**
 * Gets year from date.
 *
 * @param {Date|number|string} date Date to get year from.
 */
function getYear(date) {
    if (date instanceof Date) {
        return date.getFullYear();
    }
    if (typeof date === 'number') {
        return date;
    }
    var year = parseInt(date, 10);
    if (typeof date === 'string' && !isNaN(year)) {
        return year;
    }
    throw new Error("Failed to get year from date: ".concat(date, "."));
}
exports.getYear = getYear;
/**
 * Gets month from date.
 *
 * @param {Date} date Date to get month from.
 */
function getMonth(date) {
    if (date instanceof Date) {
        return date.getMonth();
    }
    throw new Error("Failed to get month from date: ".concat(date, "."));
}
exports.getMonth = getMonth;
/**
 * Gets human-readable month from date.
 *
 * @param {Date} date Date to get human-readable month from.
 */
function getMonthHuman(date) {
    if (date instanceof Date) {
        return date.getMonth() + 1;
    }
    throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
exports.getMonthHuman = getMonthHuman;
/**
 * Gets human-readable day of the month from date.
 *
 * @param {Date} date Date to get day of the month from.
 */
function getDate(date) {
    if (date instanceof Date) {
        return date.getDate();
    }
    throw new Error("Failed to get year from date: ".concat(date, "."));
}
exports.getDate = getDate;
/**
 * Gets hours from date.
 *
 * @param {Date|string} date Date to get hours from.
 */
function getHours(date) {
    if (date instanceof Date) {
        return date.getHours();
    }
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var hoursString = datePieces[0];
            if (hoursString) {
                var hours = parseInt(hoursString, 10);
                if (!isNaN(hours)) {
                    return hours;
                }
            }
        }
    }
    throw new Error("Failed to get hours from date: ".concat(date, "."));
}
exports.getHours = getHours;
/**
 * Gets minutes from date.
 *
 * @param {Date|string} date Date to get minutes from.
 */
function getMinutes(date) {
    if (date instanceof Date) {
        return date.getMinutes();
    }
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var minutesString = datePieces[1] || '0';
            var minutes = parseInt(minutesString, 10);
            if (!isNaN(minutes)) {
                return minutes;
            }
        }
    }
    throw new Error("Failed to get minutes from date: ".concat(date, "."));
}
exports.getMinutes = getMinutes;
/**
 * Gets seconds from date.
 *
 * @param {Date|string} date Date to get seconds from.
 */
function getSeconds(date) {
    if (date instanceof Date) {
        return date.getSeconds();
    }
    if (typeof date === 'string') {
        var datePieces = date.split(':');
        if (datePieces.length >= 2) {
            var secondsString = datePieces[2] || '0';
            var seconds = parseInt(secondsString, 10);
            if (!isNaN(seconds)) {
                return seconds;
            }
        }
    }
    throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
exports.getSeconds = getSeconds;
/**
 * Century
 */
function getCenturyStart(date) {
    var year = getYear(date);
    var centuryStartYear = year + ((-year + 1) % 100);
    var centuryStartDate = new Date();
    centuryStartDate.setFullYear(centuryStartYear, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);
    return centuryStartDate;
}
exports.getCenturyStart = getCenturyStart;
exports.getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
exports.getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
exports.getCenturyEnd = makeGetEnd(exports.getNextCenturyStart);
exports.getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, exports.getCenturyEnd, -100);
exports.getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, exports.getCenturyEnd, 100);
exports.getCenturyRange = makeGetRange([getCenturyStart, exports.getCenturyEnd]);
/**
 * Decade
 */
function getDecadeStart(date) {
    var year = getYear(date);
    var decadeStartYear = year + ((-year + 1) % 10);
    var decadeStartDate = new Date();
    decadeStartDate.setFullYear(decadeStartYear, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);
    return decadeStartDate;
}
exports.getDecadeStart = getDecadeStart;
exports.getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
exports.getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
exports.getDecadeEnd = makeGetEnd(exports.getNextDecadeStart);
exports.getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, exports.getDecadeEnd, -10);
exports.getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, exports.getDecadeEnd, 10);
exports.getDecadeRange = makeGetRange([getDecadeStart, exports.getDecadeEnd]);
/**
 * Year
 */
function getYearStart(date) {
    var year = getYear(date);
    var yearStartDate = new Date();
    yearStartDate.setFullYear(year, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    return yearStartDate;
}
exports.getYearStart = getYearStart;
exports.getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
exports.getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
exports.getYearEnd = makeGetEnd(exports.getNextYearStart);
exports.getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, exports.getYearEnd, -1);
exports.getNextYearEnd = makeGetEdgeOfNeighbor(getYear, exports.getYearEnd, 1);
exports.getYearRange = makeGetRange([getYearStart, exports.getYearEnd]);
/**
 * Month
 */
function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborMonthInternal(date, offset) {
        if (offset === void 0) { offset = defaultOffset; }
        var year = getYear(date);
        var month = getMonth(date) + offset;
        var previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, 1);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getMonthStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var monthStartDate = new Date();
    monthStartDate.setFullYear(year, month, 1);
    monthStartDate.setHours(0, 0, 0, 0);
    return monthStartDate;
}
exports.getMonthStart = getMonthStart;
exports.getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
exports.getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
exports.getMonthEnd = makeGetEnd(exports.getNextMonthStart);
exports.getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(exports.getMonthEnd, -1);
exports.getNextMonthEnd = makeGetEdgeOfNeighborMonth(exports.getMonthEnd, 1);
exports.getMonthRange = makeGetRange([getMonthStart, exports.getMonthEnd]);
/**
 * Day
 */
function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborDayInternal(date, offset) {
        if (offset === void 0) { offset = defaultOffset; }
        var year = getYear(date);
        var month = getMonth(date);
        var day = getDate(date) + offset;
        var previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, day);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getDayStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date);
    var dayStartDate = new Date();
    dayStartDate.setFullYear(year, month, day);
    dayStartDate.setHours(0, 0, 0, 0);
    return dayStartDate;
}
exports.getDayStart = getDayStart;
exports.getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
exports.getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
exports.getDayEnd = makeGetEnd(exports.getNextDayStart);
exports.getPreviousDayEnd = makeGetEdgeOfNeighborDay(exports.getDayEnd, -1);
exports.getNextDayEnd = makeGetEdgeOfNeighborDay(exports.getDayEnd, 1);
exports.getDayRange = makeGetRange([getDayStart, exports.getDayEnd]);
/**
 * Other
 */
/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date.
 */
function getDaysInMonth(date) {
    return getDate((0, exports.getMonthEnd)(date));
}
exports.getDaysInMonth = getDaysInMonth;
function padStart(num, val) {
    if (val === void 0) { val = 2; }
    var numStr = "".concat(num);
    if (numStr.length >= val) {
        return num;
    }
    return "0000".concat(numStr).slice(-val);
}
/**
 * Returns local hours and minutes (hh:mm).
 */
function getHoursMinutes(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    return "".concat(hours, ":").concat(minutes);
}
exports.getHoursMinutes = getHoursMinutes;
/**
 * Returns local hours, minutes and seconds (hh:mm:ss).
 */
function getHoursMinutesSeconds(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    var seconds = padStart(getSeconds(date));
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
exports.getHoursMinutesSeconds = getHoursMinutesSeconds;
/**
 * Returns local month in ISO-like format (YYYY-MM).
 */
function getISOLocalMonth(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    return "".concat(year, "-").concat(month);
}
exports.getISOLocalMonth = getISOLocalMonth;
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 */
function getISOLocalDate(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    var day = padStart(getDate(date));
    return "".concat(year, "-").concat(month, "-").concat(day);
}
exports.getISOLocalDate = getISOLocalDate;
/**
 * Returns local date & time in ISO-like format (YYYY-MM-DDThh:mm:ss).
 */
function getISOLocalDateTime(date) {
    return "".concat(getISOLocalDate(date), "T").concat(getHoursMinutesSeconds(date));
}
exports.getISOLocalDateTime = getISOLocalDateTime;
