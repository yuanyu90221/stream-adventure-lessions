const combine = require('stream-combiner');
const split2 = require('split2');
const zlib = require('zlib');
const through2 =  require('through2');
const result = {};
module.exports = function () {
  let current;
  const write = function (line, _, next) {
    if (line.length === 0) return next();
    const row = JSON.parse(line);
    if (row.type === 'genre') {
      if (current) {
        this.push(JSON.stringify(current)+'\n');
      }
      current = { name: row.name, books: []};
    } else if (row.type === 'book') {
      current.books.push(row.name);
    }
    next();
  };
  const end = function (next) {
    if (current) {
      this.push(JSON.stringify(current) + '\n');
    }
    next();
  };
  const grouper = through2(write, end);
 return combine(split2(), grouper, zlib.createGzip())
};
