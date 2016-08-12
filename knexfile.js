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
    connection: process.env.devConnectionString,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/stage'
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