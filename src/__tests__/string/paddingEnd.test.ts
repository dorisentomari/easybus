import {paddingEnd} from '../../string';

describe('测试 paddingEnd', () => {
  test('开始测试', () => {
    expect(paddingEnd('jack', 10)).toEqual('jack      ');
    expect(paddingEnd('jack', 10, '0')).toEqual('jack000000');
    expect(paddingEnd('jack', 10, '--')).toEqual('jack------');
    expect(paddingEnd('jack&sherry', 10)).toEqual('jack&sherry');
  });
});