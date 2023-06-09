/**
 * Utils
 */
/**
 * Simple getters - getting a property of a given point in time
 */
/**
 * Gets year from date.
 *
 * @param {Date|number|string} date Date to get year from.
 */
export declare function getYear(date: Date | number | string): number;
/**
 * Gets month from date.
 *
 * @param {Date} date Date to get month from.
 */
export declare function getMonth(date: Date): number;
/**
 * Gets human-readable month from date.
 *
 * @param {Date} date Date to get human-readable month from.
 */
export declare function getMonthHuman(date: Date): number;
/**
 * Gets human-readable day of the month from date.
 *
 * @param {Date} date Date to get day of the month from.
 */
export declare function getDate(date: Date): number;
/**
 * Gets hours from date.
 *
 * @param {Date|string} date Date to get hours from.
 */
export declare function getHours(date: Date | string): number;
/**
 * Gets minutes from date.
 *
 * @param {Date|string} date Date to get minutes from.
 */
export declare function getMinutes(date: Date | string): number;
/**
 * Gets seconds from date.
 *
 * @param {Date|string} date Date to get seconds from.
 */
export declare function getSeconds(date: Date | string): number;
/**
 * Century
 */
export declare function getCenturyStart(date: Date | string | number): Date;
export declare const getPreviousCenturyStart: (date: string | number | Date, offset?: number) => Date;
export declare const getNextCenturyStart: (date: string | number | Date, offset?: number) => Date;
export declare const getCenturyEnd: (date: string | number | Date) => Date;
export declare const getPreviousCenturyEnd: (date: string | number | Date, offset?: number) => Date;
export declare const getNextCenturyEnd: (date: string | number | Date, offset?: number) => Date;
export declare const getCenturyRange: (date: string | number | Date) => Date[];
/**
 * Decade
 */
export declare function getDecadeStart(date: Date | string | number): Date;
export declare const getPreviousDecadeStart: (date: string | number | Date, offset?: number) => Date;
export declare const getNextDecadeStart: (date: string | number | Date, offset?: number) => Date;
export declare const getDecadeEnd: (date: string | number | Date) => Date;
export declare const getPreviousDecadeEnd: (date: string | number | Date, offset?: number) => Date;
export declare const getNextDecadeEnd: (date: string | number | Date, offset?: number) => Date;
export declare const getDecadeRange: (date: string | number | Date) => Date[];
/**
 * Year
 */
export declare function getYearStart(date: Date | string | number): Date;
export declare const getPreviousYearStart: (date: string | number | Date, offset?: number) => Date;
export declare const getNextYearStart: (date: string | number | Date, offset?: number) => Date;
export declare const getYearEnd: (date: string | number | Date) => Date;
export declare const getPreviousYearEnd: (date: string | number | Date, offset?: number) => Date;
export declare const getNextYearEnd: (date: string | number | Date, offset?: number) => Date;
export declare const getYearRange: (date: string | number | Date) => Date[];
export declare function getMonthStart(date: Date): Date;
export declare const getPreviousMonthStart: (date: Date, offset?: number) => Date;
export declare const getNextMonthStart: (date: Date, offset?: number) => Date;
export declare const getMonthEnd: (date: Date) => Date;
export declare const getPreviousMonthEnd: (date: Date, offset?: number) => Date;
export declare const getNextMonthEnd: (date: Date, offset?: number) => Date;
export declare const getMonthRange: (date: Date) => Date[];
export declare function getDayStart(date: Date): Date;
export declare const getPreviousDayStart: (date: Date, offset?: number) => Date;
export declare const getNextDayStart: (date: Date, offset?: number) => Date;
export declare const getDayEnd: (date: Date) => Date;
export declare const getPreviousDayEnd: (date: Date, offset?: number) => Date;
export declare const getNextDayEnd: (date: Date, offset?: number) => Date;
export declare const getDayRange: (date: Date) => Date[];
/**
 * Other
 */
/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date.
 */
export declare function getDaysInMonth(date: Date): number;
/**
 * Returns local hours and minutes (hh:mm).
 */
export declare function getHoursMinutes(date: Date | string): string;
/**
 * Returns local hours, minutes and seconds (hh:mm:ss).
 */
export declare function getHoursMinutesSeconds(date: Date | string): string;
/**
 * Returns local month in ISO-like format (YYYY-MM).
 */
export declare function getISOLocalMonth(date: Date): string;
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 */
export declare function getISOLocalDate(date: Date): string;
/**
 * Returns local date & time in ISO-like format (YYYY-MM-DDThh:mm:ss).
 */
export declare function getISOLocalDateTime(date: Date): string;
