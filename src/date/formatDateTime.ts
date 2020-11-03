import { formatTime } from './formatTime';
import { formatDate } from './formatDate';
import { DateType, IFormatDatetimeOptions } from '../types';
import { formatDateToCn } from './formatDateToCn';
import { formatTimeToCn } from './formatTimeToCn';

export function formatDateTime(
  date: DateType = new Date(),
  dateTimeOptions: IFormatDatetimeOptions = {},
): string {
  const { needCn } = dateTimeOptions;
  if (needCn) {
    return `${formatDateToCn(date, dateTimeOptions)} ${formatTimeToCn(date)}`;
  }
  return `${formatDate(date, dateTimeOptions)} ${formatTime(date)}`;
}
