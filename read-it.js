const { Readable } = require('stream')

class MyReadable extends Readable {
  _read (size) {
  }
}

const readStream = new MyReadable();
readStream.push(process.argv[2]);
readStream.pipe(process.stdout);
