import { formatTimeToArray } from './formatTimeToArray';
import { DateType, IFormatDatetimeOptions } from '../types';

export function formatTimeToCn(date: DateType = new Date(), options: IFormatDatetimeOptions = {}) {
  const { hourCn = '时', minuteCn = '分', secondCn = '秒' } = options;
  const arr = formatTimeToArray(date);
  return `${arr[0]}${hourCn}${arr[1]}${minuteCn}${arr[2]}${secondCn}`;
}
