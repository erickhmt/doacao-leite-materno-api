'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Doacaos',
    [
      {
        quantidade: 2000,
        doadora: 'Maria das Neves',
        receptor: 'Joaquina dos Santos',
        contatoDoadora: 'teste@maria.com',
        dtRetirada: new Date(), 
        estoqueId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Doacaos', null, {}),
};
