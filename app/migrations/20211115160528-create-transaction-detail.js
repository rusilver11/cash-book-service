'use strict';

const { sequelize } = require("../models/transactiondetail");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TransactionDetail', {
      TransactionId: {
        allowNull: false,
        type: Sequelize.UUID
      },
      ProductId: {
        type: Sequelize.UUID
      },
      Qty: {
        type: Sequelize.DECIMAL
      },
      CreatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UpdatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TransactionDetail');
  }
};