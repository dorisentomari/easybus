import {formatDateToArray} from '../../date';

describe('测试 diffDateTime', () => {
  test('测试', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatDateToArray(startTime)).toEqual([2010, 1, 2, 10]);
  });
});