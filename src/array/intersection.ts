// 计算交集
export function intersection<T>(arr1: Array<T>, arr2:Array<T>): Array<T> {
  const set2 = new Set(arr2);
  const result = arr1.filter(k => set2.has(k));
  return Array.from(result);
}