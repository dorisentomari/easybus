export function compareArray(arr1: Array<any>, arr2: Array<any>) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  if (len1 === len2 && len1 === 0) {
    return true;
  }

  if (len1 !== len2) {
    return false;
  }

  for (let i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}