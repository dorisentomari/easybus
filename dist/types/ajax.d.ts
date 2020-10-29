export declare type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'link' | 'LINK' | 'unlink' | 'UNLINK';
export interface AjaxRequestConfig {
    url: string;
    method?: Method;
    headers?: any;
    params?: any;
    data?: any;
    timeout?: number;
    responseType?: XMLHttpRequestResponseType;
}
export interface AjaxResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: AjaxRequestConfig;
    request: any;
}
export interface AjaxPromise<T = any> extends Promise<AjaxResponse<T>> {
}
export interface Ajax {
    get<T = any>(url: string, config?: AjaxRequestConfig): AjaxPromise<T>;
    delete<T = any>(url: string, config?: AjaxRequestConfig): AjaxPromise<T>;
    head<T = any>(url: string, config?: AjaxRequestConfig): AjaxPromise<T>;
    options<T = any>(url: string, config?: AjaxRequestConfig): AjaxPromise<T>;
    post<T = any>(url: string, data?: any, config?: AjaxRequestConfig): AjaxPromise<T>;
    put<T = any>(url: string, data?: any, config?: AjaxRequestConfig): AjaxPromise<T>;
    patch<T = any>(url: string, data?: any, config?: AjaxRequestConfig): AjaxPromise<T>;
}
export declare class AjaxError extends Error {
    config: AjaxRequestConfig;
    code?: string | null;
    request?: any;
    response?: AjaxResponse;
    constructor(message: string, config: AjaxRequestConfig, code?: string | null, request?: any, response?: AjaxResponse);
}
export declare function createError(message: string, config: AjaxRequestConfig, code?: string | null, request?: any, response?: AjaxResponse): AjaxError;
