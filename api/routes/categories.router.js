const express = require('express');
const CategoriesService = require('./../services/categories.service');
const dtoHandler = require('../middlewares/dto.handler');
const {
  createCategoryDto,
  getCategoryDto,
  updateCategoryDto,
  deleteCategoryDto,
} = require('../schemas/categories.dto');

const router = express.Router();
const service = new CategoriesService();

router.get(
  '/:id',
  dtoHandler(getCategoryDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.status(200).json({ category });
    } catch (error) {
      next(error);
    }
  },
);

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  dtoHandler(createCategoryDto, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json({ newCategory });
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  dtoHandler(getCategoryDto, 'params'),
  dtoHandler(updateCategoryDto, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateCategory = await service.update(id, body);
      res.status(200).json({ updateCategory });
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  dtoHandler(deleteCategoryDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(200).json({ id });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
