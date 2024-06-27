"use strict";
const { Model } = require("sequelize");
const Subscription = require("./subscription");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      verification_code: DataTypes.STRING,
      is_forget_password: DataTypes.STRING,
      isVerified: DataTypes.STRING,
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      stripeSessionId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,

      modelName: "User",
    }
  );
  return User;
};
