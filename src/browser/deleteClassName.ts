import {hasClassName} from './hasClassName';

export function deleteClassName(elem: HTMLElement, name: string) {
  if (hasClassName(elem, name)) {
    let reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
    elem.className = elem.className.replace(reg, ' ').trim();
  }
}