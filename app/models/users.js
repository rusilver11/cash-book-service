import {Sequelize} from "sequelize" ;
import db from "../config/connectionDatabase.js";

const {DataTypes} = Sequelize;
const Users = db.define("Users",{
      Id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUID4
      },
      Name:{
        type: DataTypes.STRING,
        defaultValue: "Juragan"
      },
      Phone:{
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
      },
      RefreshToken:{
        type:DataTypes.TEXT
      },
      OTP:{
        type:DataTypes.INTEGER
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

Users.associate = function(models){
  Users.hasMany(models.Business,{
    foreignKey : 'UserId',
    as: 'UserBusiness',
    constraints: false
  });
  Users.hasMany(models.Person,{
    foreignKey : 'UserId',
    as: 'UserPerson',
    constraints: false
  });
};
export default Users;
