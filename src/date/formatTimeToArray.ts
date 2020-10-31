import { DateType } from '../types/date';

export function formatTimeToArray(date: DateType = new Date()): Array<string> {
  let arr: Array<string> = [];
  const newDate = new Date(date).toTimeString();
  // @ts-ignore
  newDate.replace(/^(\d{2}):(\d{2}):(\d{2})/, (_, g1, g2, g3) => {
    arr = arr.concat([g1, g2, g3]);
  });
  return arr;
}
