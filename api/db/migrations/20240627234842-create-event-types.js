'use strict';

const {
  EVENT_TYPES_TABLE,
  EventTypesSchema,
} = require('../models/eventTypes.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(EVENT_TYPES_TABLE, EventTypesSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(EVENT_TYPES_TABLE);
  },
};
