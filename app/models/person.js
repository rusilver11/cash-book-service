'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Person.belongsTo(models.User,{
        foreignKey: 'UserId',
        as: 'PersonUser'
      })
    }
  };
  Person.init({
    Id: DataTypes.UUID,
    UserId: DataTypes.UUID,
    Name: DataTypes.STRING,
    Phone: DataTypes.STRING,
    CreatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};