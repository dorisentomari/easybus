import {IFn} from '../types/common';

export function promisify(func: IFn) {
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
