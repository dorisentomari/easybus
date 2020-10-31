import { isPhone, isEmail } from '../regexp';

describe('测试 regexp', () => {
  test('测试 isPhone', () => {
    expect(isPhone(14122223333)).toEqual(true);
    expect(isPhone(141222233331)).toEqual(false);
    expect(isPhone(1412222333)).toEqual(false);
  });

  test('测试 isEmail', () => {
    expect(isEmail('jack@jack.com')).toEqual(true);
    expect(isEmail('jack.com')).toEqual(false);
    expect(isEmail('jack@jack')).toEqual(false);
    expect(isEmail('jack@jack#')).toEqual(false);
    expect(isEmail('jack@jack.')).toEqual(false);
    expect(isEmail('jack@jack.#')).toEqual(false);
    expect(isEmail('jack@jack.-=(*&^%$#@!')).toEqual(false);
  });
});
