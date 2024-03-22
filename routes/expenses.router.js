const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
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

module.exports = router;
