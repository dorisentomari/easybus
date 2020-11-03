import { DateType, DateTypeEnum } from '../types';
import { breakDateTime } from './breakDateTime';
import { diffDateTime } from './diffDateTime';

// 某年有多少天
export function getDaysInYear(date: DateType = new Date()) {
  const { year, month, day, hour, minute, second, milliseconds } = breakDateTime(date);
  const nextDate = new Date(year + 1, month, day, hour, minute, second, milliseconds);
  return diffDateTime(date, nextDate, DateTypeEnum.DAYS);
}
