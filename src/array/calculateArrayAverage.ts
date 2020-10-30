import {isNumber, isPlainObject} from '../common';

/**
 * calculate number array average;
 *
 * @remark arr element must be number type, not allow string number like '3';
 *
 *
 * ```typescript
 * // eg. 1
 * let average = calculateArrayAverage([]);
 * // now average is `0`;
 *
 * // eg. 2
 * let average = calculateArrayAverage([1, 2, 3, 4, 5]);
 * // now average is `3`;
 * 
 * // eg. 3
 * let average = calculateArrayAverage([1, 2, 3, 4, 5, '6', null, undefined, 'a', [], {}]);
 * // now average is `3`;
 * ```
 *
 * @param {Array<number>} arr
 * @param {string} field
 * @returns {number}
 * */

export function calculateArrayAverage(arr: Array<number> | Array<any>, field?: string): number {
  const len = arr.length;
  if (len === 0) {
    return 0;
  }

  let sum = arr.reduce((prev, curr) => {
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
  return sum / len;
}