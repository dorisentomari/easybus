import { intDivCeil, intDiv, isStringNumber, parseToNumber, power } from '../number';

describe('测试 number', () => {
  test('测试 intDivCeil', () => {
    expect(intDivCeil(5, 2)).toEqual(3);
    expect(intDivCeil(10, 2)).toEqual(5);
  });

  test('测试 intDiv', () => {
    expect(intDiv(5, 2)).toEqual(2);
    expect(intDiv(10, 2)).toEqual(5);
  });

  test('测试 isStringNumber', () => {
    expect(isStringNumber('123')).toEqual(true);
    expect(isStringNumber('123x')).toEqual(false);
    expect(isStringNumber('jack')).toEqual(false);
    expect(isStringNumber(undefined)).toEqual(false);
  });

  test('测试 parseToNumber', () => {
    expect(parseToNumber(199)).toEqual(199);
    expect(parseToNumber(199.01)).toEqual(199);
    expect(parseToNumber(199.05)).toEqual(199);
    expect(parseToNumber('199.05')).toEqual(199);
  });

  test('测试 power', () => {
    expect(power(100, 1.1, 1)).toEqual(110);
    expect(power(100, 1.1, 2)).toEqual(121);
  });
});
