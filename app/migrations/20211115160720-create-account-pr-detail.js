'use strict';

const { sequelize } = require("../models/businessapardetail");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BusinessApArDetail', {
      BusinessApArId: {
        allowNull: false,
        type: Sequelize.UUID
      },
      BusinessApArAt: {
        type: Sequelize.DATE
      },
      Amount: {
        type: Sequelize.DECIMAL
      },
      Description: {
        type: Sequelize.STRING
      },
      ApArType: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('BusinessApArDetail');
  }
};