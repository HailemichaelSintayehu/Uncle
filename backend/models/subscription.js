"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    static associate(models) {
      Subscription.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  
Subscription.init(
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    plan: DataTypes.STRING,
    option: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    stripe_subscription_item_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stripe_subscription_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    residential_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preferred_delivery_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preferred_communication_method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Subscription",
    tableName: "Subscriptions",
    timestamps: true,
  }
);
  return Subscription;
};
