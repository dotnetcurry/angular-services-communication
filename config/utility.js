var path = require('path');

var approot = path.resolve(__dirname, '..');

function rootpath(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [approot].concat(args));
}

exports.root = rootpath;