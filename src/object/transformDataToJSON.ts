import { isString } from '../common';

export function parseStringToJSON(data: any) {
  if (isString(data)) {
    try {
      data = JSON.parse(data);
    } catch (e) {}
  }
  return data;
}
