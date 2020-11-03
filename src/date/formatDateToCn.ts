import { formatDateToArray } from './formatDateToArray';
import { DateType, IFormatDatetimeOptions } from '../types';

export function formatDateToCn(date: DateType = new Date(), options: IFormatDatetimeOptions = {}) {
  const { yearCn = '年', monthCn = '月', dayCn = '日' } = options;
  const arr = formatDateToArray(date);
  return `${arr[0]}${yearCn}${arr[1]}${monthCn}${arr[2]}${dayCn}`;
}
