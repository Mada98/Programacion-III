'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Libros', [
      {
        nombre: 'El eternauta',
        autor: 'John Maxner',
        genero: 'aventura',
        estado: 'completado',
        rating: 9.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'El viaje al centro de la tierra',
        autor: 'Max Luther',
        genero: 'Accion',
        estado: 'pendiente',
        rating: 6.4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Libros', null, {});
  }
};
