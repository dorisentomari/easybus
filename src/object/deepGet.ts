import { isEmptyObject, isArray } from '../common';

export function deepGet(obj = {}, keys = []) {
  if (isEmptyObject(obj)) {
    return null;
  }

  if (!isArray(keys) || keys.length === 0) {
    return null;
  }

  return keys.reduce((xs, x) => {
    if (xs && xs[x]) {
      return xs[x];
    }
    return null;
  }, obj);
}
