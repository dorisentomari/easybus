import { transformListToObject, parseStringToJSON } from '../object';

describe('测试 object', () => {
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
