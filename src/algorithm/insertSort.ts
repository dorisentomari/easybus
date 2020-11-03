// O^2 插入排序优化，对于近乎有序的数组【日志】，性能特别高，甚至高于 nlogn 排序算法
export function insertSort(arr, n) {
  for (let i = 1; i < n; i++) {
    // 寻找元素 arr[i]合适的插入位置
    const e = arr[i];
    // 确保元素 e 应该插入的位置
    let j;
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
  return arr;
}

// O^2 插入排序区间
export function insertSortRange(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    const e = arr[i];
    let j;
    for (j = i; j > left && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}
