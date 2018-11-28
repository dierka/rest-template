const godb = require('go-database');

module.exports = (server) => {

    return godb.mssql.transactionFactory;

};