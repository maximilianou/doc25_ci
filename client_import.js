const client1  = require('./client');
const client2  = require('./client');
const client3  = require('./client');

const run = async (cli) => {
  console.log('cli_im:: 1');
  await cli.start();
  console.log('cli_im:: 2');
  await cli.end();
  console.log('cli_im:: 3');
}

run(client1);
run(client2);
run(client3);
