import { isString } from '../common';

export function formatDate8ToStandard(str: string) {
  if (isString(str)) {
    str = str.trim();
    const year = str.slice(0, 4);
    const month = str.slice(4, 6);
    const day = str.slice(6, 8);
    return new Date(Number(year), Number(month) - 1, Number(day));
  }
  return null;
}
