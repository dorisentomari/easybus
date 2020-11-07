export function humpToUnderline(name: string = '') {
  return name.replace(/\B([A-Z])/g, '_$1').toLowerCase();
}
