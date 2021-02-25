export function foreach(obj: Record<string | number, any>, cb: Function): void {
  Object.keys(obj).forEach((item, index) => {
    cb(item, obj[item], index, obj);
  });
}
