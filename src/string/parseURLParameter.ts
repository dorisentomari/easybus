export function parseURLParameter(url: string) {
  let regexp = /([^&?=]+)=([^&?=]+)/g;
  let obj: Record<string, string> = {};
  // @ts-ignore
  url.replace(regexp, (...arg) => {
    obj[arg[1]] = arg[2];
  });
  return obj;
}
