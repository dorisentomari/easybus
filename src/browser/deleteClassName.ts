import { hasClassName } from './hasClassName';

export function deleteClassName(elem: HTMLElement, name: string) {
  if (hasClassName(elem, name)) {
    const reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
    elem.className = elem.className.replace(reg, ' ').trim();
  }
}
