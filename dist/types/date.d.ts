export declare type DateType = string | number | Date;
export declare enum DateTypeEnum {
    YEARS = 0,
    MONTHS = 1,
    DAYS = 2,
    HOURS = 3,
    MINUTES = 4,
    SECONDS = 5,
    MILLISECONDS = 6
}
export interface IFormatDatetimeOptions {
    yearCn?: string;
    monthCn?: string;
    dayCn?: string;
    hourCn?: string;
    minuteCn?: string;
    secondCn?: string;
    dateMark?: string;
    timeMark?: string;
    needCn?: boolean;
}
export declare enum MonthEngToNum {
    Jan = 1,
    Feb = 2,
    Mar = 3,
    Apr = 4,
    May = 5,
    Jun = 6,
    Jul = 7,
    Aug = 8,
    Sep = 9,
    Oct = 10,
    Nov = 11,
    Dec = 12,
    JAN = 1,
    FEB = 2,
    MAR = 3,
    APR = 4,
    MAY = 5,
    JUN = 6,
    JUL = 7,
    AUG = 8,
    SEP = 9,
    OCT = 10,
    NOV = 11,
    DEC = 12
}
export declare enum WeekEngToNum {
    Mon = 1,
    Tue = 2,
    Wen = 3,
    Thu = 4,
    Fri = 5,
    Sat = 6,
    Sun = 7,
    MON = 1,
    TUE = 2,
    WEN = 3,
    THU = 4,
    FRI = 5,
    SAT = 6,
    SUN = 7
}
export declare const MONTH_DAYS: number[];
export declare const MONTH_NUMBER = 12;
