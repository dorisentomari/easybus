import {
  isBoolean,
  isNumber,
  isString,
  isUndefined,
  isNull,
  isSymbol,
  isNaN,
  isInt,
  isEven,
  isOdd,
  isPositiveNumber,
  isNegativeNumber,
  isBaseType,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isArray,
  isEmptyArray,
  isPlainObject,
  isEmptyObject,
  isObject,
  isDate,
  isFunction,
  isValidDate,
  isError,
  isHTMLElement,
  isBrowser,
  isNode,
  isLeapYear
} from '../common';

interface IIsMockData {
  [k: string]: {
    method: (...args) => boolean;
    data: Array<{ value: any; result: boolean }>;
  };
}

export const isMockData: IIsMockData = {
  isBoolean: {
    method: isBoolean,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: {}, result: false },
      { value: [], result: false },
      { value: Symbol(), result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: true },
      { value: false, result: true },
      { value: !'', result: true },
      { value: !!'', result: true }
    ]
  },
  isNumber: {
    method: isNumber,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: undefined, result: false },
      { value: null, result: false },
      { value: Symbol(), result: false },
      { value: 1, result: true },
      { value: {}, result: false },
      { value: [], result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false }
    ]
  },
  isString: {
    method: isString,
    data: [
      { value: '', result: true },
      { value: '1', result: true },
      { value: undefined, result: false },
      { value: null, result: false },
      { value: 1, result: false },
      { value: {}, result: false },
      { value: [], result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false }
    ]
  },
  isUndefined: {
    method: isUndefined,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: undefined, result: true },
      { value: null, result: false },
      { value: Symbol(), result: false },
      { value: 1, result: false },
      { value: {}, result: false },
      { value: [], result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false }
    ]
  },
  isNull: {
    method: isNull,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: undefined, result: false },
      { value: null, result: true },
      { value: 1, result: false },
      { value: {}, result: false },
      { value: [], result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false }
    ]
  },
  isSymbol: {
    method: isSymbol,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: undefined, result: false },
      { value: null, result: false },
      { value: 1, result: false },
      { value: Symbol(), result: true },
      { value: Symbol('hello'), result: true },
      { value: {}, result: false },
      { value: [], result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false }
    ]
  },
  isNaN: {
    method: isNaN,
    data: [
      // @ts-ignore
      { value: 'a' * 'a', result: true },
      // @ts-ignore
      { value: 'a' / 'b', result: true },
      // @ts-ignore
      { value: 10 / 'a', result: true },
      // @ts-ignore
      { value: 'a' / 10, result: true },
      { value: 10 / 2, result: false }
    ]
  },
  isInt: {
    method: isInt,
    data: [
      { value: 100.0, result: true },
      { value: 100.0, result: true },
      { value: 100.1, result: false }
    ]
  },
  isEven: {
    method: isEven,
    data: [
      { value: 1, result: false },
      { value: 2, result: true }
    ]
  },
  isOdd: {
    method: isOdd,
    data: [
      { value: 1, result: true },
      { value: 2, result: false }
    ]
  },
  isPositiveNumber: {
    method: isPositiveNumber,
    data: [
      { value: 1, result: true },
      { value: 0, result: false },
      { value: -1, result: false }
    ]
  },
  isNegativeNumber: {
    method: isNegativeNumber,
    data: [
      { value: 1, result: false },
      { value: 0, result: false },
      { value: -1, result: true }
    ]
  },
  isBaseType: {
    method: isBaseType,
    data: [
      { value: 0, result: true },
      { value: 1, result: true },
      { value: -1, result: true },
      { value: '', result: true },
      { value: 'ss', result: true },
      { value: undefined, result: true },
      { value: null, result: true },
      { value: true, result: true },
      { value: false, result: true },
      { value: [], result: false },
      { value: {}, result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Date(), result: false },
      { value: new RegExp(''), result: false },
      { value: new Function(), result: false },
      { value: new Error(), result: false }
    ]
  },
  isMap: {
    method: isMap,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: {}, result: false },
      { value: [], result: false },
      { value: Symbol(), result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: true },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false },
      { value: !'', result: false },
      { value: !!'', result: false }
    ]
  },
  isWeakMap: {
    method: isWeakMap,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: {}, result: false },
      { value: [], result: false },
      { value: Symbol(), result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: true },
      { value: true, result: false },
      { value: false, result: false },
      { value: !'', result: false },
      { value: !!'', result: false }
    ]
  },
  isSet: {
    method: isSet,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: {}, result: false },
      { value: [], result: false },
      { value: Symbol(), result: false },
      { value: new Set(), result: true },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false },
      { value: !'', result: false },
      { value: !!'', result: false }
    ]
  },
  isWeakSet: {
    method: isWeakSet,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: {}, result: false },
      { value: [], result: false },
      { value: Symbol(), result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: true },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false },
      { value: !'', result: false },
      { value: !!'', result: false }
    ]
  },
  isArray: {
    method: isArray,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: {}, result: false },
      { value: [], result: true },
      { value: [1, 2, 3], result: true },
      { value: Symbol(), result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false },
      { value: !'', result: false },
      { value: !!'', result: false }
    ]
  },
  isEmptyArray: {
    method: isEmptyArray,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: {}, result: false },
      { value: [], result: true },
      { value: [1, 2, 3], result: false },
      { value: Symbol(), result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false },
      { value: !'', result: false },
      { value: !!'', result: false }
    ]
  },
  isPlainObject: {
    method: isPlainObject,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: {}, result: true },
      { value: { name: 'jack' }, result: true },
      { value: [], result: false },
      { value: Symbol(), result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false },
      { value: !'', result: false },
      { value: !!'', result: false }
    ]
  },
  isEmptyObject: {
    method: isEmptyObject,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: {}, result: true },
      { value: { name: 'jack' }, result: false },
      { value: [], result: false },
      { value: Symbol(), result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: true, result: false },
      { value: false, result: false },
      { value: !'', result: false },
      { value: !!'', result: false }
    ]
  },
  isObject: {
    method: isObject,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: Symbol(), result: false },
      { value: {}, result: true },
      { value: { name: 'jack' }, result: true },
      { value: [], result: true },
      { value: new Set(), result: true },
      { value: new WeakSet(), result: true },
      { value: new Map(), result: true },
      { value: new WeakMap(), result: true },
      { value: true, result: false },
      { value: false, result: false }
    ]
  },
  isDate: {
    method: isDate,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: Symbol(), result: false },
      { value: {}, result: false },
      { value: { name: 'jack' }, result: false },
      { value: [], result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: new Date(), result: true },
      { value: true, result: false },
      { value: false, result: false }
    ]
  },
  isValidDate: {
    method: isValidDate,
    data: [
      { value: '', result: false },
      { value: '1', result: true },
      { value: 1, result: true },
      { value: Symbol(), result: false },
      { value: {}, result: false },
      { value: { name: 'jack' }, result: false },
      { value: [], result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: new Date('2020-10-27'), result: true },
      { value: 'xxxxx', result: false },
      { value: true, result: true },
      { value: false, result: true }
    ]
  },
  isFunction: {
    method: isFunction,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: Symbol(), result: false },
      { value: {}, result: false },
      { value: { name: 'jack' }, result: false },
      { value: [], result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: new Date(), result: false },
      { value: true, result: false },
      { value: false, result: false },
      { value: () => {}, result: true },
      { value: function a() {}, result: true }
    ]
  },
  isError: {
    method: isError,
    data: [
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: Symbol(), result: false },
      { value: {}, result: false },
      { value: { name: 'jack' }, result: false },
      { value: [], result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: new Date(), result: false },
      { value: true, result: false },
      { value: false, result: false },
      { value: () => {}, result: false },
      { value: function a() {}, result: false },
      { value: new Error(), result: true }
    ]
  },
  isLeapYear: {
    method: isLeapYear,
    data: [
      { value: 2000, result: true },
      { value: 2001, result: false },
      { value: 1800, result: false },
      { value: 1804, result: true },
      { value: 2004, result: true },
      { value: new Date(), result: false }
    ]
  },
  isHTMLElement: {
    method: isHTMLElement,
    data: [
      { value: document.createElement('div'), result: true },
      { value: '', result: false },
      { value: '1', result: false },
      { value: 1, result: false },
      { value: Symbol(), result: false },
      { value: {}, result: false },
      { value: { name: 'jack' }, result: false },
      { value: [], result: false },
      { value: new Set(), result: false },
      { value: new WeakSet(), result: false },
      { value: new Map(), result: false },
      { value: new WeakMap(), result: false },
      { value: new Date(), result: false },
      { value: true, result: false },
      { value: false, result: false },
      { value: () => {}, result: false },
      { value: function a() {}, result: false },
      { value: new Error(), result: false }
    ]
  }
};

describe('测试 common', () => {
  for (const key in isMockData) {
    if (isMockData.hasOwnProperty(key)) {
      const methodItem = isMockData[key];
      test(`开始测试 ${methodItem.method}`, () => {
        methodItem.data.forEach((item) => {
          expect(methodItem.method(item.value)).toEqual(item.result);
        });
      });
    }
  }
});
