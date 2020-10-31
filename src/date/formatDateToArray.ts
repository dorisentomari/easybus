import { DateType } from '../types/date';

export function formatDateToArray(date: DateType = new Date()): Array<string> {
  const arr: Array<string> = [];
  const newDate = new Date(date).toLocaleDateString();
  // @ts-ignore
  newDate.replace(/\d+/gi, (val) => {
    val = val.length < 2 ? '0' + val : val;
    arr.push(val);
  });
  arr.push(arr[0].slice(2));
  return arr;
}
