import {buildURL} from '../../string';
import {IBasicTypeObject} from '../../types/common';

describe('测试 buildURL', () => {
  test('开始测试', () => {
    let queryParams: IBasicTypeObject = {
      name: 'jack',
      age: 18,
      isStudent: true,
    };
    let pathParams: IBasicTypeObject = {
      stuId: '123'
    };
    expect(buildURL('/stu/{stuId}', queryParams, pathParams)).toEqual('/stu/123?name=jack&age=18&isStudent=true');
    expect(buildURL('/stu/{stuId}', queryParams)).toEqual('/stu/{stuId}?name=jack&age=18&isStudent=true');
    expect(buildURL('/stu/{stuId}')).toEqual('/stu/{stuId}');
    expect(buildURL('/stu/{stuId}#h2', {}, pathParams)).toEqual('/stu/123');
    expect(buildURL('/stu/{stuId}?#h2', {}, pathParams)).toEqual('/stu/123?');

  });
});