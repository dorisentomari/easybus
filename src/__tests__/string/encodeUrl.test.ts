import {encodeUrl} from '../../string';

describe('测试 encodeUrl', () => {
  test('', () => {
    expect(encodeUrl('@:$,+()')).toEqual('@:$,+()');
  });
});
