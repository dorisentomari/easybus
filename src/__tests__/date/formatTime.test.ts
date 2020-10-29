import {formatTimeToCn} from '../../date';
import moment from 'moment';

describe('测试 formatTimeToCn', () => {
  test('测试', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatTimeToCn(startTime)).toEqual(moment(startTime).format('12时34分45秒'));
    expect(formatTimeToCn(startTime, {
      hourCn: 'H',
      minuteCn: 'M',
      secondCn: 'S'
    })).toEqual('12H34M45S');
  });
});