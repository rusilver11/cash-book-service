'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.hasMany(models.TransactionDetail,{
        foreignKey: 'ProductId',
        as: 'ProductTransactionDetail'
      });      
      Products.belongsTo(models.Business,{
        foreignKey: 'BusinessId',
        as: 'ProductBusiness'
      });
      Products.belongsTo(models.ProductCategory,{
        foreignKey: 'ProductCategoryId',
        as: 'ProductProductCategory'
      });
    }
  };
  Products.init({
    Id: DataTypes.UUID,
    Name: DataTypes.STRING,
    TransactionType: DataTypes.STRING,
    ProductCategoryId: DataTypes.INTEGER,
    BusinessId: DataTypes.UUID,
    CreatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};