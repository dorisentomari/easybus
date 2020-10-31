// 随机区间数字
export function randomNumber(
  minNumber: number = 0,
  maxNumber: number = 10000,
  needInt: boolean = true
) {
  const res = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return needInt ? parseInt(res.toString(), 10) : res;
}
