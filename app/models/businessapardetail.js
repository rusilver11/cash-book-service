'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusinessApArDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BusinessApArDetail.belongsTo(models.BusinessApAr,{
        foreignKey: 'BusinessApArId',
        as: 'BusinessApArDetailBusinessApAr'
      });
    }
  };
  BusinessApArDetail.init({
    BusinessApArId: DataTypes.UUID,
    BusinessApArDetailAt: DataTypes.DATE,
    Amount: DataTypes.DECIMAL,
    Description: DataTypes.STRING,
    ApArType: DataTypes.STRING,
    CreatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BusinessApArDetail',
  });
  return BusinessApArDetail;
};