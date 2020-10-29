import {calculateArrayMinValue} from '../../array';

describe('测试 calculateArrayMaxValue', () => {
  test('开始测试', () => {
    expect(calculateArrayMinValue([])).toEqual(0);
    expect(calculateArrayMinValue([1, 2, 3])).toEqual(1);
  });
});