export function parseHttpHeaders(headers: string) {
  let parsed = Object.create(null);
  if (!headers) {
    return parsed;
  }

  headers.split('\r\n').forEach(line => {
    let [key, value] = line.split(':');
    key = key.trim().toLowerCase();
    if (!key) {
      return;
    }
    if (value) {
      value = value.trim();
    }
    parsed[key] = value;
  });
  return parsed;
}
