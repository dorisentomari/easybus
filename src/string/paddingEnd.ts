export function paddingEnd(value: string | number, width: number, padding = ' ') {
  value = String(value);
  if (padding.length > 1) {
    padding = padding[0];
  }
  return value.length >= width ? value : value + new Array(width - value.length + 1).join(padding);
}
