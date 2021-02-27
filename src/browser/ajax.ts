import { AjaxPromise, AjaxRequestConfig, AjaxResponse, createError } from '../types';
import { isPlainObject } from '../common';
import { buildURL } from '../string';
import { parseStringToJSON } from '../object';

const CONTENT_TYPE = 'Content-Type';

function xhr(config: AjaxRequestConfig): AjaxPromise {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    const { data, url, method = 'get', headers = {}, timeout = 0, responseType } = config;
    request.responseType = responseType ? responseType : 'json';
    request.timeout = timeout;

    request.open(method.toUpperCase(), url, true);

    Object.keys(headers).forEach((name) => {
      if (data === null && name.toLowerCase() === CONTENT_TYPE.toLowerCase()) {
        delete headers[name];
      } else {
        request.setRequestHeader(name, headers[name]);
      }
    });

    request.onreadystatechange = function () {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 0) {
        return;
      }

      const responseHeaders = parseHttpHeaders(request.getAllResponseHeaders());
      const responseData = responseType === 'text' ? request.responseText : request.response;
      const response: AjaxResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        request,
        config,
      };
      handleResponse(response);
    };

    request.onerror = function () {
      reject(createError('Network Error', config, null, request));
    };

    request.ontimeout = function () {
      reject(createError(`Timeout of ${timeout}ms`, config, 'ECONNABORTED', request));
    };

    request.send(data);

    function handleResponse(response: AjaxResponse): void {
      const status = response.status;
      if (status >= 200 && status < 400) {
        response.data = parseStringToJSON(response.data);
        return resolve(response);
      } else {
        return reject(
          createError(
            `Request failed with status code ${status}`,
            config,
            'ECONNABORTED',
            request,
            response,
          ),
        );
      }
    }
  });
}

export function ajax(config: AjaxRequestConfig): AjaxPromise {
  config.url = processRequestUrl(config);
  config.data = processRequestData(config);
  config.headers = processRequestHeaders(config);
  return xhr(config);
}

function processRequestUrl(config: AjaxRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

function processRequestData(config: AjaxRequestConfig): any {
  if (isPlainObject(config.data)) {
    config.data = JSON.stringify(config.data);
  }
  return config.data;
}

function processRequestHeaders(config: AjaxRequestConfig): void {
  const { headers = {}, data } = config;
  if (isPlainObject(data)) {
    if (headers && !headers[CONTENT_TYPE]) {
      headers[CONTENT_TYPE] = 'application/json;charset=utf-8';
    }
  }
  return headers;
}

function parseHttpHeaders(headers: string) {
  const parsed = Object.create(null);
  if (!headers) {
    return parsed;
  }

  headers.split('\r\n').forEach((line) => {
    let [key, value] = line.split(':');
    key = key.trim().toLowerCase();
    if (!key) {
      return;
    }
    if (value) {
      value = value.trim();
    }
    parsed[key] = value;
  });
  return parsed;
}
