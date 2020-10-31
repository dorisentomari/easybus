export function mergeTwoArray<T>(
  arr1: Array<T>,
  arr2: Array<T>,
  removeRepetition: boolean = false,
): Array<T> {
  if (removeRepetition) {
    return Array.from(new Set([...arr1, ...arr2]));
  }
  return [...arr1, ...arr2];
}
