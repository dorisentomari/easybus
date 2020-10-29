import {formatTimeToArray} from '../../date';

describe('测试 formatTimeToArray', () => {
  test('测试', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatTimeToArray(startTime)).toEqual(['12', '34', '45']);
  });
});