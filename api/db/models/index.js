const {
  FinancialMovements,
  FinancialMovementsSchema,
} = require('./financialMovements.model');
const { Categories, CategoriesSchema } = require('./categories.model');
const { EventTypes, EventTypesSchema } = require('./eventTypes.model');

function setupModels(sequilize) {
  Categories.init(CategoriesSchema, Categories.config(sequilize));
  EventTypes.init(EventTypesSchema, EventTypes.config(sequilize));
  FinancialMovements.init(
    FinancialMovementsSchema,
    FinancialMovements.config(sequilize),
  );

  FinancialMovements.associate(sequilize.models);
}

module.exports = setupModels;
