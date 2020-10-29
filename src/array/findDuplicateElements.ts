export function findDuplicateElements<T>(arr: Array<T>): Array<T> {
  const result: Array<T> = [];
  if (arr.length === 0) {
    return result;
  }

  const map: Record<any, any> = {};

  let repeatSet = new Set<T>();

  for (let i = 0; i < arr.length; i++) {
    const item = String(arr[i]);
    if (map[item]) {
      repeatSet.add(arr[i]);
    } else {
      map[item] = true;
    }
  }

  return Array.from(repeatSet);
}
