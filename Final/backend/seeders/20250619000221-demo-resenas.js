'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Resenas', [
      {
        id_libro: 2,
        resena: 'Buen libro, buena historia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_libro: 1,
        resena: 'Mal libro, mala historia',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Resenas', null, {});
  }
};
