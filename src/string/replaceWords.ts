export function replaceWords(
  str: string,
  key = '',
  value,
  leftMark = '\\{',
  rightMark = '\\}',
): string {
  return str.replace(new RegExp(leftMark + key + rightMark, 'gm'), value);
}
