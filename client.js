const http2 = require('http2');
const fs = require('fs');

function create(){
  this.client = http2.connect('https://localhost:3443', {
    ca: fs.readFileSync('localhost-cert.pem')
  });

  this.client.on('error', err => console.error(err) );

  this.req = client.request( { ':path':'/' } );

  this.req.on('response', (headers, flags) => {
    for( const name in headers){
      console.log(`client H:: ${name}: ${headers[name]}`);
    }
  });

  this.req.setEncoding('utf8');

  let data = '';

  this.req.on('data', chunk => { data += chunk; });

  this.req.on('end', () => {
    console.log(`client D::\n${data}`);
    this.client.close();
  });
  this.end = ()  => {
    this.req.end( () => {
      console.log(`client E:: end() `);
    } );
  };

  return this;
};

let uno = create();
let dos = create();
let tres = create();
uno.end();
dos.end();
tres.end();
// uno = null;
// dos = null;
// tres = null; 
