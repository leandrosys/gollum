const crypto = require('crypto');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class FinancialMovementsService {
  async create(data) {
    let id = crypto.randomUUID();
    const record = {
      id,
      ...data,
    };
    const newFinancialMovement = await models.Financial.create(record);
    return newFinancialMovement;
  }

  async find() {
    const financialMovements = await models.Financial.findAll();
    return financialMovements;
  }

  async findOne(id) {
    const financialMovement = await models.Financial.findByPk(id);
    if (!financialMovement) throw boom.notFound('financial movement not found');
    return financialMovement;
  }

  async update(id, changes) {
    const financialMovement = await this.findOne(id);
    const updateFinancialMovement = await financialMovement.update(changes);
    return updateFinancialMovement;
  }

  async delete(id) {
    const financialMovement = await this.findOne(id);
    await financialMovement.destroy(id);
    return { id };
  }
}

module.exports = FinancialMovementsService;
