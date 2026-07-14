'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false
      },

      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },

      category: {
        type: Sequelize.ENUM('higiene', 'protecao', 'decorativo', 'tratamento'),
        allowNull: false
      },

      picture: {
        type: Sequelize.BLOB,
        allowNull: false
      },

      madeIn: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product');
  }
};