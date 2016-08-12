var pg = require('pg');
pg.defaults.ssl = true;

module.exports = {
  local: {
    client: 'pg',
    connection: {
      host:'localhost',
      user: 'kiran',
      password: 'Nepal123',
      database: 'petinfo2016'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  development: {
    client: 'pg',
    connection: "postgres://jtvnjffuzogrqi:zDll8QwgCVBrj3BN3NB2afe0vV@ec2-54-243-126-40.compute-1.amazonaws.com:5432/d6vqlp75rbdmeg",
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    },
    pool: {
      min: 1,
      max: 7
    }
  }
  //test: {
  //   client: 'pg',
  //   connection: 'postgres://localhost/postgres',
  //   migrations: {
  //     directory: __dirname + '/db/migrations'
  //   },
  //   seeds: {
  //     directory: __dirname + '/db/seeds/test'
  //   }
  // },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL,
  //   migrations: {
  //     directory: __dirname + '/db/migrations'
  //   },
  //   seeds: {
  //     directory: __dirname + '/db/seeds/production'
  //   }
  // }
};