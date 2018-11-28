module.exports = (server) => {

    server.use('/*', (req, res, next) => {

        let httpContext = req.app.httpContext;

        req.app.database.transaction.createTransaction().then((transaction) => {

            httpContext.set('transaction', transaction);

            console.log('Request interceptada. Transaction estabelecida.');

            return next();

        }).catch((err) => {

            console.log('Erro ao obter transação do banco de dados');

            res.send(err);
        });

    });

};