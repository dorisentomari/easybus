import { isArray } from '../common';

/**
 * arrayify value, if value is array, return `value`. if value is not array, return `[value]`;
 *
 * ```typescript
 * // eg. 1
 * let value = 1;
 * value = arrayify(value);
 * // now value is `[1]`;
 *
 * // eg. 2
 * let value = [1];
 * value = arrayify(value);
 * // now value is `[1]`;
 * ```
 *
 * @param {Array|any} value
 * @returns  {Array}
 * */

export function arrayify(value: Array<any> | any): Array<any> {
  if (isArray(value)) {
    return value;
  }
  return [value];
}
