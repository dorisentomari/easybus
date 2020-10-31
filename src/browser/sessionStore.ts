import { isBrowser } from '../common';
import { IStorage } from '../types/browser';

export const sessionStore: IStorage = {};
if (isBrowser()) {
  const _sessionStorage = window.sessionStorage;
  sessionStore.getItem = function (key: string) {
    const value = _sessionStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  };

  sessionStore.setItem = function (key: string, value: any) {
    return _sessionStorage.setItem(key, JSON.stringify(value));
  };

  sessionStore.removeItem = function (key: string) {
    return _sessionStorage.removeItem(key);
  };

  sessionStore.clear = function () {
    return _sessionStorage.clear();
  };
} else {
  throw new Error('sessionStorage: 只能在浏览器端使用');
}
