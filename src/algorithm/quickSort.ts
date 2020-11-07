import { insertSortRange } from './insertSort';

// nlogn 快速排序
export function quickSort(arr, n) {
  // 对 arr[left...right] 部分进行 partition 排序
  // 返回 p，使得 arr[left...p-1] < arr[p]; arr[p+1...right] > arr[p]
  const __partition = (arr, left, right) => {
    // 如果近乎有序数组，那么可以随机生成标的物，因为如果是近乎有序的数组，快速排序近乎退化到 O^2 排序算法
    // 默认标的物为最左侧
    // swap(arr[left], arr[rand()%(r-l+1)+l])

    const randomIndex = Math.floor(Math.random() * (right - left + 1) + left);
    [arr[left], arr[randomIndex]] = [arr[randomIndex], arr[left]];

    const v = arr[left];

    let j = left;

    for (let i = left + 1; i <= right; i++) {
      if (arr[i] < v) {
        [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]];
        j++;
      }
    }

    [arr[left], arr[j]] = [arr[j], arr[left]];
    return j;
  };

  // 对 arr[left...right] 部分进行快速排序
  const __quickSort = (arr, left, right) => {
    if (left >= right) {
      return;
    }

    const p = __partition(arr, left, right);

    __quickSort(arr, left, p - 1);
    __quickSort(arr, p + 1, right);
  };

  __quickSort(arr, 0, n - 1);
}

// nlogn 快速排序优化 1
export function quickSortOptimize(arr, n) {
  const __partition = (arr, left, right) => {
    const randomIndex = Math.floor(Math.random() * (right - left + 1) + left);
    [arr[left], arr[randomIndex]] = [arr[randomIndex], arr[left]];

    const v = arr[left];

    // arr[left+1...i) <= v; arr(j...right] >= v;
    let i = left + 1;
    let j = right;

    while (true) {
      while (i <= right && arr[i] < v) {
        i++;
      }

      while (j >= left + 1 && arr[j] >= v) {
        j--;
      }

      if (i > j) {
        break;
      }

      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }

    [arr[left], arr[j]] = [arr[j], arr[left]];

    return j;
  };

  const __quickSort = (arr, left, right) => {
    if (right - left <= 15) {
      insertSortRange(arr, left, right);
      return;
    }

    const p = __partition(arr, left, right);

    __quickSort(arr, left, p - 1);
    __quickSort(arr, p + 1, right);
  };

  __quickSort(arr, 0, n - 1);
}

// nlogn 快速排序优化 2
export function quickSort3Ways(arr, n) {
  // 三路快速排序处理 arr[left...right]
  // 将 arr[left...right] 分为 < v; ==v; > v; 三个部分
  // 之后将递归对 < v; > v; 两部分继续进行三路快速排序

  const __quickSort3Ways = (arr, left, right) => {
    if (right - left <= 15) {
      insertSortRange(arr, left, right);
      return;
    }

    // partition
    const randomIndex = Math.floor(Math.random() * (right - left + 1) + left);
    [arr[left], arr[randomIndex]] = [arr[randomIndex], arr[left]];

    const v = arr[left];

    // arr[left+1...lt] < v
    let lT = left;

    // arr[gt...right] > v
    let gT = right + 1;

    // arr[lt+1...i] == v
    let i = left + 1;

    while (i < gT) {
      if (arr[i] < v) {
        [arr[i], arr[lT + 1]] = [arr[lT + 1], arr[i]];
        lT++;
        i++;
      } else if (arr[i] > v) {
        [arr[i], arr[gT - 1]] = [arr[gT - 1], arr[i]];
        gT--;
      } else {
        i++;
      }
    }

    [arr[left], arr[lT]] = [arr[lT], arr[left]];

    __quickSort3Ways(arr, left, lT - 1);
    __quickSort3Ways(arr, gT, right);
  };

  __quickSort3Ways(arr, 0, n - 1);
}
