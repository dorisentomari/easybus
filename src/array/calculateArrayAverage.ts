export function calculateArrayAverage(arr: Array<number>): number {
  const len = arr.length;
  if (len === 0) {
    return 0;
  }

  let sum = 0;
  arr.reduce((prev, curr) => {
    sum = prev + curr;
    return sum;
  });
  return sum / len;
}