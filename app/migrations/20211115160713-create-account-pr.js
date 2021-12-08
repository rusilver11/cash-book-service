'use strict';

const { sequelize } = require("../models/businessapar");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BusinessApAR', {
      Id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID4
      },
      AccountPRAt: {
        type: Sequelize.DATE
      },
      TotalAmount: {
        type: Sequelize.DECIMAL
      },
      Description: {
        type: Sequelize.STRING
      },
      PersonId: {
        type: Sequelize.UUID
      },
      DueDate: {
        type: Sequelize.DATE
      },
      StatusPayment: {
        type: Sequelize.STRING
      },
      ApArType: {
        type: Sequelize.STRING
      },
      BusinessId: {
        type: Sequelize.UUID,
        allowNull: false
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
    await queryInterface.dropTable('BusinessApAR');
  }
};