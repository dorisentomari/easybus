import { isPlainObject } from '../common';

export function JSONtoCSV(arr = [], columns = [], delimiter = ',') {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!isPlainObject(item)) {
      throw new TypeError('数组元素必须是对象');
    }
  }

  return [
    columns.join(delimiter),
    ...arr.map((obj) => {
      return columns.reduce((prev, curr) => {
        return `${prev}${prev.length ? delimiter : ''}${obj[curr]}`;
      }, '');
    }),
  ]
    .join('\n')
    .trim();
}
