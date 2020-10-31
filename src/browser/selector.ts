export function $selector(selector: string) {
  if (!selector) {
    return null;
  }

  const type = selector.substring(0, 1);
  if (type === '#') {
    if (document.querySelector) {
      return document.querySelector(selector);
    }
  } else if (type === '.') {
    if (document.querySelectorAll) {
      return document.querySelectorAll(selector);
    }
    return document.getElementsByClassName(selector.substring(1));
  } else {
    if (document.querySelectorAll) {
      return document.querySelectorAll(selector);
    }
    return document.getElementsByTagName(selector);
  }
}
