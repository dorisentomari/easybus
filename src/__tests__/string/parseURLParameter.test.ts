import {parseURLParameter} from '../../string';

describe('测试 parseURLParameter', () => {
  test('开始测试', () => {
    expect(parseURLParameter('http://127.0.0.1:8080/string/parseURLParameter.ts.html')).toEqual({});
    expect(parseURLParameter('https://www.google.com.hk/search?newwindow=1&sxsrf=ALeKk01OdVTCL6GjXR6ScpNhBNaFki0IYg%3A1603801953397&source=hp&ei=YROYX6WYFcOGoATLqr6oAg&q=mdn&btnK=Google+Search')).toEqual({
      newwindow: '1',
      sxsrf: 'ALeKk01OdVTCL6GjXR6ScpNhBNaFki0IYg%3A1603801953397',
      source: 'hp',
      ei: 'YROYX6WYFcOGoATLqr6oAg',
      q: 'mdn',
      btnK: 'Google+Search'
    });
  });
});