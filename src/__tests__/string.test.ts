import {
  buildURL,
  capitalize,
  encodeUrl,
  paddingEnd,
  paddingStart,
  parseURLParameter,
  trim,
} from '../string';
import { IBasicTypeObject } from '../types/common';

describe('测试 ', () => {
  test('测试 buildURL', () => {
    const queryParams: IBasicTypeObject = {
      name: 'jack',
      age: 18,
      isStudent: true,
    };
    const pathParams: IBasicTypeObject = {
      stuId: '123',
    };
    expect(buildURL('/stu/{stuId}', queryParams, pathParams)).toEqual(
      '/stu/123?name=jack&age=18&isStudent=true',
    );
    expect(buildURL('/stu/{stuId}', queryParams)).toEqual(
      '/stu/{stuId}?name=jack&age=18&isStudent=true',
    );
    expect(buildURL('/stu/{stuId}')).toEqual('/stu/{stuId}');
    expect(buildURL('/stu/{stuId}#h2', {}, pathParams)).toEqual('/stu/123');
    expect(buildURL('/stu/{stuId}?#h2', {}, pathParams)).toEqual('/stu/123?');
  });

  test('测试 capitalize', () => {
    expect(capitalize('')).toEqual('');
    expect(capitalize('hello')).toEqual('Hello');
  });

  test('测试 encodeUrl', () => {
    expect(encodeUrl('@:$,+()')).toEqual('@:$,+()');
  });

  test('测试 paddingEnd', () => {
    expect(paddingEnd('jack', 10)).toEqual('jack      ');
    expect(paddingEnd('jack', 10, '0')).toEqual('jack000000');
    expect(paddingEnd('jack', 10, '--')).toEqual('jack------');
    expect(paddingEnd('jack&sherry', 10)).toEqual('jack&sherry');
  });

  test('测试 paddingStart', () => {
    expect(paddingStart('jack', 10)).toEqual('      jack');
    expect(paddingStart('jack', 10, '0')).toEqual('000000jack');
    expect(paddingStart('jack', 10, '--')).toEqual('------jack');
    expect(paddingStart('jack&sherry', 10)).toEqual('jack&sherry');
  });

  test('测试 parseURLParameter', () => {
    expect(parseURLParameter('http://127.0.0.1:8080/string/parseURLParameter.ts.html')).toEqual({});
    expect(
      parseURLParameter(
        'https://www.google.com.hk/search?newwindow=1&sxsrf=ALeKk01OdVTCL6GjXR6ScpNhBNaFki0IYg%3A1603801953397&source=hp&ei=YROYX6WYFcOGoATLqr6oAg&q=mdn&btnK=Google+Search',
      ),
    ).toEqual({
      newwindow: '1',
      sxsrf: 'ALeKk01OdVTCL6GjXR6ScpNhBNaFki0IYg%3A1603801953397',
      source: 'hp',
      ei: 'YROYX6WYFcOGoATLqr6oAg',
      q: 'mdn',
      btnK: 'Google+Search',
    });
  });

  test('测试 trim', () => {
    expect(trim('  jack  ')).toEqual('jack');
    expect(trim('  jack  ', false)).toEqual('  jack');
    expect(trim('  jack  ', true, false)).toEqual('jack  ');
    expect(trim('  jack  ', false, false)).toEqual('  jack  ');
  });
});
