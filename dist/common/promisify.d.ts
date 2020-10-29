import { IFn } from '../types/common';
export declare function promisify(func: IFn): (...args: Array<any>) => Promise<unknown>;
