const http2 = require('http2');
const fs = require('fs');

function create(){
  this.server = http2.createSecureServer({
    key: fs.readFileSync('localhost-privkey.pem'),
    cert: fs.readFileSync('localhost-cert.pem')
  });

  this.server.on('error', err => console.error(err) );

  this.server.on('stream', (stream, headers) => {
    console.log(`server::`, JSON.stringify(headers) );
    stream.respond({
      'content-type': 'text/html',
      'status': 200
    });
    stream.end('<h2>Ok, Now we are connected!!</h2>', 'utf8', () => {
      console.log(`server:: end() finished`);
    });
  });
  this.start = ( port = 3443) => {
      this.server.listen(port, () => { 
        console.log(`server:: Running on https://localhost:${port}/` ); 
      });
  };
  return this;
};


module.exports = create();
