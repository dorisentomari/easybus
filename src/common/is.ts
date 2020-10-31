/* 基础数据类型 */
export function isBoolean(value: any) {
  return Object.prototype.toString.call(value) === '[object Boolean]';
}

export function isNumber(value: any) {
  return Object.prototype.toString.call(value) === '[object Number]';
}

export function isString(value: any) {
  return Object.prototype.toString.call(value) === '[object String]';
}

export function isUndefined(value: any) {
  return Object.prototype.toString.call(value) === '[object Undefined]';
}

export function isNull(value: any) {
  return Object.prototype.toString.call(value) === '[object Null]';
}

export function isSymbol(value: any) {
  return Object.prototype.toString.call(value) === '[object Symbol]';
}

export function isNaN(value: any) {
  return isNumber(value) && value !== +value;
}

export function isInt(value: any): boolean {
  return isNumber(value) && value % 1 === 0;
}

// 偶数
export function isEven(value: any) {
  return isNumber(value) && value % 2 === 0;
}

// 奇数
export function isOdd(value: any) {
  return isNumber(value) && value % 2 === 1;
}

export function isPositiveNumber(value: any) {
  return isNumber(value) && value > 0;
}

export function isNegativeNumber(value: any) {
  return isNumber(value) && value < 0;
}

export function isBaseType(value: any) {
  const methods = [isNumber, isString, isBoolean, isUndefined, isNull, isSymbol];
  for (let i = 0; i < methods.length; i++) {
    const method = methods[i];
    if (method(value)) {
      return true;
    }
  }
  return false;
}

/* 其他数据类型 */
export function isMap(value: any) {
  return Object.prototype.toString.call(value) === '[object Map]';
}

export function isWeakMap(value: any) {
  return Object.prototype.toString.call(value) === '[object WeakMap]';
}

export function isSet(value: any) {
  return Object.prototype.toString.call(value) === '[object Set]';
}

export function isWeakSet(value: any) {
  return Object.prototype.toString.call(value) === '[object WeakSet]';
}

export function isArray(value: any) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

export function isEmptyArray(value: any) {
  return isArray(value) && value.length === 0;
}

export function isPlainObject(value: any) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function isEmptyObject(value: any) {
  return isPlainObject(value) && Object.keys(value).length === 0;
}

// 包含文件、日期、函数、正则等对象
export function isObject(value: any) {
  return typeof value === 'object';
}

export function isDate(value: string): boolean {
  return Object.prototype.toString.call(value) === '[object Date]';
}

export function isFunction(value: any) {
  return Object.prototype.toString.call(value) === '[object Function]';
}

export function isValidDate(value: any) {
  try {
    return new Date(value).toString() !== 'Invalid Date';
  } catch (err) {
    return false;
  }
}

export function isError(value: any) {
  return Object.prototype.toString.call(value) === '[object Error]';
}

export function isHTMLElement(element: any) {
  const div = document.createElement('div');
  try {
    div.appendChild(element.cloneNode(true));
    return element.nodeType === 1;
  } catch (e) {
    return false;
  }
}

export function isBrowser() {
  try {
    return typeof window === 'object' && typeof document === 'object' && document.nodeType === 9;
  } catch (err) {
    return false;
  }
}

export function isNode() {
  return (
    Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) ===
    '[object process]'
  );
}

export function isLeapYear(year: number) {
  if (!isNumber(year)) {
    return false;
  }
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
