const crypto = require('crypto');
const decipherStream = crypto.createDecipheriv("aes256", process.argv[2], process.argv[3]);
process.stdin.pipe(decipherStream).pipe(process.stdout)
