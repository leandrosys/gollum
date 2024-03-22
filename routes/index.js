const expensesRouter = require('./expenses.router');
const categoriesRouter = require('./expenses.router');

function routerApi(app) {
  app.use('/expenses', expensesRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
