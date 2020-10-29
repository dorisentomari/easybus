import {stringNumberRegexp} from '../regexp';

export function isStringNumber(value: string) {
  return stringNumberRegexp.test(value);
}