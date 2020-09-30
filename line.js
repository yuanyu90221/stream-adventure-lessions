const through2 = require('through2');
const split2 = require('split2');
let lineCount = 0;
const tr = through2(function(line, _, next) {
  this.push(lineCount%2 === 0
   ?line.toString().toLowerCase()+'\n'
  :line.toString().toUpperCase()+'\n');
  lineCount++;
  next();
});
process.stdin.pipe(split2())
.pipe(tr)
.pipe(process.stdout);
