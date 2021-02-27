export function gcd(arr: Array<number>) {
  function _gcd(x: number, y: number) {
    if (y) {
      return _gcd(y, x % y);
    } else {
      return x;
    }
  }
  return arr.reduce((a, b) => _gcd(a, b));
}
