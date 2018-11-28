module.exports = (server) => {

    server.use((error, req, res, next) => {

        let httpContext = req.app.httpContext;

        let transaction = httpContext.get('transaction');

        req.app.database.transaction.rollbackTransaction(transaction).then(() => {

            console.log('Erro interceptado.');

            console.log('Rollback efetuado.');

            console.log('Stack:' + error.stack);

            res.status(500).send({error: error.message});

        }).catch((err) => {

            console.log('Erro ao realizar o Rollback.');

            res.status(500).send(err);

        });
    });

};