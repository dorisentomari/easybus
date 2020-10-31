export function promisify(func: (...args: Array<any>) => any) {
  return (...args: Array<any>) => {
    return new Promise((resolve, reject) => {
      func(...args, (err: any, result: any) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  };
}
