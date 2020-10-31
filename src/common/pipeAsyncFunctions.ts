export function pipeAsyncFunctions(fns: Array<(...args: Array<any>) => any>) {
  return (arg: any) => {
    return fns.reduce((prev, curr) => {
      return prev.then(curr);
    }, Promise.resolve(arg));
  };
}
