const crypto = require('crypto');

class ExpensesService {
  constructor() {
    this.expenses = [];
  }

  async create(data) {
    const newExpense = {
      id: crypto.randomUUID(),
      ...data,
    };
    this.expenses.push(newExpense);
    return newExpense;
  }

  async find() {
    return this.expenses;
  }

  async findOne(id) {
    return this.expenses.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.expenses.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('expense not found');
    }
    const expense = this.expenses[index];
    this.expenses[index] = {
      ...expense,
      ...changes,
    };
    return this.expenses[index];
  }

  async delete(id) {
    const index = this.expenses.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('expense not found');
    }
    this.expenses.splice(index);
    return { id };
  }
}

module.exports = ExpensesService;
