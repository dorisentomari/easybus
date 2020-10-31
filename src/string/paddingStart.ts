export function paddingStart(value: string | number, width: number, padding = ' '): string {
  value = String(value);
  if (padding.length > 1) {
    padding = padding[0];
  }
  return value.length >= width ? value : new Array(width - value.length + 1).join(padding) + value;
}
