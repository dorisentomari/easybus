import { DateType, DateTypeEnum } from '../types/date';
import { breakDateTime } from './breakDateTime';
import { formatDateTime } from './formatDateTime';
import { isNumber } from '../common';

export function addDateTime(
  startDate: DateType = new Date(),
  unit: DateTypeEnum = DateTypeEnum.DAYS,
  value: number = 0
): DateType {
  const { year, month, day, hour, minute, second, milliseconds } = breakDateTime(
    new Date(startDate)
  );

  if (!isNumber(value)) {
    throw new TypeError(
      `addDateTime: expect \`value\` ${value} is number, but got ${typeof value}`
    );
  }

  switch (unit) {
    case DateTypeEnum.YEARS:
      return formatDateTime(new Date(year + value, month, day, hour, minute, second, milliseconds));
    case DateTypeEnum.MONTHS:
      return formatDateTime(new Date(year, month + value, day, hour, minute, second, milliseconds));
    case DateTypeEnum.DAYS:
      return formatDateTime(new Date(year, month, day + value, hour, minute, second, milliseconds));
    case DateTypeEnum.HOURS:
      return formatDateTime(new Date(year, month, day, hour + value, minute, second, milliseconds));
    case DateTypeEnum.MINUTES:
      return formatDateTime(new Date(year, month, day, hour, minute + value, second, milliseconds));
    case DateTypeEnum.SECONDS:
      return formatDateTime(new Date(year, month, day, hour, minute, second + value, milliseconds));
  }
}
