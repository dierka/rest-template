const express = require('express');
const router = express.Router();

module.exports = (server) => {

    server.use('/livro', router);

    router.get('/:id', (req, res, next) => {

        if (req.params.id == 1) {
            throw Error("Meu erro.");
        } else {
            res.send('Deu boa');
        }

    });

    router.get('/', (req, res, next) => {

        let httpContext = req.app.httpContext;

        server.livro.service.insert().then((data) => {

            console.log(data);

            return res.send('ok');

        });

    });

};