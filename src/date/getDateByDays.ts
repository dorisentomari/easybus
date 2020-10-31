import { MONTH_DAYS, MONTH_NUMBER } from '../types/date';

export function getDateByDays(days: number) {
  let currentDays = 0;
  for (let i = 0; i < MONTH_NUMBER; i++) {
    if (currentDays <= days) {
      currentDays += MONTH_DAYS[i];
    } else {
      break;
    }
  }
  console.log('currentDays', currentDays);
}
