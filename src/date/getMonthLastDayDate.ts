import { breakDateTime } from './breakDateTime';
import { MONTH_DAYS } from '../types';

export function getMonthLastDayDate(date: string | Date | number) {
  const { year, month } = breakDateTime(date);
  const days = MONTH_DAYS[month];
  return new Date(Date.UTC(year, month, days));
}
