import {parseToNumber} from './parseToNumber';

export function parseDigitalPrecision(num: number | string, precision: number = 2, isCarry: boolean = true): number {
  num = parseToNumber(num);
  if (isCarry) {
    return parseToNumber(num.toFixed(precision));
  }
  let numStr = num.toFixed(precision + 1);
  numStr = numStr.slice(0, numStr.length - 2);
  return parseToNumber(numStr);
}