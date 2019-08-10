const express = require('express');
const app = express();
const port = 3300;

app.get('/', (req, res) => res.send('Hello, here we are!!'));

app.listen(port, () => console.log(`Example listening in port: ${port}`));

