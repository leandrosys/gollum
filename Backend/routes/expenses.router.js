const express = require('express');
const ExpensesService = require('./../services/expenses.service');

const router = express.Router();
const service = new ExpensesService();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const expense = await service.findOne(id);
  res.status(200).json({ expense });
});

router.get('/', async (req, res) => {
  const expenses = await service.find();
  res.status(200).json({ expenses });
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newExpense = await service.create(body);
  res.status(201).json({ newExpense });
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const expense = await service.update(id, body);
    res.status(200).json({ expense });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:ud', async (req, res) => {
  const { id } = req.params;
  const expense = await service.delete(id);
  res.status(200).json({ expense });
});

module.exports = router;
