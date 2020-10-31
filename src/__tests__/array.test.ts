import {
  arrayElementsMaxTimes,
  arrayElementsTimes,
  arrayify,
  calculateArrayAverage,
  calculateArrayMaxValue,
  calculateArrayMinValue,
  differenceSet,
  findDuplicateElements,
  intersection,
  mergeTwoArray,
  union,
} from '../array';

describe('测试 array', () => {
  test('测试 arrayElementsMaxTimes', () => {
    expect(arrayElementsMaxTimes([])).toEqual([]);
    expect(arrayElementsMaxTimes([1, 2, 3])).toEqual([
      { key: '1', times: 1 },
      { key: '2', times: 1 },
      { key: '3', times: 1 },
    ]);
    expect(arrayElementsMaxTimes([1, 2, 3, 3])).toEqual([{ key: '3', times: 2 }]);
    expect(arrayElementsMaxTimes([1, 2, 3, 3, 4, 4])).toEqual([
      { key: '3', times: 2 },
      { key: '4', times: 2 },
    ]);
    expect(arrayElementsMaxTimes([1, 2, 3, 3, 4, 4], true)).toEqual({
      key: '3',
      times: 2,
    });
    expect(arrayElementsMaxTimes([1, 2, 7, 7, 7, 3, 3, 4, 4])).toEqual([{ key: '7', times: 3 }]);
    expect(arrayElementsMaxTimes([1, 2, 7, 7, 7, 3, 3, 4, 4], true)).toEqual({
      key: '7',
      times: 3,
    });
    expect(arrayElementsMaxTimes([1, 2, 7, 7, 7, 3, 3, 4, 4, 8, 8, 8, 8], true)).toEqual({
      key: '8',
      times: 4,
    });
  });

  test('测试 arrayElementsTimes', () => {
    expect(arrayElementsTimes([])).toEqual({});
    expect(arrayElementsTimes([1, 2, 3])).toEqual({
      '1': 1,
      '2': 1,
      '3': 1,
    });
    expect(arrayElementsTimes([1, 2, 3, 3])).toEqual({
      '1': 1,
      '2': 1,
      '3': 2,
    });
    expect(arrayElementsTimes([1, 2, 3, 3, 4, 4])).toEqual({
      '1': 1,
      '2': 1,
      '3': 2,
      '4': 2,
    });
    expect(
      arrayElementsTimes([1, 2, 3, 3, 4, 4, undefined, null, null, {}, {}, [], [], []]),
    ).toEqual({
      '1': 1,
      '2': 1,
      '3': 2,
      '4': 2,
      undefined: 1,
      null: 2,
      '{}': 2,
      '[]': 3,
    });
  });

  test('测试 arrayify', () => {
    expect(arrayify('a')).toEqual(['a']);
    expect(arrayify(['a'])).toEqual(['a']);
  });

  test('测试 calculateArrayAverage', () => {
    expect(calculateArrayAverage([])).toEqual(0);
    expect(calculateArrayAverage([1, 2, 3])).toEqual(2);
    expect(
      calculateArrayAverage(
        [
          { id: 1, age: 18 },
          { id: 2, age: 22 },
          { id: 3, age: 20 },
        ],
        'age',
      ),
    ).toEqual(20);
  });

  test('测试 calculateArrayMaxValue', () => {
    expect(calculateArrayMaxValue([])).toEqual(0);
    expect(calculateArrayMaxValue([1, 2, 3])).toEqual(3);
  });

  test('测试 calculateArrayMaxValue', () => {
    expect(calculateArrayMinValue([])).toEqual(0);
    expect(calculateArrayMinValue([1, 2, 3])).toEqual(1);
  });

  test('测试 differenceSet', () => {
    expect(differenceSet([], [])).toEqual([]);
    expect(differenceSet([1, 2, 3], [3, 4, 5])).toEqual([1, 2]);
  });

  test('测试 findDuplicateElements', () => {
    expect(findDuplicateElements([])).toEqual([]);
    expect(findDuplicateElements([1, 2, 3, 4, 5])).toEqual([]);
    expect(findDuplicateElements([null, null, null])).toEqual([null]);
    expect(findDuplicateElements([1, 2, 3, 3, 4, 5, 9, 4, 3])).toEqual([3, 4]);
  });

  test('测试 intersection', () => {
    expect(intersection([], [])).toEqual([]);
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    expect(intersection([1, 2, 3], [3, 4, 5])).toEqual([3]);
  });

  test('测试 mergeTwoArray', () => {
    expect(mergeTwoArray([], [])).toEqual([]);
    expect(mergeTwoArray([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 3, 4, 5]);
    expect(mergeTwoArray([1, 2, 3], [3, 4, 5], true)).toEqual([1, 2, 3, 4, 5]);
  });

  test('测试 union', () => {
    expect(union([], [])).toEqual([]);
    expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
