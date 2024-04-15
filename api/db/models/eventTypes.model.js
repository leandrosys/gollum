const { Model, DataTypes, Sequelize } = require('sequelize');

const EVENT_TYPES_TABLE = 'event_tables';

const EventTypesSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class EventTypes extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EXPENSES_TABLE,
      modelName: 'EventTypes',
      timestamps: false,
    };
  }
}

module.exports = { EVENT_TYPES_TABLE, EventTypesSchema, EventTypes };
