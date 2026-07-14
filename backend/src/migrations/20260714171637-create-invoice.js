'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('invoice', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      total: {
        type: Sequelize.STRING,
        allowNull: false
      },

      client_id: {
        type: Sequelize.INTEGER,
        references: { model: 'client', key: 'id' },
        allowNull: false
      },

      status: {
        type: Sequelize.ENUM('pago', 'pendente', 'recusado'),
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
    await queryInterface.dropTable('invoice');
  }
};