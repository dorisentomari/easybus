import {
  deepGet,
  isRectanglesOverlap,
  matchArrayFieldsToObject,
  transformListToObject,
  parseStringToJSON,
} from '../object';
import { isNumber } from '../common';

describe('测试 object', () => {
  test('测试 deepGet', () => {
    const obj = { a: { b: { c: { d: 'dx' } } } };
    expect(deepGet(obj, ['a', 'b', 'c'])).toEqual({ d: 'dx' });
    expect(deepGet(obj, ['a', 'b', 'c', 'd'])).toEqual('dx');
  });

  test('测试 isRectanglesOverlap', () => {
    const rect1 = { x: 0, y: 0, width: 20, height: 20 };
    const rect2 = { x: 0, y: 0, width: 20, height: 20 };
    const rect3 = { x: 30, y: 30, width: 20, height: 20 };
    expect(isRectanglesOverlap(rect1, rect2)).toEqual(true);
    expect(isRectanglesOverlap(rect1, rect3)).toEqual(false);
  });

  /*
  *
export function parseTushareFieldList(field, value) {
  field = underlineToHump(field);
  if (field.toLowerCase().includes('date')) {
    if (value) {
      value = formatDate8ToStandard(value);
    }
  }
  return { field, value };
}
  * */

  test('测试 matchArrayFieldsToObject', () => {
    const fields = ['id', 'name', 'age'];
    const dataList = [
      [1, 'jack', 18],
      [2, 'sherry', 19],
      [3, 'tom', 20],
    ];
    const result1 = [
      { id: 1, name: 'jack', age: 18 },
      { id: 2, name: 'sherry', age: 19 },
      { id: 3, name: 'tom', age: 20 },
    ];
    const result2 = [
      { id: '1', name: 'jack', age: '18' },
      { id: '2', name: 'sherry', age: '19' },
      { id: '3', name: 'tom', age: '20' },
    ];

    function fn(field, value) {
      if (isNumber(value)) {
        value = String(value);
      }
      return { field, value };
    }
    expect(matchArrayFieldsToObject(fields, dataList)).toEqual(result1);
    expect(matchArrayFieldsToObject(fields, dataList, fn)).toEqual(result2);
  });

  test('测试 parseStringToJSON', () => {
    const str = '{"name": "jack", "age": 18}';
    const errorStr = '"name": "jack", "age": 18}';
    expect(parseStringToJSON(str)).toEqual({ name: 'jack', age: 18 });
    expect(parseStringToJSON(errorStr)).toEqual(errorStr);
  });

  test('测试 transformListToObject', () => {
    const userList = [
      { id: 1, name: 'jack', age: 18 },
      { id: 2, name: 'tom', age: 20 },
      { id: 3, name: 'jerry', age: 20 },
    ];

    expect(transformListToObject(userList, 'id')).toEqual({
      1: { id: 1, name: 'jack', age: 18 },
      2: { id: 2, name: 'tom', age: 20 },
      3: { id: 3, name: 'jerry', age: 20 },
    });

    expect(transformListToObject(userList, 'name')).toEqual({
      jack: { id: 1, name: 'jack', age: 18 },
      tom: { id: 2, name: 'tom', age: 20 },
      jerry: { id: 3, name: 'jerry', age: 20 },
    });
  });
});
