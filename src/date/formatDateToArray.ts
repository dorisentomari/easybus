import { DateType } from '../types';
import { breakDateTime } from './breakDateTime';
import { paddingStart } from '../string';

export function formatDateToArray(date: DateType = new Date()): Array<string> {
  const { year, month, day } = breakDateTime(date);
  const newYear = String(year);
  let newMonth = paddingStart(month + 1, 2, '0');
  let newDay = paddingStart(day, 2, '0');
  const shortYear = newYear.slice(2);
  return [newYear, newMonth, newDay, shortYear];
}
