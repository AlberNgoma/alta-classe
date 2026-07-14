'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('invoice_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },

      product_id: {
        type: Sequelize.INTEGER,
        references: { model: 'product', key: 'id' },
        allowNull: false

      },

      invoice_id: {
        type: Sequelize.INTEGER,
        references: { model: 'invoice', key: 'id' },
        allowNull: false

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
    await queryInterface.dropTable('invoice_items');
  }
};