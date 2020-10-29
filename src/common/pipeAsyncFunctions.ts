import {IFn} from '../types/common';

export function pipeAsyncFunctions(fns: Array<IFn>) {
  return (arg: any) => {
    return fns.reduce((prev, curr) => {
      return prev.then(curr);
    }, Promise.resolve(arg));
  };
}
