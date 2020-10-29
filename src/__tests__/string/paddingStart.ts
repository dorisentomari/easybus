import {paddingStart} from '../../string';

describe('测试 paddingStart', () => {
  test('开始测试', () => {
    expect(paddingStart('jack', 10)).toEqual('      jack');
    expect(paddingStart('jack', 10, '0')).toEqual('000000jack');
    expect(paddingStart('jack', 10, '--')).toEqual('------jack');
    expect(paddingStart('jack&sherry', 10)).toEqual('jack&sherry');
  });
});