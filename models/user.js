'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    email: {
      type : DataTypes.STRING,
      unique : {
        msg: "Email has already registered"
      },
      allowNull : false,
      validate : {
        notNull : {
          msg : "Email is Required"
        },
        notEmpty : {
          msg : "Email is Required"
        },
        isEmail : {
          msg : "Please enter email with right format"
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "Password is Required"
        },
        notNull : {
          msg : "Password is Required"
        },
        min:{
          args:[5],
          msg: "Minimum 5 characters required"
        }
      }
    },
    username: {
      type : DataTypes.STRING,
      unique : {
        msg: "Username has already been taken"
      },
      allowNull : false,
      validate : {
        notNull : {
          msg : "Username is Required"
        },
        notEmpty : {
          msg : "Username is Required"
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};