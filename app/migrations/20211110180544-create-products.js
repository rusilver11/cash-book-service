'use strict';

const { sequelize } = require("../models/products");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      Id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID4
      },
      Name: {
        type: Sequelize.STRING
      },
      TransactionType: {
        type: Sequelize.STRING
      },
      ProductCategoryId: {
        type: Sequelize.INTEGER
      },
      BusinessId: {
        type: Sequelize.UUID,
        allowNull: false,
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
    await queryInterface.dropTable('Products');
  }
};