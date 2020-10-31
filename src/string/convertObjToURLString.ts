import { IBasicTypeObject } from '../types/common';
import { encodeUrl } from './encodeUrl';

export function convertObjToURLString(obj: IBasicTypeObject) {
  let str = '';
  if (Object.keys(obj).length === 0) {
    return str;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value) {
        str += `${encodeUrl(key)}=${encodeUrl(value)}&`;
      }
    }
  }
  return str.slice(0, str.length - 1);
}
