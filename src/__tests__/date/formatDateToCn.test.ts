import {formatDateToCn} from '../../date';
import moment from 'moment';

describe('测试 formatDateToCn', () => {
  test('测试', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatDateToCn(startTime)).toEqual(moment(startTime).format('YYYY年MM月DD日'));
    expect(formatDateToCn(startTime, {
      yearCn: 'Y',
      monthCn: 'M',
      dayCn: 'D'
    })).toEqual('2010Y01M02D');
  });
});