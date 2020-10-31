export function paddingEnd(value: string, width: number, padding = ' ') {
  if (padding.length > 1) {
    padding = padding[0];
  }
  return value.length >= width ? value : value + new Array(width - value.length + 1).join(padding);
}
