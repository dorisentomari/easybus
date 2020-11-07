import { DateType } from '../types';
export interface DateFields {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    milliseconds: number;
    weekday: number;
}
export declare function breakDateTime(date?: DateType): DateFields;
