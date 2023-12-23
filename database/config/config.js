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
    "username": "root",
    "password": null,
    "database": "db_short_url",
    "host": "127.0.0.1",
    "port": "3307",
    "dialect": "mysql",
    dialectModule: require('mysql2'),
  }
}
