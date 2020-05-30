const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    secret: 'someRandomStringToCreateOurToken',
    tokenExpiration: 9999999,
};