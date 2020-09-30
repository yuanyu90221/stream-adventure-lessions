const concat = require('concat-stream');
const accu = concat(function(data){
  const result = data.toString().split("").reverse().join("");
  process.stdout.write(result);
});
process.stdin.pipe(accu);
