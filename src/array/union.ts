// 计算并集
export function union<T>(arr1: Array<T>, arr2:Array<T>): Array<T> {
  return Array.from(new Set([...arr1, ...arr2]));
}