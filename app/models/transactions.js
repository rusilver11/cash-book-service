'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transactions.hasMany(models.TransactionDetail,{
        foreignKey: 'TransactiId',
        as: 'TransaactionPerson'
      });
      Transactions.belongsTo(models.Person,{
        foreignKey: 'PersonId',
        as: 'TransaactionPerson'
      });
      Transactions.belongsTo(models.Business,{
        foreignKey: 'BusinessId',
        as: 'TransaactionBusiness'
      });    
    }
  };
  Transactions.init({
    Id: DataTypes.UUID,
    TransactionAt: DataTypes.DATE,
    Status: DataTypes.STRING,
    Description: DataTypes.STRING,
    Amount: DataTypes.DECIMAL,
    TransactionType: DataTypes.STRING,
    PaymentType: DataTypes.STRING,
    PersonId: DataTypes.UUID,
    BusinessId: DataTypes.UUID,
    CreatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};