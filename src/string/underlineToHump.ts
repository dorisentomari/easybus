export function underlineToHump(name: string | number) {
  return String(name)
    .trim()
    .replace(/_(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
}
