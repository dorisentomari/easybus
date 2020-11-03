import { formatDateToArray } from './formatDateToArray';
import { DateType, IFormatDatetimeOptions } from '../types';

export function formatDate(
  date: DateType = new Date(),
  dateTimeOptions: IFormatDatetimeOptions = {},
): string {
  const { dateMark = '-' } = dateTimeOptions;
  return formatDateToArray(date).slice(0, 3).join(dateMark);
}
