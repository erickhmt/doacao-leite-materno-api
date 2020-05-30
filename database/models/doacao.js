const { Model, DataTypes } = require('sequelize');

class Doacao extends Model {
  static init(sequelize) {
    super.init({
      quantidade: DataTypes.INTEGER,
      doadora: DataTypes.STRING,
      receptor: DataTypes.STRING,
      contatoDoadora: DataTypes.STRING,
      dtRetirada: DataTypes.DATE,
      estoqueId: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Estoque, {
      foreignKey: 'estoqueId',
      as: 'estoque',
      onDelete: 'CASCADE',
    })
  }
};

module.exports = Doacao;