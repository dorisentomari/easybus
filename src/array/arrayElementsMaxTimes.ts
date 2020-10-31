import { arrayElementsTimes } from './arrayElementsTimes';

interface ReturnMaxTimesItem {
  key: string;
  times: number;
}

export function arrayElementsMaxTimes(
  arr: Array<number>,
  onlyOne: boolean = false
): ReturnMaxTimesItem | Array<ReturnMaxTimesItem> {
  const map = arrayElementsTimes(arr);
  const keys = Object.keys(map);

  const length = keys.length;
  let result: Array<ReturnMaxTimesItem> = [];
  let maxTimes = 0;

  for (let i = 0; i < length; i++) {
    const key = keys[i];
    const times = map[key];
    if (times > maxTimes) {
      maxTimes = times;
      result = [{ key, times }];
    } else if (times === maxTimes) {
      result.push({ key, times });
    }
  }
  return onlyOne ? result[0] : result;
}
