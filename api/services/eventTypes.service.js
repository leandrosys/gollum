const crypto = require('crypto');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class EventTypesService {
  async create(data) {
    const newEventType = await models.EventTypes.create(data);
    return newEventType;
  }

  async find() {
    const eventTypes = await models.EventTypes.findAll();
    return eventTypes;
  }

  async findOne(id) {
    const eventType = await models.EventTypes.findByPk(id);
    if (!eventType) throw boom.notFound('event type not found');
    return eventType;
  }

  async update(id, changes) {
    const eventType = await this.findOne(id);
    const updateEventType = await eventType.update(changes);
    return updateEventType;
  }

  async delete(id) {
    const eventType = await this.findOne(id);
    await eventType.destroy(id);
    return { id };
  }
}

module.exports = EventTypesService;
