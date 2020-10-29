// 前端分页
export function frontEndSwitchPage<T>(list: Array<T>, pageNumber = 1, pageSize = 10): Array<T> {
  return list.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}
