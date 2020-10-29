import {formatTimeToArray} from './formatTimeToArray';
import {DateType, IFormatDatetimeOptions} from '../types/date';

export function formatTime(date: DateType = new Date(), dateTimeOptions: IFormatDatetimeOptions = {}) {
  const { timeMark = ':' } = dateTimeOptions;
  return formatTimeToArray(date).join(timeMark);
}
