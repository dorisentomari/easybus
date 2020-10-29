import {isBrowser} from '../common';
import {IStorage} from '../types/browser';

export const localStore: IStorage = {};
if (isBrowser()) {
  const _localStorage = window.localStorage;
  localStore.getItem = function (key: string) {
    let value = _localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  };

  localStore.setItem = function (key: string, value: any) {
    return _localStorage.setItem(key, JSON.stringify(value));
  };

  localStore.removeItem = function (key: string) {
    return _localStorage.removeItem(key);
  };

  localStore.clear = function () {
    return _localStorage.clear();
  };
} else {
  throw new Error('localStorage: 只能在浏览器端使用');
}

