let debug = require('debug')('http');
let http = require('http');
let name = 'My App';

debug('booting %o', name);

http.createServer((req, res) => {
  debug(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(3000, () => {
  debug('listening');
})

require('./worker');