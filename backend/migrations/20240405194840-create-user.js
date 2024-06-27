"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      verification_code: { // Add verification_code column
        type: Sequelize.STRING, // Assuming you want to store codes as strings
      },
      is_forget_password: { // Add is_change_password column
        type: Sequelize.BOOLEAN, // Assuming it's a boolean field indicating whether the user needs to change the password
        defaultValue: false, // Default value is set to false
      },
      isVerified: { // Add is_change_password column
        type: Sequelize.BOOLEAN, // Assuming it's a boolean field indicating whether the user needs to change the password
        defaultValue: false, // Default value is set to false
      },
      isAdmin: { // Add is_change_password column
        type: Sequelize.BOOLEAN, // Assuming it's a boolean field indicating whether the user needs to change the password
        defaultValue: false, // Default value is set to false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
