import {Sequelize} from "sequelize" ;
import db from "../config/connectionDatabase.js";

const {DataTypes} = Sequelize;
const Businesses = db.define("Businesses",{
    Id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID4
    },
    UserId:{
      type: DataTypes.UUID,
      allowNull: false
    },
    Name:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Bisnis Agan"
    },
    BusinessCategoryId:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CreatedBy:{
      type: DataTypes.STRING
    },
    CreatedAt:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    UpdatedAt:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    } 
},{freezeTableName:true
});

Businesses.associate = function(models){
      Businesses.hasMany(models.Products,{
        foreignKey: 'BusinessId',
        as: 'BusinessProducts'
      });
      Businesses.hasMany(models.ProductCategory,{
        foreignKey: 'BusinessId',
        as: 'BusinessProductCategory'
      });
      Businesses.hasMany(models.Transactions,{
        foreignKey: 'BusinessId',
        as: 'BusinessTransaction'
      });
      Businesses.hasMany(models.BusinessApAr,{
        foreignKey: 'BusinessId',
        as: 'BusinessBusinessApAr'
      });
      Businesses.belongsTo(models.User,{
        foreignKey: 'UserId',
        as: 'BusinessUser'
      });
      Businesses.belongsTo(models.BusinessCategory,{
        foreignKey: 'BusinessCategoryId',
        as: 'BusinessCategory'
      });
};
export default Businesses;
