const Sequelize = require('sequelize');
const dbConfig = require('./config/config');

const User = require('./models/User');
const PostosRetirada = require('./models/PostosRetirada');
const Estoque = require('./models/Estoque');
const Doacao = require('./models/Doacao');

const connection = new Sequelize('postgres://zlxgtkfsyblwcf:195027bb5f304cb4ea4b6faac6ab946db4d73506ff24b8c905b43706b407fa4c@ec2-52-70-15-120.compute-1.amazonaws.com:5432/d7tdb8slo0auua');

User.init(connection);
PostosRetirada.init(connection);
Estoque.init(connection);
Doacao.init(connection);

PostosRetirada.associate(connection.models);
Estoque.associate(connection.models);
Doacao.associate(connection.models);

module.exports = connection;