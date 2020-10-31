interface ReturnMaxTimesItem {
  key: string;
  times: number;
}
export declare function arrayElementsMaxTimes(
  arr: Array<number>,
  onlyOne?: boolean,
): ReturnMaxTimesItem | Array<ReturnMaxTimesItem>;
export {};
