require('dotenv').config()

module.exports = {
  development: {
    url: 'postgres://ovdsqkek:kiRCloNRg6J_V_-MpMHSYtw0C8MfV5Ag@ruby.db.elephantsql.com:5432/ovdsqkek',
    dialect: 'postgres',
  },
  test: {
    url: 'postgres://ovdsqkek:kiRCloNRg6J_V_-MpMHSYtw0C8MfV5Ag@ruby.db.elephantsql.com:5432/ovdsqkek',
    dialect: 'postgres',
  },
  production: {
    url: 'postgres://ovdsqkek:kiRCloNRg6J_V_-MpMHSYtw0C8MfV5Ag@ruby.db.elephantsql.com:5432/ovdsqkek',
    dialect: 'postgres',
  },
}