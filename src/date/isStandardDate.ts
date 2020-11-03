import { isLeapYear } from '../common';

export function isStandardDate(date = '') {
  let regexp = /(^\d{4})-(\d{2})-(\d{2}$)/gi;
  let match = regexp.exec(date);
  if (!match) {
    return false;
  }
  let [, year, month, day] = match;
  const newYear = Number(year);
  const newMonth = Number(month);
  const newDay = Number(day);
  if (newYear < 1900 || newYear > 2100) {
    return false;
  }
  if (newMonth <= 0 || newMonth > 12) {
    return false;
  }
  if (newDay <= 0 || newDay > 31) {
    return false;
  }
  if (newMonth === 2 && newDay > 29) {
    return false;
  }
  if (isLeapYear(newYear) && newDay > 28) {
    return false;
  }
  return true;
}
