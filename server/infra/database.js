const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'api_nodejs'
});

module.exports = db;