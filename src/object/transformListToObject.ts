// 把列表通过某个 key 转换成 object
export function transformListToObject<T>(
  list: Array<T>,
  key: string | number
): Record<string, any> {
  const map: Record<string, any> = {};
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const newKey = map[key];
    if (!newKey) {
      // @ts-ignore
      map[item[key]] = item;
    }
  }
  return map;
}
