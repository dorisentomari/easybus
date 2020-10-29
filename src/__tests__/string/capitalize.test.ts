import {capitalize} from '../../string';

describe('测试 capitalize', () => {
  test('开始测试', () => {
    expect(capitalize('')).toEqual('');
    expect(capitalize('hello')).toEqual('Hello');
  });
});
