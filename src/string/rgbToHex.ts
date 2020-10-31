import { parseToNumber } from '../number';

export function rgbToHex(red: number, green: number, blue: number): string {
  red = parseToNumber(red);
  green = parseToNumber(green);
  blue = parseToNumber(blue);
  return ((red << 16) + (green << 8) + blue).toString(16).padStart(6, '0');
}
