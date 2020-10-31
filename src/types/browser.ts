export interface IStorage {
  getItem?: (value: string) => any;
  setItem?: (key: string, value: any) => any;
  removeItem?: (key: string) => any;
  clear?: () => any;
}
