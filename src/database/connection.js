const godb = require('go-database');
const config = require('./../config/env');

module.exports = (server) => {

    return godb.mssql.connectionFactory.createConnection(config.dbConfig);

};