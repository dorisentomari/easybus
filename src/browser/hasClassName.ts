export function hasClassName(elem: HTMLElement, className: string) {
  if (elem) {
    return (elem.className).trim().indexOf(className) > -1;
  }
  throw new Error(`cannot find ${elem} element`);
}
