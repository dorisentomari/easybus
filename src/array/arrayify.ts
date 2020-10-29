import {isArray} from '../common';

export function arrayify(val: Array<any> | any) : Array<any> {
  if (isArray(val)) {
    return val;
  }
  return [val];
}