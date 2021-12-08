'use strict';
const { sequelize } = require("../models/business");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Businesses', {
      Id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID4
      },
      UserId: {
        type: Sequelize.UUID,
        reference:{
          model:'Users',
          key: 'Id'
        },
        allowNull: 'false',
        onDelete: 'CASCADE'
      },
      Name: {
        type: Sequelize.STRING
      },
      BusinessCategoryId: {
        type: Sequelize.INTEGER,
        reference:{
          model:'BusinessCategory',
          key: 'Id'
        },
        allowNull: 'false',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Businesses');
  }
};
