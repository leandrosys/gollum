const express = require('express');
const FinancialMovementsService = require('../services/financialMovements.service');
const dtoHandler = require('../middlewares/dto.handler');
const {
  createFinancialMovementDto,
  getFinancialMovementDto,
  updateFinancialMovementDto,
  deleteFinancialMovementDto,
} = require('../schemas/financialMovements.dto');

const router = express.Router();
const service = new FinancialMovementsService();

router.get(
  '/:id',
  dtoHandler(getFinancialMovementDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const financialMovement = await service.findOne(id);
      res.status(200).json({ financialMovement });
    } catch (error) {
      next(error);
    }
  },
);

router.get('/', async (req, res, next) => {
  try {
    const financialMovements = await service.find();
    res.status(200).json({ financialMovements });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  dtoHandler(createFinancialMovementDto, 'body'),
  async (req, res) => {
    try {
      const body = req.body;
      const newFianancialMovement = await service.create(body);
      res.status(201).json({ newFianancialMovement });
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  dtoHandler(getFinancialMovementDto, 'params'),
  dtoHandler(updateFinancialMovementDto, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateFinancialMovement = await service.update(id, body);
      res.status(200).json({ updateFinancialMovement });
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  dtoHandler(deleteFinancialMovementDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const financialMovement = await service.delete(id);
      res.status(200).json({ financialMovement });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
