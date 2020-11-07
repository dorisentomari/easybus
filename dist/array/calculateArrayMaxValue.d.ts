/**
 * calculate array element max value element;
 *
 * @remark use JavaScript's `Math.max` method; if one element is string number like `'44'`, it regard `'44'` as number 44 and work; But if one element is `'a'` or `undefined` or `object`, you will get `NaN`;
 *
 *
 * ```typescript
 * // eg. 1
 * let maxValue = calculateArrayMaxValue([]);
 * // now maxValue is `0`;
 *
 * // eg. 2
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5]);
 * // now maxValue is `5`;
 *
 * // eg. 3
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5, '8', 10]);
 * // now maxValue is `10`;
 *
 * // eg. 4
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5, 'a', 10]);
 * // now maxValue is `NaN`;
 * ```
 *
 * @param {Array<number>} arr
 * @returns {number}
 * */
export declare function calculateArrayMaxValue(arr: Array<any>): number;
