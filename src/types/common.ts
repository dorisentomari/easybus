export type IFn = (...args: Array<any>) => any;

export type IBaseType = string | number | boolean | undefined | null;

export interface IBasicTypeObject {
  [key: string]: string | number | boolean | null | undefined;
}
