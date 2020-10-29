import { IFn } from '../types/common';
export declare function pipeAsyncFunctions(fns: Array<IFn>): (arg: any) => Promise<any>;
