import { deleteClassName } from './deleteClassName';
import { addClassName } from './addClassName';

export function replaceClassName(elem: HTMLElement, newClassName: string, oldClassName: string) {
  deleteClassName(elem, oldClassName);
  addClassName(elem, newClassName);
}
