const Joi = require('joi');

const id = Joi.number();
const name = Joi.string();
const description = Joi.string();

const createCategoryDto = Joi.object({
  name: name.required(),
  description: description.required(),
});

const getCategoryDto = Joi.object({
  id: id.required(),
});

const updateCategoryDto = Joi.object({
  name,
  description,
});

const deleteCategoryDto = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategoryDto,
  getCategoryDto,
  updateCategoryDto,
  deleteCategoryDto,
};
