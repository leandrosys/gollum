const { Expenses, ExpensesSchema } = require('./expenses.model');

function setupModels(sequilize) {
  Expenses.init(ExpensesSchema, Expenses.config(sequilize));
}

module.exports = setupModels;
