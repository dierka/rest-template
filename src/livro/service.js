module.exports = (server) => {
    return {

        insert: () => {
            return new Promise((resolve, reject) => {

                return resolve('livro/service');
            });
        }

    }

};