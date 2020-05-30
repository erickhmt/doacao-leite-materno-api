const { Model, DataTypes } = require('sequelize');

class Estoque extends Model {
  static init(sequelize) {
    super.init({
      limite: DataTypes.INTEGER,
      postoRetiradaId: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate(models) {

    this.belongsTo(models.PostosRetirada, {
      foreignKey: 'postoRetiradaId',
      as: 'postoRetirada'
    });

    this.hasMany(models.Doacao, {
      foreignKey: 'estoqueId',
      as: 'doacoes',
      onDelete: 'CASCADE',
    })
  }
};

module.exports = Estoque;