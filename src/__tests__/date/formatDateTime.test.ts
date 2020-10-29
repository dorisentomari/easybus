import {formatDateTime} from '../../date';
import moment from 'moment';

describe('测试 formatDateTime', () => {
  test('测试', () => {
    const startTime = '2010-01-02 12:34:45';
    const endTime = '2020-04-21 23:12:43';
    expect(formatDateTime()).toEqual(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'));
    expect(formatDateTime(startTime)).toEqual(moment(startTime).format('YYYY-MM-DD HH:mm:ss'));
    expect(formatDateTime(startTime, { needCn: true })).toEqual(moment(startTime).format('YYYY年MM月DD日 HH时mm分ss秒'));
  });
});