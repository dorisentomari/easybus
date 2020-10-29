import {findDuplicateElements} from '../../array';

describe('测试 findDuplicateElements', () => {
  test('开始测试', () => {
    expect(findDuplicateElements([])).toEqual([]);
    expect(findDuplicateElements([1, 2, 3,  4, 5])).toEqual([]);
    expect(findDuplicateElements([null, null, null])).toEqual([null]);
    expect(findDuplicateElements([1, 2, 3, 3, 4, 5, 9, 4, 3])).toEqual([3, 4]);
  });
});