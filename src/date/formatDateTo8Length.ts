import { formatDateToArray } from './formatDateToArray';

export function formatDateTo8Length(date: Date | number | string) {
  date = new Date(date);
  const array = formatDateToArray(date);
  return `${array[0]}${array[1]}${array[2]}`;
}
