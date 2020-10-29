// 计算差集
export function differenceSet<T>(arr1: Array<T>, arr2: Array<T>): Array<T> {
  const set2 = new Set(arr2);
  const diff = new Set(arr1.filter(k => !set2.has(k)));
  return Array.from(diff);
}