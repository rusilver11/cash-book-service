'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductCategory.belongsTo(models.Product,{
        foreignKey: 'BusinessId',
        as: 'ProductCategoryBusiness'
      });
    }
  };
  ProductCategory.init({
    Id: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    BusinessId: DataTypes.UUID,
    CreatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductCategory',
  });
  return ProductCategory;
};