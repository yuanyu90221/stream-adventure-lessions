const { request } = require('http');
const requestUrl = 'http://localhost:8099';
const options = { method: 'POST' };
const req = request(requestUrl, options, (res) => {
  res.pipe(process.stdout);
});
process.stdin.pipe(req);
