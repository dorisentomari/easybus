const express = require('express');
const route = express.Router();

route.get('/jsonp', (req, res) => {
  const { callback } = req.query;
  const data = {
    name: 'jsonp',
    age: 19,
    home: 'beijing',
  };
  res.end(`${callback}('${JSON.stringify(data)}')`);
});

route.get('/user', (req, res) => {
  console.log('req.query');
  console.log(req.query);
  res.json({ user: 'jack' });
});

route.post('/user', (req, res) => {
  console.log('req.query');
  console.log(req.query);
  res.json({ user: 'jack', method: 'post' });
});

route.get('/set-header', (req, res) => {
  let headers = req.headers;
  let xJsUtilsKey = 'x-js-utils';
  let xJsUtilsValue = headers[xJsUtilsKey];
  if (xJsUtilsValue) {
    res.json({ xJsUtilsKey: xJsUtilsValue });
  } else {
    res.json({ xJsUtilsKey: null });
  }
});

route.get('/set-content-type', (req, res) => {
  let headers = req.headers;
  let contentType = headers['content-type'];
  res.setHeader('content-type', contentType);
  res.json({ status: true });
});

route.get('/set-response-type', (req, res) => {
  let headers = req.headers;
  let responseType = headers['response-type'];
  res.setHeader('response-type', responseType);
  res.json({ status: true });
});

route.get('/get-http-header', (req, res) => {
  console.log(req);
  return res.json();
});

module.exports = route;
