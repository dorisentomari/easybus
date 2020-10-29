import {union} from '../../array';

describe('测试 union', () => {
  test('开始测试', () => {
    expect(union([], [])).toEqual([]);
    expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});