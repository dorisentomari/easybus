export interface JsonpOptions {
    url: string;
    params: any;
    callback: string;
}
export declare function jsonp(options: JsonpOptions): Promise<unknown>;
