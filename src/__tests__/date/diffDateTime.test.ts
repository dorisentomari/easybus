import {diffDateTime} from '../../date';
import {DateTypeEnum} from '../../types/date';
import moment from 'moment';

describe('测试 diffDateTime', () => {
  test('测试', () => {
    const startTime = '2010-01-02 12:34:45';
    const endTime = '2020-04-21 23:12:43';
    expect(diffDateTime(startTime, endTime, DateTypeEnum.YEARS)).toEqual(moment(endTime).diff(startTime, 'years'));
    expect(diffDateTime(startTime, endTime, DateTypeEnum.MONTHS)).toEqual(moment(endTime).diff(startTime, 'months'));
    expect(diffDateTime(startTime, endTime, DateTypeEnum.DAYS)).toEqual(moment(endTime).diff(startTime, 'days'));
    expect(diffDateTime(startTime, endTime, DateTypeEnum.HOURS)).toEqual(moment(endTime).diff(startTime, 'hours'));
    expect(diffDateTime(startTime, endTime, DateTypeEnum.MINUTES)).toEqual(moment(endTime).diff(startTime, 'minutes'));
    expect(diffDateTime(startTime, endTime, DateTypeEnum.SECONDS)).toEqual(moment(endTime).diff(startTime, 'seconds'));
  });
});

