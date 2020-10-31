import {
  addDateTime,
  diffDateTime,
  formatDate,
  formatDateTime,
  formatDateToArray,
  formatDateToCn,
  formatTimeToArray,
  formatTimeToCn,
  timeToSeconds,
} from '../date';
import { DateTypeEnum } from '../types/date';
import moment from 'moment';

describe('测试 date', () => {
  test('测试 addDateTime', () => {
    const timeFormat = 'YYYY-MM-DD HH:mm:ss';
    const startTime = '2010-01-02 12:34:45';
    expect(addDateTime()).toEqual(moment(new Date()).format(timeFormat));
    expect(() => {
      // @ts-ignore
      addDateTime(startTime, DateTypeEnum.YEARS, '1');
    }).toThrow('addDateTime: expect `value` 1 is number, but got string');
    expect(addDateTime(startTime, DateTypeEnum.YEARS, 1)).toEqual(
      moment(startTime).add(1, 'years').format(timeFormat),
    );
    expect(addDateTime(startTime, DateTypeEnum.YEARS, 20)).toEqual(
      moment(startTime).add(20, 'years').format(timeFormat),
    );
    expect(addDateTime(startTime, DateTypeEnum.MONTHS, 1)).toEqual(
      moment(startTime).add(1, 'months').format(timeFormat),
    );
    expect(addDateTime(startTime, DateTypeEnum.MONTHS, 100)).toEqual(
      moment(startTime).add(100, 'months').format(timeFormat),
    );
    expect(addDateTime(startTime, DateTypeEnum.DAYS, 1)).toEqual(
      moment(startTime).add(1, 'days').format(timeFormat),
    );
    expect(addDateTime(startTime, DateTypeEnum.DAYS, 100)).toEqual(
      moment(startTime).add(100, 'days').format(timeFormat),
    );
    expect(addDateTime(startTime, DateTypeEnum.HOURS, 1)).toEqual(
      moment(startTime).add(1, 'hours').format(timeFormat),
    );
    expect(addDateTime(startTime, DateTypeEnum.HOURS, 100)).toEqual(
      moment(startTime).add(100, 'hours').format(timeFormat),
    );
    expect(addDateTime(startTime, DateTypeEnum.MINUTES, 1)).toEqual(
      moment(startTime).add(1, 'minutes').format(timeFormat),
    );
    expect(addDateTime(startTime, DateTypeEnum.MINUTES, 200)).toEqual(
      moment(startTime).add(200, 'minutes').format(timeFormat),
    );
    expect(addDateTime(startTime, DateTypeEnum.SECONDS, 1)).toEqual(
      moment(startTime).add(1, 'seconds').format(timeFormat),
    );
    expect(addDateTime(startTime, DateTypeEnum.SECONDS, 10000)).toEqual(
      moment(startTime).add(10000, 'seconds').format(timeFormat),
    );
  });

  test('测试 diffDateTime', () => {
    const startTime = '2010-01-02 12:34:45';
    const endTime = '2020-04-21 23:12:43';
    expect(diffDateTime(startTime, endTime, DateTypeEnum.YEARS)).toEqual(
      moment(endTime).diff(startTime, 'years'),
    );
    expect(diffDateTime(startTime, endTime, DateTypeEnum.MONTHS)).toEqual(
      moment(endTime).diff(startTime, 'months'),
    );
    expect(diffDateTime(startTime, endTime, DateTypeEnum.DAYS)).toEqual(
      moment(endTime).diff(startTime, 'days'),
    );
    expect(diffDateTime(startTime, endTime, DateTypeEnum.HOURS)).toEqual(
      moment(endTime).diff(startTime, 'hours'),
    );
    expect(diffDateTime(startTime, endTime, DateTypeEnum.MINUTES)).toEqual(
      moment(endTime).diff(startTime, 'minutes'),
    );
    expect(diffDateTime(startTime, endTime, DateTypeEnum.SECONDS)).toEqual(
      moment(endTime).diff(startTime, 'seconds'),
    );
  });

  test('测试 formatDate', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatDate(startTime)).toEqual(moment(startTime).format('YYYY-MM-DD'));
    expect(formatDate(startTime, { dateMark: '/' })).toEqual(
      moment(startTime).format('YYYY/MM/DD'),
    );
  });

  test('测试 formatDateTime', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatDateTime()).toEqual(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'));
    expect(formatDateTime(startTime)).toEqual(moment(startTime).format('YYYY-MM-DD HH:mm:ss'));
    expect(formatDateTime(startTime, { needCn: true })).toEqual(
      moment(startTime).format('YYYY年MM月DD日 HH时mm分ss秒'),
    );
  });

  test('测试 diffDateTime', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatDateToArray(startTime)).toEqual(['2010', '01', '02', '10']);
  });

  test('测试 formatDateToCn', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatDateToCn(startTime)).toEqual(moment(startTime).format('YYYY年MM月DD日'));
    expect(
      formatDateToCn(startTime, {
        yearCn: 'Y',
        monthCn: 'M',
        dayCn: 'D',
      }),
    ).toEqual('2010Y01M02D');
  });

  test('测试 formatTimeToCn', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatTimeToCn(startTime)).toEqual(moment(startTime).format('12时34分45秒'));
    expect(
      formatTimeToCn(startTime, {
        hourCn: 'H',
        minuteCn: 'M',
        secondCn: 'S',
      }),
    ).toEqual('12H34M45S');
  });

  test('测试 formatTimeToArray', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatTimeToArray(startTime)).toEqual(['12', '34', '45']);
  });

  test('测试 formatTimeToCn', () => {
    const startTime = '2010-01-02 12:34:45';
    expect(formatTimeToCn(startTime)).toEqual(moment(startTime).format('HH时mm分ss秒'));
  });

  test('测试 timeToSeconds', () => {
    const startTime = '1:40:00';
    expect(timeToSeconds(startTime)).toEqual(60 * 60 + 40 * 60);
  });
});
