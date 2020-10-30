export function arrayElementsTimes(arr: Array<any>) {
  const map: { [k: string]: number } = {};
  for (let i =0; i < arr.length; i++) {
    const item = arr[i];
    if (map[item]) {
      map[item] = map[item] + 1;
    } else {
      map[item] = 1;
    }
  }
  return map;
}
