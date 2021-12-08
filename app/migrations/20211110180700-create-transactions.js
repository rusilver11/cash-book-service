'use strict';

const { sequelize } = require("../models/transactions");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      Id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue : Sequelize.UUID4
      },
      TransactionAt: {
        type: Sequelize.DATE
      },
      Status: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Amount: {
        type: Sequelize.DECIMAL
      },
      TransactionType: {
        type: Sequelize.STRING
      },
      PaymentType: {
        type: Sequelize.STRING
      },
      PersonId: {
        type: Sequelize.UUID
      },
      BusinessId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      CreatedBy: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Transactions');
  }
};