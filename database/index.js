const Sequelize = require('sequelize');
const dbConfig = require('./config/config');

const User = require('./models/User');
const PostosRetirada = require('./models/PostosRetirada');
const Estoque = require('./models/Estoque');
const Doacao = require('./models/Doacao');

const connection = new Sequelize('postgres://ovdsqkek:kiRCloNRg6J_V_-MpMHSYtw0C8MfV5Ag@ruby.db.elephantsql.com:5432/ovdsqkek');

User.init(connection);
PostosRetirada.init(connection);
Estoque.init(connection);
Doacao.init(connection);

PostosRetirada.associate(connection.models);
Estoque.associate(connection.models);
Doacao.associate(connection.models);

module.exports = connection;