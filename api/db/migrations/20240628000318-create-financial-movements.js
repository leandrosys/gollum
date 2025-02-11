'use strict';

const {
  FINANCIAL_MOVEMENTS_TABLE,
  FinancialMovementsSchema,
} = require('../models/financialMovements.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(
      FINANCIAL_MOVEMENTS_TABLE,
      FinancialMovementsSchema,
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(FINANCIAL_MOVEMENTS_TABLE);
  },
};
