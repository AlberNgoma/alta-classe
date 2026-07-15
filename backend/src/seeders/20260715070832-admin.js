'use strict';

/** @type {import('sequelize-cli').Migration} */

const bcrypt = require("bcrypt")

module.exports = {
  async up(queryInterface, Sequelize) {
    const password = "altaClasse2026"
    const safePassword = await bcrypt.hash(password, (10));

    try {
      await queryInterface.bulkInsert('profile', [{
        name: 'admin',
        email: 'acadmin@gmail.com',
        password: safePassword,
        type: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }]

      )

      console.log('success, admin created !')

    } catch (error) {
      console.log(`error !, ${error}`)
    }

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profile', null, {})
  }
};
