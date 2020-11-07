import { insertSortRange } from './insertSort';

function __merge(arr, left, middle, right) {
  // 临时空间 auxiliary
  const aux = Array.from({ length: right - left + 1 });

  for (let i = left; i <= right; i++) {
    aux[i - left] = arr[i];
  }

  let i = left;
  let j = middle + 1;

  for (let k = left; k <= right; k++) {
    if (i > middle) {
      arr[k] = aux[j - left];
      j++;
    } else if (j > right) {
      arr[k] = aux[i - left];
      i++;
    } else if (aux[i - left] < aux[j - left]) {
      arr[k] = aux[i - left];
      i++;
    } else {
      arr[k] = aux[j - left];
      j++;
    }
  }
}

// nlogn 归并排序
export function mergeSort(arr, n, lastNumber = 15) {
  const __mergeSort = (arr, left, right) => {
    if (left - right <= lastNumber) {
      insertSortRange(arr, left, right);
      return;
    }

    const middle = Math.floor((left + right) / 2);

    __mergeSort(arr, left, middle);
    __mergeSort(arr, middle + 1, right);

    if (arr[middle] > arr[middle + 1]) {
      __merge(arr, left, middle, right);
    }
  };

  // arr[l...r]
  __mergeSort(arr, 0, n - 1);
}

// nlogn 归并排序，自底向上
export function mergeSortBottomToUp(arr, n) {
  for (let size = 1; size <= n; size *= 2) {
    for (let i = 0; i + size < n; i += size * 2) {
      // 对 arr[i...i+size-1] 和 arr[i+size...i+2*size-1]
      __merge(arr, i, i + size - 1, Math.min(i + size + size - 1, n - 1));
    }
  }
}
