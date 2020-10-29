import {trim} from '../../string';

describe('测试 trim', () => {
  test('开始测试', () => {
    expect(trim('  jack  ')).toEqual('jack');
    expect(trim('  jack  ', false)).toEqual('  jack');
    expect(trim('  jack  ', true, false)).toEqual('jack  ');
    expect(trim('  jack  ', false, false)).toEqual('  jack  ');
  });
});