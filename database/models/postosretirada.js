const { Model, DataTypes } = require('sequelize');

class PostosRetirada extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      endereco: DataTypes.STRING,
      telefone: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Estoque, {
      foreignKey: 'postoRetiradaId',
      as: 'estoques',
      onDelete: 'CASCADE',
    })
  }
};

module.exports = PostosRetirada;