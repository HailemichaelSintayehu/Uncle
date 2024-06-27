"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Appliances", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      item_name: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      retail_price: {
        type: Sequelize.DOUBLE,
      },
      rental_price: {
        type: Sequelize.DOUBLE,
      },
      feature_images: {
        type: Sequelize.TEXT,
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      brand: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      features: {
        type: Sequelize.TEXT,
      },
      sale_price: {
        type: Sequelize.STRING,
      },
      product_features: {
        type: Sequelize.TEXT,
      },
      capacity: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      depth: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      height: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      width: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      sku: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      warranty: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      condition: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      rating: {
        type: Sequelize.DOUBLE,
      },
      in_stock: {
        type: Sequelize.INTEGER,
      },
      reviews: {
        type: Sequelize.INTEGER,
      },
      warranty_payment: {
        type: Sequelize.INTEGER,
      },
      consumable: {
        type: Sequelize.INTEGER,
      },
      service_maintenance: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Appliances");
  },
};
