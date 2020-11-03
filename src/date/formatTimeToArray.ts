import { DateType } from '../types';
import { breakDateTime } from './breakDateTime';
import { paddingStart } from '../string';

export function formatTimeToArray(date: DateType = new Date()): Array<string> {
  const { hour, minute, second } = breakDateTime(date);
  let newHour = paddingStart(hour, 2, '0');
  let newMinute = paddingStart(minute, 2, '0');
  let newSecond = paddingStart(second, 2, '0');
  return [newHour, newMinute, newSecond];
}
