const combine = require('stream-combiner');
const split2 = require('split2');
const total = [];
module.exports = function () {
 return combine(split2, function(line, _, next) => {
    if (line !== null) {
      total.push(line);
    }
 })
};
