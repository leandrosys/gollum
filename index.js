const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('ejecutando en el puerto ' + port);
});

routerApi(app);
