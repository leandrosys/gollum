const { Expenses, ExpensesSchema } = require('./expenses.model');
const { Categories, CategoriesSchema } = require('./categories.model');

function setupModels(sequilize) {
  Expenses.init(ExpensesSchema, Expenses.config(sequilize));
  Categories.init(CategoriesSchema, Categories.config(sequilize));
}

module.exports = setupModels;
