import {DateType, DateTypeEnum} from '../types/date';
import {intDivFloor} from '../number';

export function diffDateTime(startDate: DateType, endDate: DateType, mode: DateTypeEnum = DateTypeEnum.DAYS) {
  startDate = new Date(startDate);
  endDate = new Date(endDate);

  const diff = +endDate - +startDate;
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  const diffYears = endYear - startYear;

  switch (mode) {
  case DateTypeEnum.YEARS:
    return diffYears;
  case DateTypeEnum.MONTHS:
    return diffYears * 12 - startDate.getMonth() + endDate.getMonth();
  case DateTypeEnum.DAYS:
    return intDivFloor(diff, 1000 * 60 * 60 * 24);
  case DateTypeEnum.HOURS:
    return intDivFloor(diff, 1000 * 60 * 60);
  case DateTypeEnum.MINUTES:
    return intDivFloor(diff, 1000 * 60);
  case DateTypeEnum.SECONDS:
    return intDivFloor(diff, 1000);
  }
}
