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
      const eventType = await service.findOne(id);
      res.status(200).json({ eventType });
    } catch (error) {
      next(error);
    }
  },
);

router.get('/', async (req, res, next) => {
  try {
    const eventTypes = await service.find();
    res.status(200).json({ eventTypes });
  } catch (error) {
    next(error);
  }
});

router.post('/', dtoHandler(createEvenTypeDto, 'body'), async (req, res) => {
  try {
    const body = req.body;
    const newEventType = await service.create(body);
    res.status(201).json({ newEventType });
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
      const updateEventType = await service.update(id, body);
      res.status(200).json({ updateEventType });
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
      const eventType = await service.delete(id);
      res.status(200).json({ id });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
