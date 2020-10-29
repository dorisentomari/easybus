import {formatDate} from '../../date';
import moment from 'moment';

describe('测试 formatDate', () => {
  test('测试', () => {
    const startTime = '2010-01-02 12:34:45';
    const endTime = '2020-04-21 23:12:43';
    expect(formatDate(startTime)).toEqual(moment(startTime).format('YYYY-MM-DD'));
    expect(formatDate(startTime, { dateMark: '/' })).toEqual(moment(startTime).format('YYYY/MM/DD'));
  });
});