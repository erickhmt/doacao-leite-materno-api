'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'PostosRetiradas',
    [
      {
        name: 'Posto Santa Isabel',
        endereco: 'Av. Brasil Norte, 505 - Centro, Anápolis - GO, 75113-570',
        telefone: '(62) 3362-3382',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('PostosRetiradas', null, {}),
};
