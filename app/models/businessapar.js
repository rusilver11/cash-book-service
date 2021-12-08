'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusinessApAr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BusinessApAr.hasMany(models.BusinessApArDetail,{
        foreignKey: 'BusinessApArId',
        as: 'BusinessApArBusinessApArDetail'
      });
      BusinessApAr.belongsTo(models.Business,{
        foreignKey: 'BusinessId',
        as: 'BusinessApArBusiness'
      });
      BusinessApAr.belongsTo(models.Person,{
        foreignKey: 'PersonId',
        as: 'BusinessApArPerson'
      });
    }
  };
  BusinessApAr.init({
    Id: DataTypes.UUID,
    ApArAt: DataTypes.DATE,
    TotalAmount: DataTypes.DECIMAL,
    Description: DataTypes.STRING,
    PersonId: DataTypes.UUID,
    DueDate: DataTypes.DATE,
    StatusPayment: DataTypes.STRING,
    ApArType: DataTypes.STRING,
    BusinessId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'BusinessApAr',
  });
  return BusinessApAr;
};