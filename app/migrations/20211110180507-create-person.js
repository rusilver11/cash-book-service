'use strict';

const { sequelize } = require("../models/person");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Persons', {
      Id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID4
      },
      UserId: {
        type: Sequelize.UUID
      },
      Name: {
        type: Sequelize.STRING
      },
      Phone: {
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
    await queryInterface.dropTable('Persons');
  }
};