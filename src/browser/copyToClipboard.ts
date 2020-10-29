import {isBaseType} from '../common/is';

export function copyToClipboard(str: any) {
  if (!isBaseType(str)) {
    str = JSON.stringify(str);
  }
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  return true;
}
