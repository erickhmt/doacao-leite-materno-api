'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Doacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      doadora: {
        type: Sequelize.STRING
      },
      receptor: {
        type: Sequelize.STRING
      },
      contatoDoadora: {
        type: Sequelize.STRING
      },
      dtRetirada: {
        type: Sequelize.DATE
      },
      estoqueId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Estoques', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Doacaos');
  }
};