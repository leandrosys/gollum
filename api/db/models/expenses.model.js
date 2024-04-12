const { Model, DataTypes, Sequelize } = require('sequelize');

const EXPENSES_TABLE = 'accounting_events';

const ExpensesSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  transactionDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'transaction_date',
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  category: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  value: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  eventType: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'event_type',
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Expenses extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EXPENSES_TABLE,
      modelName: 'Expenses',
      timestamps: false,
    };
  }
}

module.exports = { EXPENSES_TABLE, ExpensesSchema, Expenses };
