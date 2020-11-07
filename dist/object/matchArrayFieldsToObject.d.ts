export declare function matchArrayFieldsToObject(fields: Array<string | number>, dataList: DataTransferItemList, fn?: (field: any, value: any) => {
    field: string | number;
    value: any;
} | null): any[];
