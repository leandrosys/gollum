const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = ['http://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      console.log(origin);
      callback(new Error('Dominio no permitido'));
    }
  },
};

routerApi(app);
app.use(cors(options));

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('ejecutando en el puerto ' + port);
});
