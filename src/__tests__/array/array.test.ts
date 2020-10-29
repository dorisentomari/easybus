import {arrayify} from '../../array';

describe('测试 arrayify', () => {
  test('开始测试', () => {
    expect(arrayify('a')).toEqual(['a']);
    expect(arrayify(['a'])).toEqual(['a']);
  });
});