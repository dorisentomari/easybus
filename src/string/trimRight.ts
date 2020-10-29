export function trimRight(val: string) : string {
  return val.replace(/(\s*$)/ig, '');
}