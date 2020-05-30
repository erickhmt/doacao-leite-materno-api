const Sequelize = require('sequelize');
const dbConfig = require('./config/config');

const User = require('./models/user');
const PostosRetirada = require('./models/PostosRetirada');
const Estoque = require('./models/Estoque');
const Doacao = require('./models/Doacao');

let connection;

console.log('------------------------------- ', process.env.DATABASE_URL);
if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    connection = new Sequelize(process.env.DATABASE_URL, {
        dialect:  'postgres',
        protocol: 'postgres'
    })
} else {
    connection = new Sequelize('postgres://byrpwrxt:S5k54r6vucZqt7jEWhOstuVpmzD4CR_o@ruby.db.elephantsql.com:5432/byrpwrxt');
}
console.log('------------------------------ connection ',connection);

User.init(connection);
PostosRetirada.init(connection);
Estoque.init(connection);
Doacao.init(connection);

PostosRetirada.associate(connection.models);
Estoque.associate(connection.models);
Doacao.associate(connection.models);

module.exports = connection;