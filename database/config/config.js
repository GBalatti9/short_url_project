module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "db_short_url",
    "host": "127.0.0.1",
    "port": "3307",
    "dialect": "mysql",
    dialectModule: require('mysql2'),
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": "3307",
    "dialect": "mysql",
    dialectModule: require('mysql2'),
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DBNAME,
    "host": process.env.DB_HOST,
    "port": process.env.PORT,
    "dialect": "mysql",
    dialectModule: require('mysql2'),
  }
}
