
export function calculateArrayMinValue(arr: Array<any>) : number{
  if (arr.length === 0) {
    return 0;
  }
  return Math.min(...arr);
}
