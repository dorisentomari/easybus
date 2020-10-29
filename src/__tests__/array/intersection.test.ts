import {intersection} from '../../array';

describe('测试 intersection', () => {
  test('开始测试', () => {
    expect(intersection([], [])).toEqual([]);
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    expect(intersection([1, 2, 3], [3, 4, 5])).toEqual([3]);
  });
});