import {calculateArrayMaxValue} from '../../array';

describe('测试 calculateArrayMaxValue', () => {
  test('开始测试', () => {
    expect(calculateArrayMaxValue([])).toEqual(0);
    expect(calculateArrayMaxValue([1, 2, 3])).toEqual(3);
  });
});