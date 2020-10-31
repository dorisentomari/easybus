import { trimLeft } from './trimLeft';
import { trimRight } from './trimRight';

export function trim(val: string, isTrimLeft: boolean = true, isTrimRight: boolean = true): string {
  if (isTrimLeft) {
    val = trimLeft(val);
  }
  if (isTrimRight) {
    val = trimRight(val);
  }
  return val;
}
