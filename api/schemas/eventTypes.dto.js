const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();

const createEventTypeDto = Joi.object({
  id: id.required(),
  name: name.required(),
});

const getEventTypeDto = Joi.object({
  id: id.required(),
});

const updateEventTypeDto = Joi.object({
  name,
});

const deleteEventTypeDto = Joi.object({
  id: id.required(),
});

module.exports = {
  createEventTypeDto,
  getEventTypeDto,
  updateEventTypeDto,
  deleteEventTypeDto,
};
