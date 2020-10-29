export function encodeUrl(value: string | number | boolean): string {
  return encodeURIComponent(value)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%2B/g, '+')
    .replace(/%5B/gi, '(')
    .replace(/%5D/gi, ')');
}
