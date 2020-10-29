// 随机字符串
export function randomString(maxLength = 16): string {
  let str = '';
  while (str.length <= maxLength) {
    str += Math.random().toString(32).substr(2).toUpperCase();
  }
  return str;
}
