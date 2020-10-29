export function paddingStart(value: string, width: number, padding = ' '): string {
  if (padding.length > 1) {
    console.warn(`padding length must be 1, but your input padding [${padding}] length is ${padding.length}`);
    padding = padding[0];
  }
  return value.length >= width ? value : new Array(width - value.length + 1).join(padding) + value;
}
