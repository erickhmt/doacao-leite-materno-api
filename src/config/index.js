const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT,
    databaseURL: 'mongodb+srv://aktie-admin:YzBJFCKL0EADcQe9@cluster0-g7vzl.mongodb.net/test?retryWrites=true&w=majority',
    secret: 'someRandomStringToCreateOurToken',
    tokenExpiration: 9999999,
};