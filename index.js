const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

app.get('/records', (req, res) => {
  res.json([
    {
      date: '01/02/2023',
      description: 'Nomina',
      value: '2500000',
      type: 'debit',
    },
    {
      date: '01/02/2023',
      description: 'Mercado',
      value: '-250000',
      type: 'credit',
    },
  ]);
});

app.get('/records/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    date: '01/02/2023',
    description: 'Mercado',
    value: '-250000',
    type: 'credit',
  });
});

app.listen(port, () => {
  console.log('ejecutando en el puerto ' + port);
});
