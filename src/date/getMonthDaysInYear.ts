import {DateType, DateTypeEnum} from '../types/date';
import {breakDateTime} from './breakDateTime';
import {diffDateTime} from './diffDateTime';

// 某年的某个月有多少天
export function getMonthDaysInYear(date: DateType = new Date()) {
  const { year, month, day, hour, minute, second, milliseconds } = breakDateTime(date);
  const nextDate = new Date(year, month + 1, day, hour, minute, second, milliseconds);
  return diffDateTime(date, nextDate, DateTypeEnum.DAYS);
}
