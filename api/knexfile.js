const path = require('path')

const use = process.env.DB_DRIVER || 'pg'

const connections = {
  sqlite: {
    client: 'sqlite3',

    connection: {
      filename: path.resolve(__dirname, 'database.sqlite')
    },

    migrations: {
      directory: path.resolve(__dirname, 'migrations')
    },

    seeds: {
      directory: path.resolve(__dirname, 'seeds')
    },

    useNullAsDefault: true,
  },

  pg: {
    client: 'pg',

    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'postgres_db'
    },

    migrations: {
      directory: path.resolve(__dirname, 'migrations')
    },

    seeds: {
      directory: path.resolve(__dirname, 'seeds')
    },

    debug: process.env.DB_DEBUG === 'true' ? true : false
  } 
}

module.exports = connections[use]