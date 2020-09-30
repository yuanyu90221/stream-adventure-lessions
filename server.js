const http = require('http');
const through2 = require('through2');
const tr = through2(function(buffer,_,next){
  this.push(buffer.toString().toUpperCase());
  next();
});
const server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req.pipe(tr).pipe(res);
  } else res.end('send me an POST\n');
});
server.listen(process.argv[2]);


