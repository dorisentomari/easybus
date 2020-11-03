// O^2 冒泡排序
export function bubbleSort(arr, n) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
}

// O^2 冒泡排序优化
export function bubbleSortOptimize(arr, n) {
  let newN;

  do {
    newN = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        newN = i;
      }
    }
    n = newN;
  } while (newN > 0);
}
