const crypto = require('crypto');
const tar = require('tar');
const concat = require('concat-stream');
const decipherStream = crypto.createDecipheriv(process.argv[2], process.argv[3], process.argv[4]);
const parser = new tar.Parse();
parser.on('entry', function(e) {
  if (e.type !== 'File') return e.resume();
  const h = crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(h).pipe(concat(function(hash){
    console.log(hash + ' ' + e.path);
  }));
});

process.stdin.pipe(decipherStream).pipe(parser);
