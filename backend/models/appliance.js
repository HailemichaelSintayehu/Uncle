"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Appliance extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Appliance.init(
    {
      item_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.STRING,
      },
      serial_number: {
        type: DataTypes.STRING,
      },
      month_added: {
        type: DataTypes.STRING,
      },
      buy: {
        type: DataTypes.STRING,
      },
      rent: {
        type: DataTypes.STRING,
      },
      product: {
        type: DataTypes.STRING,
      },
      size: {
        type: DataTypes.STRING,
      },
      full_retail_price: {
        type: DataTypes.INTEGER,
      },
      "M3_rental_price": {
        type: DataTypes.INTEGER,
      },
      "M6_rental_price": {
        type: DataTypes.INTEGER,
      },
      "M12_rental_price": {
        type: DataTypes.INTEGER,
      },
      "M18_rental_price": {
        type: DataTypes.INTEGER,
      },
      "M24_rental_price": {
        type: DataTypes.INTEGER,
      },
      space: {
        type: DataTypes.STRING,
      },
      "M3_non_discount": {
        type: DataTypes.INTEGER,
      },
      "M6_non_discount": {
        type: DataTypes.INTEGER,
      },
      "M12_non_discount": {
        type: DataTypes.INTEGER,
      },
      "M18_non_discount": {
        type: DataTypes.INTEGER,
      },
      "M24_non_discount": {
        type: DataTypes.INTEGER,
      },
      "Be_Upfront_Payment_3M": {
        type: DataTypes.INTEGER,
      },
      "Be_Upfront_Payment_6M": {
        type: DataTypes.STRING,
      },
      "Be_Upfront_Payment_12M": {
        type: DataTypes.INTEGER,
      },
      "Be_Upfront_Payment_18M": {
        type: DataTypes.INTEGER,
      },
      "Be_Upfront_Payment_24M": {
        type: DataTypes.INTEGER,
      },
      product_code: {
        type: DataTypes.STRING,
      },
      brand: {
        type: DataTypes.STRING,
      },
      model: {
        type: DataTypes.STRING,
      },
      featured_image: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      category: {
        type: DataTypes.STRING,
      },
      key_features: {
        type: DataTypes.STRING,
      },
      product_description: {
        type: DataTypes.TEXT,
      },
      product_specifications: {
        type: DataTypes.STRING,
      },
      warranty: {
        type: DataTypes.STRING,
      },
      condition: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.DOUBLE,
      },
      reviews: {
        type: DataTypes.INTEGER,
      },
      in_stock: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Appliance",
    }
  );

  return Appliance;
};
