const { Model, DataTypes, Sequelize } = require('sequelize');

const FINANCIAL_MOVEMENTS_TABLE = 'financial_movements';

const FinancialMovementsSchema = {
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

class FinancialMovements extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FINANCIAL_MOVEMENTS_TABLE,
      modelName: 'Financial',
      timestamps: false,
    };
  }
}

module.exports = {
  FINANCIAL_MOVEMENTS_TABLE,
  FinancialMovementsSchema,
  FinancialMovements,
};
