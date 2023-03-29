import defaultDayjs from "dayjs";
import { IUtils, DateIOFormats, Unit } from "@date-io/core/IUtils";
interface Opts {
    locale?: string;
    /** Make sure that your dayjs instance extends customParseFormat and advancedFormat */
    instance?: typeof defaultDayjs;
    formats?: Partial<DateIOFormats>;
}
declare type Dayjs = defaultDayjs.Dayjs;
declare type Constructor<TDate extends Dayjs> = (...args: Parameters<typeof defaultDayjs>) => TDate;
export default class DayjsUtils<TDate extends Dayjs = Dayjs> implements IUtils<TDate> {
    rawDayJsInstance: typeof defaultDayjs;
    lib: string;
    dayjs: Constructor<TDate>;
    locale?: string;
    formats: DateIOFormats;
    constructor({ locale, formats, instance }?: Opts);
    is12HourCycleInCurrentLocale: () => boolean;
    getCurrentLocaleCode: () => string;
    getFormatHelperText: (format: string) => string;
    parseISO: (isoString: string) => TDate;
    toISO: (value: Dayjs) => string;
    parse: (value: any, format: string) => TDate;
    date: (value?: any) => TDate;
    toJsDate: (value: Dayjs) => Date;
    isValid: (value: any) => boolean;
    isNull: (date: Dayjs | null) => boolean;
    getDiff: (date: TDate, comparing: TDate, units?: Unit) => number;
    isAfter: (date: TDate, value: TDate) => boolean;
    isBefore: (date: TDate, value: TDate) => boolean;
    isAfterDay: (date: TDate, value: TDate) => boolean;
    isBeforeDay: (date: Dayjs, value: Dayjs) => boolean;
    isBeforeYear: (date: Dayjs, value: Dayjs) => boolean;
    isAfterYear: (date: Dayjs, value: Dayjs) => boolean;
    startOfDay: (date: TDate) => TDate;
    endOfDay: (date: TDate) => TDate;
    format: (date: Dayjs, formatKey: keyof DateIOFormats) => string;
    formatByString: (date: Dayjs, formatString: string) => string;
    formatNumber: (numberToFormat: string) => string;
    getHours: (date: Dayjs) => number;
    addSeconds: (date: TDate, count: number) => TDate;
    addMinutes: (date: Dayjs, count: number) => TDate;
    addHours: (date: Dayjs, count: number) => TDate;
    addDays: (date: Dayjs, count: number) => TDate;
    addWeeks: (date: Dayjs, count: number) => TDate;
    addMonths: (date: Dayjs, count: number) => TDate;
    addYears: (date: Dayjs, count: number) => TDate;
    setMonth: (date: Dayjs, count: number) => TDate;
    setHours: (date: Dayjs, count: number) => TDate;
    getMinutes: (date: Dayjs) => number;
    setMinutes: (date: Dayjs, count: number) => TDate;
    getSeconds: (date: Dayjs) => number;
    setSeconds: (date: Dayjs, count: number) => TDate;
    getMonth: (date: Dayjs) => number;
    getDate: (date: Dayjs) => number;
    setDate: (date: Dayjs, count: number) => TDate;
    getDaysInMonth: (date: Dayjs) => number;
    isSameDay: (date: Dayjs, comparing: Dayjs) => boolean;
    isSameMonth: (date: Dayjs, comparing: Dayjs) => boolean;
    isSameYear: (date: Dayjs, comparing: Dayjs) => boolean;
    isSameHour: (date: Dayjs, comparing: Dayjs) => boolean;
    getMeridiemText: (ampm: "am" | "pm") => "AM" | "PM";
    startOfYear: (date: Dayjs) => TDate;
    endOfYear: (date: Dayjs) => TDate;
    startOfMonth: (date: Dayjs) => TDate;
    endOfMonth: (date: Dayjs) => TDate;
    startOfWeek: (date: Dayjs) => TDate;
    endOfWeek: (date: Dayjs) => TDate;
    getNextMonth: (date: Dayjs) => TDate;
    getPreviousMonth: (date: Dayjs) => TDate;
    getMonthArray: (date: TDate) => TDate[];
    getYear: (date: Dayjs) => number;
    setYear: (date: Dayjs, year: number) => TDate;
    mergeDateAndTime: (date: TDate, time: TDate) => TDate;
    getWeekdays: () => string[];
    isEqual: (value: any, comparing: any) => boolean;
    getWeekArray: (date: TDate) => TDate[][];
    getYearRange: (start: TDate, end: TDate) => TDate[];
    isWithinRange: (date: TDate, [start, end]: [TDate, TDate]) => boolean;
}
export {};