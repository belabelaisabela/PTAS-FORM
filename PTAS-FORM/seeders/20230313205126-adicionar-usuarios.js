'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('usuarios', [

      {nome: 'Karen'},
      {nome: 'Gabriel'},
      {nome: 'Vitoria'},
      {nome: 'Mendes'},
      {nome: 'Karina'}

    ], {});
  },

  async down (queryInterface, Sequelize) {
   /* await queryInterface.bulkDelete('usuarios', null, {}); */ 
  }
};
