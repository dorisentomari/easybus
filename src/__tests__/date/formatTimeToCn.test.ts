import {formatTimeToCn} from '../../date';
import moment from 'moment';

describe('测试 formatTimeToCn', () => {
  test('测试', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatTimeToCn(startTime)).toEqual(moment(startTime).format('HH:mm:ss'));
    expect(formatTimeToCn(startTime, { timeMark: '/' })).toEqual(moment(startTime).format('HH/mm/ss'));
  });
});