import {calculateArrayAverage} from '../../array';

describe('测试 calculateArrayAverage', () => {
  test('开始测试', () => {
    expect(calculateArrayAverage([])).toEqual(0);
    expect(calculateArrayAverage([1, 2, 3])).toEqual(2);
  });
});