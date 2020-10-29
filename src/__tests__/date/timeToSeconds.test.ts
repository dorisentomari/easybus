import {timeToSeconds} from '../../date';

describe('测试 timeToSeconds', () => {
  test('测试', () => {
    const startTime = '1:40:00';
    expect(timeToSeconds(startTime)).toEqual(60 * 60 + 40 * 60);
  });
});