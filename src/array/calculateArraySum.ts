import {isArray, isNumber, isPlainObject} from '../common';

export function calculateArraySum(arr: Array<number> | Array<any>, field?:string) {
  if (isArray(arr)) {
    return arr.reduce((prev, curr) => {
      if (isNumber(curr)) {
        prev += curr;
      } else if (isPlainObject(curr) && field) {
        const value = curr[field];
        if (isNumber(value)) {
          prev += value;
        }
      }
      return prev;
    }, 0);
  }
  return 0;
}