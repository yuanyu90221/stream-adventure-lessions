const through2 = require('through2');
function write(buffer, encoding, next) {
  if (buffer !== null) {
    this.push(buffer.toString().toUpperCase());
  }
  next();
}

function end(done) {
  done();
}
const stream = through2(write, end);
process.stdin.pipe(stream).pipe(process.stdout);
