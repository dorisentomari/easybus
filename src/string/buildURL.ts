import {replaceWords} from './replaceWords';
import {IBasicTypeObject} from '../types/common';
import {convertObjToURLString} from './convertObjToURLString';

function formatURLPathParam(url: string, obj: IBasicTypeObject = {}) {
  if (Object.keys(obj).length === 0) {
    return url;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      url = replaceWords(url, key, value as string);
    }
  }
  return url;
}

export function buildURL(url: string, queryParams?: IBasicTypeObject, pathParams?: IBasicTypeObject): string {
  if (!queryParams) {
    return url;
  }

  url = formatURLPathParam(url, pathParams);

  const queryUrl = convertObjToURLString(queryParams);
  const markIndex = url.indexOf('#');

  if (markIndex !== -1) {
    url = url.slice(0, markIndex);
  }
  if (queryUrl.length > 0) {
    url += (url.indexOf('?') === -1 ? '?' : '') + queryUrl;
  }
  return url;
}
