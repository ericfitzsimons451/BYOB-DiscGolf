module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/golfcourses',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev',
    },
    useNullAsDefault: true
  }

};
