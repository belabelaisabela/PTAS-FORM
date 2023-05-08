'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
       await queryInterface.bulkInsert('pessoas', [

        {nome: 'Any', sobrenome: 'Silva', idade:17, altura:'1,74'},
        {nome: 'Karen', sobrenome: 'Decleva', idade:17, altura:'1,76'},
        {nome: 'Karina', sobrenome: 'Decleva', idade:16, altura:'1,68'},
        {nome: 'Renato', sobrenome: 'Borges', idade:17, altura:'1,89'},
        {nome: 'Arthur', sobrenome: 'Silva', idade:16, altura:'1,68'},
        {nome: 'Izabella', sobrenome: 'Miranda', idade:16, altura:'1,75'}

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
