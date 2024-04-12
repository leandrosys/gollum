const Joi = require('joi');

const id = Joi.string().uuid();
const category = Joi.string();
const value = Joi.number();
const transactionDate = Joi.date();
const eventType = Joi.string();
const description = Joi.string().max(50);

const createExpenseDto = Joi.object({
  category: category.required(),
  value: value.required(),
  transactionDate: transactionDate.required(),
  eventType: eventType.required(),
  description,
});

const getExpenseDto = Joi.object({
  id: id.required(),
});

const updateExpenseDto = Joi.object({
  category,
  value,
  transactionDate,
  eventType,
  description,
});

const deleteExpenseDto = Joi.object({
  id: id.required(),
});

module.exports = {
  createExpenseDto,
  getExpenseDto,
  updateExpenseDto,
  deleteExpenseDto,
};
