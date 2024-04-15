const express = require('express');
const EventTypesService = require('./../services/eventTypes.service');
const dtoHandler = require('../middlewares/dto.handler');
const {
  createEvenTypeDto,
  getEvenTypeDto,
  updateEvenTypeDto,
  deleteEvenTypeDto,
} = require('../schemas/eventTypes.dto');

const router = express.Router();
const service = new EventTypesService();

router.get(
  '/:id',
  dtoHandler(getEvenTypeDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const expense = await service.findOne(id);
      res.status(200).json({ expense });
    } catch (error) {
      next(error);
    }
  },
);

router.get('/', async (req, res, next) => {
  try {
    const expenses = await service.find();
    res.status(200).json({ expenses });
  } catch (error) {
    next(error);
  }
});

router.post('/', dtoHandler(createEvenTypeDto, 'body'), async (req, res) => {
  try {
    const body = req.body;
    const newExpense = await service.create(body);
    res.status(201).json({ newExpense });
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  dtoHandler(getEvenTypeDto, 'params'),
  dtoHandler(updateEvenTypeDto, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateExpense = await service.update(id, body);
      res.status(200).json({ updateExpense });
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  dtoHandler(deleteEvenTypeDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const expense = await service.delete(id);
      res.status(200).json({ expense });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
