import {differenceSet} from '../../array';

describe('测试 differenceSet', () => {
  test('开始测试', () => {
    expect(differenceSet([], [])).toEqual([]);
    expect(differenceSet([1, 2, 3], [3, 4, 5])).toEqual([1, 2]);
  });
});