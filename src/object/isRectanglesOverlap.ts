import { isObject, isEmptyObject } from '../common';

interface IRectanglesItem {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function isRectanglesOverlap(rect1: IRectanglesItem, rect2: IRectanglesItem): boolean {
  if (!isObject(rect1) || !isObject(rect2) || isEmptyObject(rect1) || isEmptyObject(rect2)) {
    return false;
  }

  const r1 = rect1.x > rect2.x + rect2.width || rect1.y > rect2.y + rect2.height;
  const r2 = rect2.x > rect1.x + rect1.width || rect2.y > rect1.y + rect1.height;

  return !(r1 || r2);
}
