const crypto = require('crypto');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ExpensesService {
  async create(data) {
    let id = crypto.randomUUID();
    const fullDate = {
      id,
      ...data,
    };
    const newExpense = await models.Expenses.create(fullDate);
    return newExpense;
  }

  async find() {
    const expenses = await models.Expenses.findAll();
    return expenses;
  }

  async findOne(id) {
    const expense = await models.Expenses.findByPk(id);
    if (!expense) throw boom.notFound('expense not found');
    return expense;
  }

  async update(id, changes) {
    const expense = await this.findOne(id);
    const updateExpense = await expense.update(changes);
    return updateExpense;
  }

  async delete(id) {
    const expense = await this.findOne(id);
    await expense.destroy(id);
    return { id };
  }
}

module.exports = ExpensesService;
