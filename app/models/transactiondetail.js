'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransactionDetail.belongsTo(models.TransactionDetail,{
        foreignKey: 'TransactionId',
        as: 'TransaactionDetailTransaction'
      });
      TransactionDetail.belongsTo(models.Product,{
        foreignKey: 'ProductId',
        as: 'TransactionDetailProduct'
      });  
    }
  };
  TransactionDetail.init({
    TransactionId: DataTypes.UUID,
    ProductId: DataTypes.UUID,
    Qty: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'TransactionDetail',
  });
  return TransactionDetail;
};