
export function calculateArrayMaxValue(arr: Array<any>): number {
  if (arr.length === 0) {
    return 0;
  }
  return Math.max(...arr);
}
