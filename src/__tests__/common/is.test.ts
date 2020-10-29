import {isMockData} from './is-mock-data';

describe('测试 is', () => {

  for (let key in isMockData) {
    if (isMockData.hasOwnProperty(key)) {
      const methodItem = isMockData[key];
      test(`开始测试 ${methodItem.method}`, () => {
        methodItem.data.forEach(item => {
          expect(methodItem.method(item.value)).toEqual(item.result);
        });
      });
    }
  }
});

