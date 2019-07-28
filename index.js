const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem')
});

server.on('error', err => console.error(err) );

server.on('stream', (stream, headers) => {
  console.log( JSON.stringify(headers) );
  stream.respond({
    'content-type': 'text/html',
    'status': 200
  });
  stream.end('<h2>Ok, Now we are connected!!</h2>');
});

server.listen(3443, () => { console.log('Running on https://localhost:3443/' ); });
