import {hasClassName} from './hasClassName';

export function addClassName(elem: HTMLElement, name: string) {
  if (!hasClassName(elem, name)) {
    const className = elem.className.trim();
    if (className) {
      elem.className += ` ${name}`;
    } else {
      elem.className += name;
    }
  }
}