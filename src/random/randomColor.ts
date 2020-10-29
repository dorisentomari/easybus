// 随机颜色 16 进制
export function randomColor(needUpper: boolean = true): string {
  const str = '#' + Math.random().toString(16).slice(2, 8);
  if (needUpper) {
    return str.toUpperCase();
  }
  return str;
}
