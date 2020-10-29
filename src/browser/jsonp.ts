export interface JsonpOptions {
  url: string;
  params: any;
  callback: string;
}

export function jsonp(options: JsonpOptions) {
  return new Promise((resolve, reject) => {
    let {url = '', callback, params = {}} = options;
    const body = document.querySelector('body');
    let script = document.createElement('script');

    if (body) {
      // @ts-ignore
      window[callback] = function (json: any) {
        try {
          resolve(JSON.parse(json));
        } catch (e) {
          resolve(json);
        }
        body.removeChild(script);
        // @ts-ignore
        window[callback] = null;
      };

      params = {
        ...params,
        callback
      };
      let str = '';
      for (let key in params) {
        str += `${key}=${params[key]}&`;
      }
      script.src = `${url}?${str}`.slice(0, -1);
      body.appendChild(script);

      script.onerror = function (e) {
        return reject(e);
      };
    }
  });
}
