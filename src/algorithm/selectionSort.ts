// O^2 选择排序
export function selectionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    let j;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

// O^2 选择排序优化
export function selectionSortOptimize(arr, n) {
  let left = 0;
  let right = n - 1;

  while (left < right) {
    let minIndex = left;
    let maxIndex = right;

    if (arr[minIndex] > arr[maxIndex]) {
      [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
    }

    for (let i = left + 1; i < right; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      } else if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }

    [arr[left], arr[minIndex]] = [arr[minIndex], arr[left]];
    [arr[right], arr[maxIndex]] = [arr[maxIndex], arr[right]];

    left++;
    right--;
  }
}
